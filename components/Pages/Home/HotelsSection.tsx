"use client";
import React from "react";
import useSWR from "swr";
import HotelCard from "./HotelCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: string;
  priceRange: string;
  capacity: string;
  description: string;
  image: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const HotelsSection = () => {
  const { data, isLoading } = useSWR(
    "https://zafaf.sa/public/api/getRondomHotels",
    fetcher
  );

  const hotels = data ?? [
    {
      id: 1,
      name: "فندق ذهب المركز المالي",
      location: "بلدية العليا",
      rating: "4.9",
      priceRange: "800 - 600 ر.س",
      capacity: "150 - 800 شخص",
      description:
        "إنها سلسلة من الكلمات اللاتينية التي، عند وضعها في موضعها، لا تشكل جملةً بمعنى كامل، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات.",
      image: "/images/hotel.svg",
    },
    {
      id: 2,
      name: "فندق روش ريحان من روتانا",
      location: "بلدية العليا",
      rating: "4.8",
      priceRange: "1000 - 700 ر.س",
      capacity: "200 - 1000 شخص",
      description:
        "إنها سلسلة من الكلمات اللاتينية التي، عند وضعها في موضعها، لا تشكل جملةً بمعنى كامل، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات.",
      image: "/images/hotel.svg",
    },
    {
      id: 3,
      name: "فندق روش ريحان من روتانا",
      location: "بلدية العليا",
      rating: "4.8",
      priceRange: "1000 - 700 ر.س",
      capacity: "200 - 1000 شخص",
      description:
        "إنها سلسلة من الكلمات اللاتينية التي، عند وضعها في موضعها، لا تشكل جملةً بمعنى كامل، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات.",
      image: "/images/hotel.svg",
    },
    {
      id: 4,
      name: "فندق روش ريحان من روتانا",
      location: "بلدية العليا",
      rating: "4.8",
      priceRange: "1000 - 700 ر.س",
      capacity: "200 - 1000 شخص",
      description:
        "إنها سلسلة من الكلمات اللاتينية التي، عند وضعها في موضعها، لا تشكل جملةً بمعنى كامل، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات.",
      image: "/images/hotel.svg",
    },
  ];

  return (
    <section className="lg:min-h-[650px]">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-10 lg:py-[120px]">
        {/* Section Header */}
        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="w-6 h-[5px] rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
            <h2 className="text-[color:var(--Text-Color,#221F20)] text-2xl sm:text-3xl font-bold">
              الفنادق
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              قاعات الفنادق هي الخيار المثالي لزفاف فاخر وأنيق يليق بك، مع توفير
              خدمات متكاملة، وضيافة مميزة تضمن لك ولضيوفك تجربة لا تُنسى.
            </p>
            <a
              href="/hotels"
              className="text-[#AF074E] hover:text-[#8a063d] underline transition-colors text-sm font-medium"
            >
              عرض الكل
            </a>
          </div>
        </div>

        {/* Section Body */}
        <div className="mt-10 w-full">
          <Swiper
            spaceBetween={16}
            breakpoints={{
              0: {
                slidesPerView: 1.05,
              },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1.9,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            loop
            grabCursor
            modules={[Autoplay]}
          >
            {hotels.map((hotel: Hotel) => (
              <SwiperSlide key={hotel.id} className="pb-10">
                <HotelCard hotel={hotel} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;
