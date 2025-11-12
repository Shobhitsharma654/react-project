import React, { useEffect, useMemo, useRef, useState } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import uniqid from 'uniqid'
import { assets } from '../../assets/assets'

const toolbarOptions = [
  [{ header: [1, 2, 3, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ align: [] }],
  ['link', 'blockquote', 'code-block'],
  ['clean'],
]

const emptyLecture = {
  lectureTitle: '',
  lectureDuration: '',
  lectureUrl: '',
  isPreviewFree: false,
}

const storageKey = 'addCourseDraft_v1'

const AddCourse = () => {
  const quillRef = useRef(null)
  const editorRef = useRef(null)
  const [courseTitle, setCourseTitle] = useState('')
  const [coursePrice, setCoursePrice] = useState('')
  const [discount, setDiscount] = useState('0')
  const [image, setImage] = useState(null)
  const [chapters, setChapters] = useState([])
  const [newChapterTitle, setNewChapterTitle] = useState('')

  // modal
  const [showPopup, setShowPopup] = useState(false)
  const [currentChapterId, setCurrentChapterId] = useState(null)
  const [lectureDetails, setLectureDetails] = useState(emptyLecture)

  // ---------- helpers ----------
  const byId = (id) => chapters.find((c) => c.chapterId === id)

  const moveItem = (arr, index, dir) => {
    const next = [...arr]
    const ni = index + dir
    if (ni < 0 || ni >= next.length) return next
    ;[next[index], next[ni]] = [next[ni], next[index]]
    return next.map((it, i) => ({ ...it, chapterOrder: i + 1 }))
  }

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n))

  const totalLectures = useMemo(
    () =>
      chapters.reduce((sum, ch) => sum + (ch.chapterContent?.length || 0), 0),
    [chapters]
  )

  // ---------- init + autosave ----------
  useEffect(() => {
    // restore draft
    const draft = localStorage.getItem(storageKey)
    if (draft) {
      try {
        const parsed = JSON.parse(draft)
        setCourseTitle(parsed.courseTitle || '')
        setCoursePrice(parsed.coursePrice ?? '')
        setDiscount(parsed.discount ?? '0')
        setChapters(parsed.chapters || [])
        setImage(null) // don’t restore file objects
      } catch {}
    }
  }, [])

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        placeholder: 'Write a great description…',
        modules: { toolbar: toolbarOptions },
      })
      // restore description after Quill mounts
      const draft = localStorage.getItem(storageKey)
      if (draft) {
        try {
          const parsed = JSON.parse(draft)
          if (parsed.courseDescription) {
            quillRef.current.root.innerHTML = parsed.courseDescription
          }
        } catch {}
      }
    }
  }, [])

  // autosave
  useEffect(() => {
    const payload = {
      courseTitle,
      coursePrice,
      discount,
      courseDescription: quillRef.current?.root?.innerHTML || '',
      chapters,
    }
    localStorage.setItem(storageKey, JSON.stringify(payload))
  }, [courseTitle, coursePrice, discount, chapters])

  // ---------- image d&d ----------
  const onDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith('image/')) setImage(file)
  }

  const onThumbChange = (e) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) setImage(file)
  }

  // ---------- chapters ----------
  const addChapter = () => {
    const title = newChapterTitle.trim()
    if (!title) return
    const order = chapters.length + 1
    setChapters((prev) => [
      ...prev,
      {
        chapterId: uniqid(),
        chapterTitle: title,
        chapterContent: [],
        collapsed: false,
        chapterOrder: order,
      },
    ])
    setNewChapterTitle('')
  }

  const toggleChapter = (id) =>
    setChapters((prev) =>
      prev.map((c) =>
        c.chapterId === id ? { ...c, collapsed: !c.collapsed } : c
      )
    )

  const removeChapter = (id) =>
    setChapters((prev) =>
      prev.filter((c) => c.chapterId !== id).map((c, i) => ({
        ...c,
        chapterOrder: i + 1,
      }))
    )

  const moveChapter = (id, dir) =>
    setChapters((prev) => {
      const idx = prev.findIndex((c) => c.chapterId === id)
      return moveItem(prev, idx, dir)
    })

  // ---------- lectures ----------
  const openLectureModal = (chapterId) => {
    setCurrentChapterId(chapterId)
    setLectureDetails(emptyLecture)
    setShowPopup(true)
  }

  const removeLecture = (chapterId, lectureIndex) =>
    setChapters((prev) =>
      prev.map((c) => {
        if (c.chapterId !== chapterId) return c
        const cc = [...c.chapterContent]
        cc.splice(lectureIndex, 1)
        return {
          ...c,
          chapterContent: cc.map((l, i) => ({ ...l, lectureOrder: i + 1 })),
        }
      })
    )

  const moveLecture = (chapterId, index, dir) =>
    setChapters((prev) =>
      prev.map((c) => {
        if (c.chapterId !== chapterId) return c
        const moved = moveItem(c.chapterContent, index, dir).map((l, i) => ({
          ...l,
          lectureOrder: i + 1,
        }))
        return { ...c, chapterContent: moved }
      })
    )

  const addLecture = () => {
    // validation
    const title = lectureDetails.lectureTitle.trim()
    const duration = Number(lectureDetails.lectureDuration)
    const url = lectureDetails.lectureUrl.trim()

    const urlOk =
      /^https?:\/\/.+/i.test(url) && (url.includes('youtu') || url.includes('.'))

    if (!title) return alert('Lecture title is required')
    if (!Number.isFinite(duration) || duration <= 0)
      return alert('Duration must be a positive number (in minutes)')
    if (!urlOk) return alert('Please add a valid http(s) URL')

    setChapters((prev) =>
      prev.map((c) => {
        if (c.chapterId !== currentChapterId) return c
        const order = (c.chapterContent?.length || 0) + 1
        return {
          ...c,
          chapterContent: [
            ...c.chapterContent,
            {
              ...lectureDetails,
              lectureDuration: duration,
              lectureId: uniqid(),
              lectureOrder: order,
            },
          ],
        }
      })
    )
    setShowPopup(false)
  }

  // ---------- submit (frontend only) ----------
  const handleSubmit = (e) => {
    e.preventDefault()
    const priceNum = Number(coursePrice)
    const discountNum = Number(discount)
    const desc = quillRef.current?.root?.innerHTML || ''

    if (!courseTitle.trim()) return alert('Course title is required')
    if (!Number.isFinite(priceNum) || priceNum < 0)
      return alert('Course price must be a non-negative number')
    if (!Number.isFinite(discountNum) || discountNum < 0 || discountNum > 100)
      return alert('Discount must be between 0 and 100')
    if (!desc || desc === '<p><br></p>')
      return alert('Please write a course description')
    if (!chapters.length) return alert('Add at least one chapter')

    const courseData = {
      courseTitle: courseTitle.trim(),
      courseDescription: desc,
      coursePrice: priceNum,
      discount: discountNum,
      thumbnail: image ? image.name : null,
      courseContent: chapters,
    }

    console.log('✅ Course Submitted (Frontend Only):', courseData)
    alert('Course created successfully ✅ (Frontend only)')

    // reset
    setCourseTitle('')
    setCoursePrice('')
    setDiscount('0')
    setImage(null)
    setChapters([])
    if (quillRef.current) quillRef.current.root.innerHTML = ''
    localStorage.removeItem(storageKey)
  }

  // total minutes (quick glance)
  const totalMinutes = useMemo(
    () =>
      chapters.reduce(
        (sum, ch) =>
          sum +
          ch.chapterContent.reduce(
            (s, l) => s + Number(l.lectureDuration || 0),
            0
          ),
        0
      ),
    [chapters]
  )

  return (
    <div className="flex-1 flex items-stretch justify-center overflow-auto md:p-8 p-3 bg-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full max-w-3xl text-gray-700"
      >
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold">Create Course</h2>
          <div className="text-xs text-gray-500">
            {totalLectures} lectures · {totalMinutes} mins total
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-1">
          <label className="text-sm">Course Title</label>
          <input
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            type="text"
            placeholder="e.g., React for Beginners"
            className="border px-3 py-2 rounded outline-none focus:ring-2 ring-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label className="text-sm">Course Description</label>
          <div
            ref={editorRef}
            className="border rounded p-2 min-h-40"
          />
        </div>

        {/* Price & Thumbnail */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex items-center gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-sm">Price (₹)</label>
              <input
                value={coursePrice}
                onChange={(e) => setCoursePrice(e.target.value)}
                type="number"
                min="0"
                step="0.01"
                className="border w-32 px-3 py-2 rounded outline-none focus:ring-2 ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm">Discount %</label>
              <input
                value={discount}
                onChange={(e) =>
                  setDiscount(String(clamp(Number(e.target.value || 0), 0, 100)))
                }
                type="number"
                min="0"
                max="100"
                className="border w-28 px-3 py-2 rounded outline-none focus:ring-2 ring-blue-500"
              />
            </div>
          </div>

          <div className="flex-1">
            <label className="text-sm block mb-2">Course Thumbnail</label>
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={onDrop}
              className="border rounded p-3 flex items-center gap-3 justify-between"
            >
              <label className="flex items-center gap-3 cursor-pointer">
                <img
                  src={assets.file_upload_icon}
                  className="p-2 bg-blue-500 rounded"
                  alt="upload"
                />
                <span className="text-sm">Click or drop image here</span>
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={onThumbChange}
                />
              </label>

              {image ? (
                <div className="flex items-center gap-3">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="thumb"
                    className="h-12 w-20 object-cover rounded border"
                  />
                  <button
                    type="button"
                    className="text-xs text-red-600 underline"
                    onClick={() => setImage(null)}
                  >
                    Remove
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Chapters */}
        <div className="flex items-center gap-2">
          <input
            value={newChapterTitle}
            onChange={(e) => setNewChapterTitle(e.target.value)}
            placeholder="New chapter title"
            className="border px-3 py-2 rounded flex-1 outline-none focus:ring-2 ring-blue-500"
          />
          <button
            type="button"
            onClick={addChapter}
            className="px-4 py-2 rounded bg-blue-600 text-white"
          >
            + Add Chapter
          </button>
          <button
            type="button"
            onClick={() =>
              setChapters((prev) =>
                prev.map((c) => ({ ...c, collapsed: true }))
              )
            }
            className="px-3 py-2 rounded border"
          >
            Collapse All
          </button>
          <button
            type="button"
            onClick={() =>
              setChapters((prev) =>
                prev.map((c) => ({ ...c, collapsed: false }))
              )
            }
            className="px-3 py-2 rounded border"
          >
            Expand All
          </button>
        </div>

        {/* Chapter list */}
        <div className="space-y-3">
          {chapters.map((chapter, cIdx) => (
            <div key={chapter.chapterId} className="border rounded">
              <div className="flex items-center justify-between p-3 border-b bg-gray-50">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => toggleChapter(chapter.chapterId)}
                    title="Toggle"
                    className="w-7 h-7 grid place-content-center border rounded"
                  >
                    <img
                      src={assets.dropdown_icon}
                      alt="toggle"
                      className={`w-3 transition ${chapter.collapsed ? '-rotate-90' : ''}`}
                    />
                  </button>
                  <strong className="truncate">
                    {chapter.chapterOrder}. {chapter.chapterTitle}
                  </strong>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    title="Move Up"
                    onClick={() => moveChapter(chapter.chapterId, -1)}
                    className="px-2 py-1 border rounded text-xs"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    title="Move Down"
                    onClick={() => moveChapter(chapter.chapterId, 1)}
                    className="px-2 py-1 border rounded text-xs"
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => openLectureModal(chapter.chapterId)}
                    className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                  >
                    + Lecture
                  </button>
                  <button
                    type="button"
                    onClick={() => removeChapter(chapter.chapterId)}
                    className="px-3 py-1 bg-red-50 text-red-600 rounded text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {!chapter.collapsed && (
                <div className="p-3">
                  {chapter.chapterContent.length === 0 && (
                    <p className="text-sm text-gray-500 mb-2">
                      No lectures yet. Click <b>+ Lecture</b> to add one.
                    </p>
                  )}

                  {chapter.chapterContent.map((lecture, lIdx) => (
                    <div
                      key={lecture.lectureId}
                      className="flex items-center justify-between py-2 border-b last:border-0"
                    >
                      <div className="min-w-0">
                        <p className="truncate">
                          {lecture.lectureOrder}. {lecture.lectureTitle}{' '}
                          <span className="text-xs text-gray-500">
                            • {lecture.lectureDuration}m
                            {lecture.isPreviewFree ? ' • Free Preview' : ''}
                          </span>
                        </p>
                        <a
                          href={lecture.lectureUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-blue-600 underline"
                        >
                          {lecture.lectureUrl}
                        </a>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          title="Move Up"
                          onClick={() => moveLecture(chapter.chapterId, lIdx, -1)}
                          className="px-2 py-1 border rounded text-xs"
                        >
                          ↑
                        </button>
                        <button
                          type="button"
                          title="Move Down"
                          onClick={() => moveLecture(chapter.chapterId, lIdx, 1)}
                          className="px-2 py-1 border rounded text-xs"
                        >
                          ↓
                        </button>
                        <button
                          type="button"
                          onClick={() => removeLecture(chapter.chapterId, lIdx)}
                          className="px-3 py-1 bg-red-50 text-red-600 rounded text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            className="bg-black text-white py-2.5 px-6 rounded"
          >
            SUBMIT COURSE
          </button>
        </div>
      </form>

      {/* Lecture Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 grid place-items-center z-50">
          <div className="bg-white rounded p-4 w-[22rem] relative">
            <button
              className="absolute top-3 right-3"
              onClick={() => setShowPopup(false)}
              aria-label="Close"
            >
              <img src={assets.cross_icon} alt="close" className="w-4" />
            </button>

            <h3 className="text-lg font-semibold mb-3">Add Lecture</h3>

            <label className="text-sm">Lecture Title</label>
            <input
              type="text"
              className="border w-full px-2 py-2 rounded mb-2"
              value={lectureDetails.lectureTitle}
              onChange={(e) =>
                setLectureDetails({ ...lectureDetails, lectureTitle: e.target.value })
              }
              placeholder="Intro to React"
            />

            <label className="text-sm">Duration (mins)</label>
            <input
              type="number"
              min="1"
              className="border w-full px-2 py-2 rounded mb-2"
              value={lectureDetails.lectureDuration}
              onChange={(e) =>
                setLectureDetails({ ...lectureDetails, lectureDuration: e.target.value })
              }
              placeholder="e.g., 25"
            />

            <label className="text-sm">Video URL</label>
            <input
              type="url"
              className="border w-full px-2 py-2 rounded mb-3"
              value={lectureDetails.lectureUrl}
              onChange={(e) =>
                setLectureDetails({ ...lectureDetails, lectureUrl: e.target.value })
              }
              placeholder="https://…"
            />

            <label className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                checked={lectureDetails.isPreviewFree}
                onChange={(e) =>
                  setLectureDetails({ ...lectureDetails, isPreviewFree: e.target.checked })
                }
              />
              <span className="text-sm">Free Preview</span>
            </label>

            <button
              onClick={addLecture}
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              ADD LECTURE
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddCourse
