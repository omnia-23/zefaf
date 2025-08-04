"use client";
import React from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const MainSection = () => {
  // const { data, isLoading } = useSWR(
  //   "https://zafaf.sa/public/api/WeddingVenues",
  //   fetcher
  // );
  // console.log({ data });

  const slides = [
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

  return (
    <section className="container lg:px-8 mx-auto flex flex-col items-start gap-20 self-stretch py-12 text-black">
      <div className="flex flex-col gap-6 px-4 lg:px-0">
        <div className="flex items-center gap-4">
          <span className="w-6 h-[5px] rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
          <p className="text-[color:var(--Text-Color,#221F20)] text-2xl font-bold leading-[normal]">
            قاعات الزفاف
          </p>
        </div>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
          عالم زفاف يوفر لك اجمل قاعات الزفاف التي تناسب كل الأذواق، مع خيارات
          متنوعة تضمن حصولك على قاعة مثالية ليومك المميز.
        </p>
      </div>

      {/* Slider Section */}
      <div className="w-full px-4 lg:px-0">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[468px]">
                <div
                  className="absolute top-0 rounded-lg right-0 w-full h-full"
                  style={{
                    backgroundColor: "rgba(33, 33, 33, 0.54)",
                  }}
                ></div>
                <div className="absolute bottom-8 right-10 flex flex-col gap-2 text-white text-right">
                  <p className="text-[color:var(--Neutral-White,#FFF)] text-2xl font-bold leading-[normal]">
                    {slide.title}
                  </p>
                  <p className="text-sm md:text-base">
                    {slide.count} مزود خدمة
                  </p>
                </div>
                <Image
                  className="w-full h-full rounded-lg object-cover"
                  loading="lazy"
                  width={628}
                  height={468}
                  src={slide.image}
                  alt={slide.alt}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MainSection;
