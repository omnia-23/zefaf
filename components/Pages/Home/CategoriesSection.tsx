"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useCategories } from "@/hooks/useCategories";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CategoryCard } from "./CategoryCard";

const categories = [
  {
    title: "قصور الأفراح",
    count: 10,
    // count: data?.halls?.length || 10,
    image: "/images/hotels.png",
    alt: "Wedding Halls",
  },
  {
    title: "الفنادق",
    count: 10,
    image: "/images/halls.png",
    alt: "Hotels",
  },
  {
    title: "الاستراحات",
    count: 10,
    image: "/images/resorts.png",
    alt: "Resorts",
  },
  {
    title: "قصور الأفراح",
    count: 10,
    image: "/images/hotels.png",
    alt: "Wedding Halls",
  },
  {
    title: "الاستراحات",
    count: 10,
    image: "/images/resorts.png",
    alt: "Resorts",
  },
];

const CategoriesSection = () => {
  // const { categories, error, isLoading } = useCategories();
  const [showAll, setShowAll] = useState(false);

  // Loading state
  // if (isLoading) {
  //   return (
  //     <section className="container mx-auto py-12 px-4 lg:px-8">
  //       <div className="flex flex-col gap-6 mb-12">
  //         <Skeleton width={200} height={30} />
  //         <Skeleton width={500} height={20} />
  //       </div>
  //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  //         {[...Array(3)].map((_, i) => (
  //           <Skeleton key={i} height={400} className="rounded-lg" />
  //         ))}
  //       </div>
  //     </section>
  //   );
  // }

  // // Error state
  // if (error) {
  //   return (
  //     <section className="container mx-auto py-12 px-4 lg:px-8 text-center">
  //       <div className="bg-red-50 text-red-600 p-4 rounded-lg inline-block">
  //         <p>حدث خطأ أثناء تحميل الفئات</p>
  //       </div>
  //     </section>
  //   );
  // }

  // // Empty state
  // if (!categories || categories.length === 0) {
  //   return (
  //     <section className="container mx-auto py-12 px-4 lg:px-8 text-center">
  //       <p className="text-gray-500">لا توجد فئات متاحة حالياً</p>
  //     </section>
  //   );
  // }

  // Determine which categories to show
  const displayedCategories = showAll ? categories : categories.slice(0, 3);

  return (
    <section className="container mx-auto py-12 px-4 lg:px-8">
      <div className="flex flex-col gap-6 mb-12">
        <div className="flex items-center gap-4">
          <span className="w-6 h-[5px] rounded-lg bg-[#DB0962]"></span>
          <h2 className="text-2xl font-bold text-[#221F20]">
            جميع مزودى الخدمات
          </h2>
        </div>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
          عالم زفاف يوفر لك افضل مزودى الخدمات التي تناسب كل الأذواق، مع خيارات
          متنوعة تضمن حصولك على الفئة مثالية ليومك المميز.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {displayedCategories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>

      {/* Show More/Less Button */}
      {categories.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#DB0962] text-white px-6 py-2 rounded-full hover:bg-[#C40856] transition-colors"
          >
            {showAll ? "عرض أقل" : "عرض المزيد"}
          </button>
        </div>
      )}
    </section>
  );
};

export default CategoriesSection;
