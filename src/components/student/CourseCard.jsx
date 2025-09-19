

import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);

  return (
    <Link
      to={`/course/${course._id}`}
      onClick={() => scrollTo(0, 0)}
      className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
    >
      {/* Thumbnail */}
      <img
        className="w-full h-40 md:h-48 object-cover"
        src={course.courseThumbnail}
        alt={course.courseTitle}
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow text-left">
        <h3 className="text-base md:text-lg font-semibold text-gray-800 line-clamp-2">
          {course.courseTitle}
        </h3>
        <p className="text-gray-500 text-sm mt-1">{course.educator.name}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <p className="text-sm font-medium text-gray-700">
            {calculateRating(course).toFixed(1)}
          </p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                className="w-4 h-4 md:w-5 md:h-5"
                src={
                  i < Math.floor(calculateRating(course))
                    ? assets.star
                    : assets.star_blank
                }
                alt="star"
              />
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            ({course.courseRatings.length})
          </p>
        </div>

        {/* Price */}
        <p className="text-base md:text-lg font-semibold text-gray-800 mt-3">
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;

