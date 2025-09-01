"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useCities } from "@/hooks/useCities";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CityCard } from "./CityCard";
import { ICity } from "@/types/city";

const FamousCities = () => {
  const { cities, isLoading, error, mutate } = useCities(1);

  // Loading skeleton
  if (isLoading) {
    return (
      <section className="lg:min-h-[650px]">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-10 lg:py-[120px]">
          <div className="w-full flex flex-col gap-6 mb-10">
            <Skeleton width={200} height={30} />
            <Skeleton width={500} height={20} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} height={300} className="rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <></>
      // <section className="lg:min-h-[650px]">
      //   <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-10 lg:py-[120px] text-center">
      //     <div className="bg-red-50 text-red-600 p-4 rounded-lg inline-block">
      //       <p>حدث خطأ أثناء تحميل بيانات المدن</p>
      //       <button
      //         onClick={() => mutate()}
      //         className="mt-2 text-sm bg-white px-3 py-1 rounded hover:bg-gray-100"
      //       >
      //         إعادة المحاولة
      //       </button>
      //     </div>
      //   </div>
      // </section>
    );
  }

  // Empty state
  if (!cities || cities.length === 0) {
    return (
      <section className="lg:min-h-[650px]">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-10 lg:py-[120px] text-center">
          <p className="text-gray-500">لا توجد مدن متاحة حالياً</p>
        </div>
      </section>
    );
  }

  return (
    <section className="lg:min-h-[650px]">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-10 lg:py-[120px]">
        {/* Section Header */}
        <div className="w-full flex flex-col gap-6">
          <div className="w-full flex items-center gap-4">
            <span className="w-6 h-[5px] rounded-lg bg-[#DB0962]"></span>
            <h2 className="text-[#221F20] text-2xl font-bold">أشهر المدن</h2>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              نقدم لك أفضل خدمات الزفاف في مختلف المدن الكبرى في المملكة العربية
              السعودية.
            </p>
          </div>
        </div>

        {/* Cities Slider */}
        <div className="mt-10">
          <Swiper
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="cities-swiper"
            loop={true}
          >
            {cities.map((city: ICity) => (
              <SwiperSlide key={city.id}>
                <CityCard city={city} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FamousCities;
