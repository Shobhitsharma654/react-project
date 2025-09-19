

import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets';

const TestimonialsSection = () => {
  return (
    <div className="pb-14 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-gray-800">Testimonials</h1>
      <p className="text-gray-500 mt-3 md:text-base">
        Hear from our learners as they share their journeys of transformation, success, 
        and how our <br className="hidden md:block" /> platform has made a difference in their lives.
      </p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-14">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="text-sm text-left border border-gray-200 pb-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Top Section */}
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-50">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h2 className="text-lg font-medium text-gray-800">{testimonial.name}</h2>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>

            {/* Rating + Feedback */}
            <div className="p-5 pb-7">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    className="h-5 w-5"
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt="star"
                  />
                ))}
              </div>
              <p className="text-gray-600 mt-5 leading-relaxed">{testimonial.feedback}</p>
            </div>

            {/* Read More */}
            <a
              href="#"
              className="text-blue-500 underline px-5 hover:text-blue-700 transition"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
