"use client";
import React from "react";
import useSWR from "swr";
import HotelCard from "./HotelCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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

const fetcher = (url: any) => fetch(url).then((res) => res.json());
const Hotels = () => {
  const { data, isLoading } = useSWR(
    "https://zafaf.sa/public/api/getRondomHotels",
    fetcher
  );

  const hotels = [
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
    <section className="container px-4 lg:px-8 mx-auto flex flex-col items-start gap-20 self-stretch py-10 lg:py-[120px] text-black">
      {/* Section Header */}
      <div className="w-full flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <span className="w-6 h-[5px] rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
          <p className="text-[color:var(--Text-Color,#221F20)] [leading-trim:both] [text-edge:cap] text-2xl font-bold leading-[normal]">
            الفنادق
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
          <div className="flex-1">
            <p className="text-right text-gray-600 text-base font-normal leading-relaxed max-w-[569px]">
              قاعات الفنادق هي الخيار المثالي لزفاف فاخر وأنيق يليق بك، مع توفير
              خدمات متكاملة، وضيافة مميزة تضمن لك ولضيوفك تجربة لا تُنسى.
            </p>
          </div>
          <div className="md:self-end">
            <a
              href="/hotels"
              className="text-[#AF074E] hover:text-[#8a063d] underline transition-colors duration-200 text-sm font-medium"
            >
              عرض الكل
            </a>
          </div>
        </div>
      </div>

      {/* Section Body */}
      <div className="w-full px-4 lg:px-0">
        <Swiper
          spaceBetween={24}
          slidesPerView={"auto"}
          breakpoints={{
            // Mobile: 1 slide
            640: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            // Tablet: 2 slides
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // Desktop: 3 slides with centered layout
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
          modules={[Autoplay]}
          className="hotels-swiper"
          grabCursor={true}
          loop={true}
        >
          {hotels?.map((hotel: Hotel) => (
            <SwiperSlide key={hotel.id} className="pb-10">
              <HotelCard hotel={hotel} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hotels;
