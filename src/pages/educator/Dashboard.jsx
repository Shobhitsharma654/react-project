import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import Loading from '../../components/student/Loading';

// ✅ Dummy dashboard data (frontend only)
const dummyDashboardData = {
  enrolledStudentsData: [
    {
      student: { name: "Ananya Sharma", imageUrl: "https://i.pravatar.cc/40?img=1" },
      courseTitle: "React Basics",
    },
    {
      student: { name: "Rohit Verma", imageUrl: "https://i.pravatar.cc/40?img=2" },
      courseTitle: "JavaScript Mastery",
    },
    {
      student: { name: "Neha Gupta", imageUrl: "https://i.pravatar.cc/40?img=3" },
      courseTitle: "DSA in C++",
    },
  ],
  totalCourses: 3,
  totalEarnings: "₹12,450",
};

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  // ✅ simulate loading
  useEffect(() => {
    setTimeout(() => {
      setDashboardData(dummyDashboardData);
    }, 800);
  }, []);

  return dashboardData ? (
    <div className="min-h-screen flex flex-col gap-8 md:p-8 p-4">
      <div className="space-y-5">
        <div className="flex flex-wrap gap-5 items-center">

          {/* Total Enrollments */}
          <div className="flex items-center gap-2 shadow-card border border-blue-500 p-4 w-56 rounded-md">
            <img src={assets.patients_icon} alt="students" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {dashboardData.enrolledStudentsData.length}
              </p>
              <p className="text-base text-gray-500">Total Enrollments</p>
            </div>
          </div>

          {/* Total Courses */}
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md">
            <img src={assets.appointments_icon} alt="courses" />
            <div>
              <p className="text-2xl font-medium text-gray-600">{dashboardData.totalCourses}</p>
              <p className="text-base text-gray-500">Total Courses</p>
            </div>
          </div>

          {/* Total Earnings */}
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md">
            <img src={assets.earning_icon} alt="earnings" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {dashboardData.totalEarnings}
              </p>
              <p className="text-base text-gray-500">Total Earnings</p>
            </div>
          </div>

        </div>

        {/* Latest Enrollments */}
        <div>
          <h2 className="pb-4 text-lg font-medium">Latest Enrollments</h2>

          <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
            <table className="text-gray-900 border-b border-gray-500/20 text-sm text-left w-full">
              <thead className="text-gray-900 border-b border-gray-500/20">
                <tr>
                  <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">SL NO.</th>
                  <th className="px-4 py-3 font-semibold">Student Name</th>
                  <th className="px-4 py-3 font-semibold">Course Title</th>
                </tr>
              </thead>

              <tbody className="text-sm text-gray-500">
                {dashboardData.enrolledStudentsData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-4 py-3 text-center hidden sm:table-cell">{index + 1}</td>

                    <td className="px-4 py-3 flex items-center space-x-3">
                      <img src={item.student.imageUrl} className="w-9 h-9 rounded-full" />
                      <span>{item.student.name}</span>
                    </td>

                    <td className="px-4 py-3 truncate">{item.courseTitle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Dashboard;
