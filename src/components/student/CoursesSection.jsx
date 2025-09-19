

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-16 px-6 md:px-20 lg:px-40 text-center md:text-left">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
        Learn from the best
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3 max-w-2xl mx-auto md:mx-0">
        Discover our top-rated courses across various categories. From coding
        and design to business and wellness, our courses are crafted to deliver
        results.
      </p>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 md:mt-16">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      {/* Show All Button */}
      <div className="mt-10">
        <Link
          to="/course-list"
          onClick={() => scrollTo(0, 0)}
          className="text-gray-600 border border-gray-400 px-8 py-3 rounded-lg hover:bg-gray-50 transition"
        >
          Show all courses
        </Link>
      </div>
    </div>
  );
};

export default CoursesSection;
