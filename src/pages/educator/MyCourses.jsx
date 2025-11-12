import React, { useEffect, useState } from "react";
import Loading from "../../components/student/Loading";
import { dummyCourses } from "../../assets/assets"; // ✅ using your dummy courses

const MyCourses = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    // simulate loading delay
    setTimeout(() => {
      setCourses(dummyCourses);
    }, 600);
  }, []);

    const deleteCourse = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this course?");
    if (confirmed) {
      setCourses(prev => prev.filter(course => course._id !== id));
    }
  };

  return courses ? (
    <div className="min-h-screen flex flex-col items-center md:p-8 p-4 space-y-6">
      <div className="w-full min-w-[1000px] ">
        <h2 className="pb-4 text-lg font-medium">My Courses</h2>

        <div className="flex flex-col items-center w-full overflow-hidden rounded-md bg-white border border-gray-300 shadow-sm">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-50 border-b text-gray-900">
              <tr>
                <th className="px-4 py-3 font-semibold">All Courses</th>
                <th className="px-4 py-3 font-semibold">Earnings</th>
                <th className="px-4 py-3 font-semibold">Students</th>
                <th className="px-4 py-3 font-semibold">Published On</th>
                <th className="px-4 py-3 font-semibold text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course) => {
                const afterDiscount =
                  course.coursePrice -
                  (course.discount * course.coursePrice) / 100;

                const earnings = Math.floor(
                  (course.enrolledStudents?.length || 0) * afterDiscount
                );

                return (
                  <tr
                    key={course._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    {/* Course Thumbnail + Title */}
                    <td className="px-4 py-3 flex items-center space-x-3">
                      <img
                        src={course.courseThumbnail}
                        alt={course.courseTitle}
                        className="w-14 h-14 object-cover rounded"
                      />
                      <span className="truncate font-medium">
                        {course.courseTitle}
                      </span>
                    </td>

                    {/* Earnings */}
                    <td className="px-4 py-3 font-semibold text-gray-800">
                      $ {earnings.toLocaleString()}
                    </td>

                    {/* Students Count */}
                    <td className="px-4 py-3">
                      {course.enrolledStudents?.length || 0}
                    </td>

                    {/* Publish Date */}
                    <td className="px-4 py-3">
                      {new Date(course.createdAt).toLocaleDateString()}
                    </td>
                     <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => deleteCourse(course._id)}
                      className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MyCourses;
