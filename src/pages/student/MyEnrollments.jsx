import React, { useContext, useMemo, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { Line } from 'rc-progress'
import Footer from '../../components/student/Footer'

const MyEnrollments = () => {
  const { enrolledCourses = [], calculateCourseDuration, navigate } = useContext(AppContext)

  // Helper: compute total lectures from course content safely
  const getTotalLectures = (course) =>
    course?.courseContent?.reduce(
      (sum, ch) => sum + (ch?.chapterContent?.length || 0),
      0
    ) || 0

  // Your hardcoded progress list (can be shorter/longer than enrolledCourses)
  const [progressArray] = useState([
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 2, totalLectures: 5 },
    { lectureCompleted: 3, totalLectures: 6 },
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 3, totalLectures: 3 },
    { lectureCompleted: 2, totalLectures: 7 },
    { lectureCompleted: 6, totalLectures: 8 },
    { lectureCompleted: 2, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 10 },
    { lectureCompleted: 2, totalLectures: 8 },
    { lectureCompleted: 2, totalLectures: 4 },
  ])

  // Build a safe, aligned progress list keyed by index
  const alignedProgress = useMemo(() => {
    return enrolledCourses.map((course, index) => {
      const fallbackTotal = getTotalLectures(course)
      const p = progressArray[index]
      // Prefer provided progress; else default to 0 out of the real total
      const total = Math.max(0, Number(p?.totalLectures ?? fallbackTotal))
      const completed = Math.max(0, Math.min(total || 0, Number(p?.lectureCompleted ?? 0)))
      const percent = total > 0 ? Math.round((completed / total) * 100) : 0
      return { completed, total, percent }
    })
  }, [enrolledCourses, progressArray])

  return (
    <>
      <div className='md:px-36 px-8 pt-10 min-h-[calc(100vh-120px)]'>
        <h1 className='text-2xl font-semibold'>My Enrollments</h1>

        <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
          <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden'>
            <tr>
              <th className='px-4 py-3 font-semibold truncate'>Courses</th>
              <th className='px-4 py-3 font-semibold truncate'>Duration</th>
              <th className='px-4 py-3 font-semibold truncate'>Completed</th>
              <th className='px-4 py-3 font-semibold truncate'>Status</th>
            </tr>
          </thead>

          <tbody className='text-gray-700'>
            {enrolledCourses.map((course, index) => {
              const prog = alignedProgress[index] ?? { completed: 0, total: 0, percent: 0 }
              const durationText =
                typeof calculateCourseDuration === 'function'
                  ? calculateCourseDuration(course)
                  : '--:--'

              const status =
                prog.total > 0 && prog.completed >= prog.total ? 'Completed' : 'On Going'

              return (
                <tr key={course?._id ?? index} className='border-b border-gray-500/20'>
                  <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3'>
                    <img
                      src={course?.courseThumbnail}
                      alt={course?.courseTitle || 'thumbnail'}
                      className='w-14 sm:w-24 md:w-28 object-cover rounded'
                    />
                    <div className='flex-1 min-w-0'>
                      <p className='mb-1 max-sm:text-sm truncate'>{course?.courseTitle}</p>
                      <Line
                        strokeWidth={2}
                        percent={Math.max(0, Math.min(100, prog.percent))}
                        className='bg-gray-300 rounded-full'
                      />
                    </div>
                  </td>

                  <td className='px-4 py-3 max-sm:hidden'>{durationText}</td>

                  <td className='px-4 py-3 max-sm:hidden whitespace-nowrap'>
                    {prog.completed}/{prog.total} <span>Lectures</span>
                  </td>

                  <td className='px-4 py-3 max-sm:text-right'>
                    <button
                      onClick={() => navigate?.('/player/' + (course?._id ?? ''))}
                      className='px-3 bg-blue-500 text-white rounded sm:px-5 py-1 sm:py-2 max-sm:text-xs font-semibold'
                    >
                      {status}
                    </button>
                  </td>
                </tr>
              )
            })}

            {!enrolledCourses?.length && (
              <tr>
                <td colSpan={4} className='px-4 py-8 text-center text-gray-500'>
                  You haven’t enrolled in any course yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  )
}

export default MyEnrollments
