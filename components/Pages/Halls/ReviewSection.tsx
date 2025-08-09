"use client";
import React, { useState } from "react";
import ReviewCard from "./ReviewCard";

const ReviewsSection = () => {
  const [reviews] = useState([
    {
      id: 1,
      name: "محمد زيدان",
      date: "25 نوفمبر 2025",
      rating: 3,
      text: "لوريم إيبسوم دولار سيت آميت، كونسيكتيتور آديبيسسيتنغ إيليت، سيد دو إيوسمود تيمبور إنكيديدونت يوت لابوري إت دولوري ماجنا أليكوا. يوت إنيم آد مينيم فنيام كواس",
      avatar: "👤",
    },
    {
      id: 2,
      name: "محمد زيدان",
      date: "25 نوفمبر 2025",
      rating: 3,
      text: "لوريم إيبسوم دولار سيت آميت، كونسيكتيتور آديبيسسيتنغ إيليت، سيد دو إيوسمود تيمبور إنكيديدونت يوت لابوري إت دولوري ماجنا أليكوا. يوت إنيم آد مينيم فنيام كواس",
      avatar: "👤",
    },
    {
      id: 3,
      name: "محمد زيدان",
      date: "25 نوفمبر 2025",
      rating: 3,
      text: "لوريم إيبسوم دولار سيت آميت، كونسيكتيتور آديبيسسيتنغ إيليت، سيد دو إيوسمود تيمبور إنكيديدونت يوت لابوري إت دولوري ماجنا أليكوا. يوت إنيم آد مينيم فنيام كواس",
      avatar: "👤",
    },
  ]);

  return (
    <div className="w-full px-4 md:max-w-4xl md:mx-auto md:p-6" dir="rtl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8">
        <h2 className="text-lg font-bold text-[#221F20]">التقييمات</h2>
        <button className="flex items-center justify-center gap-1 md:gap-2 font-medium px-3 py-1.5 md:px-4 md:py-2 border-2 border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50 transition-colors w-full sm:w-auto">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="text-sm md:text-base">أضف تقييمك</span>
        </button>
      </div>

      {/* Reviews Container */}
      <div className="space-y-4 md:space-y-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Load More Button (optional) */}
      {/* <div className="mt-6 md:mt-8 text-center">
        <button className="text-pink-500 font-medium text-sm md:text-base hover:text-pink-600 transition-colors">
          عرض المزيد من التقييمات
        </button>
      </div> */}
    </div>
  );
};

export default ReviewsSection;
