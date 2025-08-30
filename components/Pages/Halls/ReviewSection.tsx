"use client";
import React from "react";

type RatingProps = {
  ratings: {
    average: number;
    count: number;
    breakdown?: {
      [stars: number]: number; // e.g. { 5: 10, 4: 4, 3: 2, 2: 1, 1: 3 }
    };
  } | null;
};

const ReviewsSection = ({ reviews }: { reviews: RatingProps }) => {
  const average = reviews.ratings?.average ?? 0;
  const count = reviews.ratings?.count ?? 0;

  return (
    <section
      className="w-full px-4 md:max-w-4xl md:mx-auto md:p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
      dir="rtl"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="text-xl font-bold text-[#221F20]">التقييمات</h2>
        <button className="flex items-center gap-2 font-medium px-4 py-2 border-2 border-pink-500 text-pink-500 rounded-xl hover:bg-pink-50 transition-colors w-full sm:w-auto">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="text-base">أضف تقييمك</span>
        </button>
      </div>

      {/* Ratings Overview */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gray-50 rounded-xl p-4">
        {/* Stars & average */}
        <div className="flex items-center gap-3">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-6 h-6 ${
                  i < average ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.538 1.118l-3.382-2.455a1 1 0 00-1.176 0l-3.382 2.455c-.783.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-700 text-sm sm:text-base">
            {average} / 5 ({count} تقييم{count > 1 ? "ات" : ""})
          </span>
        </div>

        {/* Progress bars */}
        <div className="w-full sm:w-1/2 space-y-1">
          {[5, 4, 3, 2, 1].map((stars) => {
            const starCount = reviews.ratings?.breakdown?.[stars] ?? 0;
            const percentage = count > 0 ? (starCount / count) * 100 : 0;

            return (
              <div key={stars} className="flex items-center gap-2">
                <span className="text-xs w-6">{stars}⭐</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-yellow-400 h-2 transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-xs text-gray-600 w-6">{starCount}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
