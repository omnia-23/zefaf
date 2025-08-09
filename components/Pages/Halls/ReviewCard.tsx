import React from "react";

export default function ReviewCard({
  review,
}: {
  review: {
    id: number;
    name: string;
    date: string;
    rating: number;
    text: string;
    avatar: string;
  };
}) {
  const renderStars = (rating: any) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-3 h-3 sm:w-4 sm:h-4 ${
          index < rating ? "text-[#098483]" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div
      key={review.id}
      className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100"
    >
      {/* Review Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-3 sm:mb-4">
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center text-lg sm:text-xl">
            {review.avatar}
          </div>
          <div className="flex-1 sm:flex-none">
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
              {review.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">{review.date}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 w-full sm:w-auto justify-between sm:justify-normal">
          <div className="flex items-center gap-0.5 sm:gap-1">
            {renderStars(review.rating)}
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-600">
            {review.rating}.0 تقييم
          </span>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-[#707070] leading-relaxed font-normal text-xs sm:text-sm">
        {review.text}
      </p>
    </div>
  );
}
