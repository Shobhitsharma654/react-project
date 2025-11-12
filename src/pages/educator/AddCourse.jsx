import React, { useEffect, useRef, useState } from 'react';
import uniqid from 'uniqid';
import Quill from 'quill';
import { assets } from '../../assets/assets';

const AddCourse = () => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const [courseTitle, setCourseTitle] = useState('');
  const [coursePrice, setCoursePrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [image, setImage] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(null);

  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: '',
    lectureDuration: '',
    lectureUrl: '',
    isPreviewFree: false,
  });

  // ✅ Add / Remove / Toggle Chapter
  const handleChapter = (action, chapterId) => {
    if (action === 'add') {
      const title = prompt('Enter Chapter Name:');
      if (title) {
        const newChapter = {
          chapterId: uniqid(),
          chapterTitle: title,
          chapterContent: [],
          collapsed: false,
          chapterOrder:
            chapters.length > 0 ? chapters.slice(-1)[0].chapterOrder + 1 : 1,
        };
        setChapters([...chapters, newChapter]);
      }
    } else if (action === 'remove') {
      setChapters(chapters.filter((chapter) => chapter.chapterId !== chapterId));
    } else if (action === 'toggle') {
      setChapters(
        chapters.map((chapter) =>
          chapter.chapterId === chapterId
            ? { ...chapter, collapsed: !chapter.collapsed }
            : chapter
        )
      );
    }
  };

  // ✅ Add / Remove Lecture
  const handleLecture = (action, chapterId, lectureIndex) => {
    if (action === 'add') {
      setCurrentChapterId(chapterId);
      setShowPopup(true);
    } else if (action === 'remove') {
      setChapters(
        chapters.map((chapter) => {
          if (chapter.chapterId === chapterId) {
            chapter.chapterContent.splice(lectureIndex, 1);
          }
          return chapter;
        })
      );
    }
  };

  const addLecture = () => {
    setChapters(
      chapters.map((chapter) => {
        if (chapter.chapterId === currentChapterId) {
          const newLecture = {
            ...lectureDetails,
            lectureOrder:
              chapter.chapterContent.length > 0
                ? chapter.chapterContent.slice(-1)[0].lectureOrder + 1
                : 1,
            lectureId: uniqid(),
          };
          chapter.chapterContent.push(newLecture);
        }
        return chapter;
      })
    );
    setShowPopup(false);
    setLectureDetails({
      lectureTitle: '',
      lectureDuration: '',
      lectureUrl: '',
      isPreviewFree: false,
    });
  };

  // ✅ Submit — Frontend only
  const handleSubmit = (e) => {
    e.preventDefault();

    const courseData = {
      courseTitle,
      courseDescription: quillRef.current.root.innerHTML,
      coursePrice: Number(coursePrice),
      discount: Number(discount),
      thumbnail: image ? image.name : 'No File',
      courseContent: chapters,
    };

    console.log("✅ Course Submitted (Frontend Only):", courseData);
    alert("Course created successfully ✅ (Frontend Only)");

    // Reset
    setCourseTitle('');
    setCoursePrice(0);
    setDiscount(0);
    setImage(null);
    setChapters([]);
    quillRef.current.root.innerHTML = '';
  };

  // ✅ Initialize Quill
  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
      });
    }
  }, []);

  return (
    <div className="flex-1 flex items-center justify-center overflow-auto md:p-8 p-2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md w-full text-gray-500">
        
        {/* Title */}
        <div className="flex flex-col gap-1">
          <p>Course Title</p>
          <input
            onChange={(e) => setCourseTitle(e.target.value)}
            value={courseTitle}
            type="text"
            className="border px-3 py-2 rounded"
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <p>Course Description</p>
          <div ref={editorRef} className="border p-2"></div>
        </div>

        {/* Price & Thumbnail */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p>Course Price</p>
            <input
              onChange={(e) => setCoursePrice(e.target.value)}
              value={coursePrice}
              type="number"
              className="border w-28 px-3 py-2 rounded"
              required
            />
          </div>

          <div className="flex items-center gap-3">
            <p>Thumbnail</p>
            <label className="flex items-center gap-3 cursor-pointer">
              <img src={assets.file_upload_icon} className="p-2 bg-blue-500 rounded" alt="upload" />
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                accept="image/*"
                hidden
              />
              {image && <img src={URL.createObjectURL(image)} className="h-10" alt="thumb" />}
            </label>
          </div>
        </div>

        {/* Discount */}
        <div className="flex flex-col gap-1">
          <p>Discount %</p>
          <input
            type="number"
            onChange={(e) => setDiscount(e.target.value)}
            value={discount}
            min={0}
            max={100}
            className="border w-28 px-3 py-2 rounded"
          />
        </div>

        {/* Chapters & Lectures */}
        <div>
          {chapters.map((chapter, i) => (
            <div key={i} className="bg-white border rounded mb-3">
              <div className="flex justify-between p-3 border-b">
                <div className="flex items-center">
                  <img
                    src={assets.dropdown_icon}
                    className={`w-4 mr-2 cursor-pointer transition ${chapter.collapsed ? '-rotate-90' : ''}`}
                    onClick={() => handleChapter('toggle', chapter.chapterId)}
                    alt="toggle"
                  />
                  <strong>{i + 1}. {chapter.chapterTitle}</strong>
                </div>
                <img
                  src={assets.cross_icon}
                  className="w-4 cursor-pointer"
                  onClick={() => handleChapter('remove', chapter.chapterId)}
                  alt="remove"
                />
              </div>

              {!chapter.collapsed && (
                <div className="p-3">
                  {chapter.chapterContent.map((lecture, j) => (
                    <div key={j} className="flex justify-between mb-2">
                      <span>
                        {j + 1}. {lecture.lectureTitle} - {lecture.lectureDuration} mins
                      </span>
                      <img
                        src={assets.cross_icon}
                        className="w-4 cursor-pointer"
                        onClick={() => handleLecture('remove', chapter.chapterId, j)}
                        alt="remove"
                      />
                    </div>
                  ))}
                  <div
                    onClick={() => handleLecture('add', chapter.chapterId)}
                    className="bg-gray-100 p-2 rounded cursor-pointer"
                  >
                    + Add Lecture
                  </div>
                </div>
              )}
            </div>
          ))}

          <div
            onClick={() => handleChapter('add')}
            className="bg-blue-100 p-2 text-center rounded cursor-pointer"
          >
            + Add Chapter
          </div>
        </div>

        {/* Submit */}
        <button type="submit" className="bg-black text-white py-2 px-6 rounded mt-4">
          SUBMIT COURSE
        </button>
      </form>

      {/* Lecture Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="bg-white p-5 rounded w-72 relative">
            <h3 className="font-bold mb-3">Add Lecture</h3>

            <input
              type="text"
              placeholder="Lecture Title"
              className="border w-full px-2 py-1 mb-2 rounded"
              value={lectureDetails.lectureTitle}
              onChange={(e) =>
                setLectureDetails({ ...lectureDetails, lectureTitle: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Duration (mins)"
              className="border w-full px-2 py-1 mb-2 rounded"
              value={lectureDetails.lectureDuration}
              onChange={(e) =>
                setLectureDetails({ ...lectureDetails, lectureDuration: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Video URL"
              className="border w-full px-2 py-1 mb-2 rounded"
              value={lectureDetails.lectureUrl}
              onChange={(e) =>
                setLectureDetails({ ...lectureDetails, lectureUrl: e.target.value })
              }
            />

            <label className="flex gap-2 mb-3">
              <input
                type="checkbox"
                checked={lectureDetails.isPreviewFree}
                onChange={(e) =>
                  setLectureDetails({ ...lectureDetails, isPreviewFree: e.target.checked })
                }
              />
              Free Preview?
            </label>

            <button onClick={addLecture} className="w-full bg-blue-500 text-white py-2 rounded">
              ADD
            </button>

            <img
              src={assets.cross_icon}
              onClick={() => setShowPopup(false)}
              className="w-4 absolute top-3 right-3 cursor-pointer"
              alt="close"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCourse;
