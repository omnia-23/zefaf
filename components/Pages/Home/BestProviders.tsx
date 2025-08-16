"use client";
import React from "react";
import ProviderCard from "./ProviderCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export interface IProvider {
  id: string;
  title: string;
  image: string;
  address: string;
  category: string;
  location: string;
}

const BestProviders = () => {
  const listings: IProvider[] = [
    {
      id: "1",
      title: "فندق روش ريحان من روتانا",
      image: "/images/hotels.png",
      address: "الرياض, شارع العليا العام، حي العليا",
      category: "الفنادق",
      location: "الرياض",
    },
    {
      id: "2",
      title: "فندق روش ريحان من روتانا",
      image: "/images/hotels.png",
      address: "الرياض, شارع العليا العام، حي العليا",
      category: "الفنادق",
      location: "الرياض",
    },
    {
      id: "3",
      title: "فندق روش ريحان من روتانا",
      image: "/images/hotels.png",
      address: "الرياض, شارع العليا العام، حي العليا",
      category: "الفنادق",
      location: "الرياض",
    },
    {
      id: "4",
      title: "فندق روش ريحان من روتانا",
      image: "/images/hotels.png",
      address: "الرياض, شارع العليا العام، حي العليا",
      category: "الفنادق",
      location: "الرياض",
    },
    {
      id: "5",
      title: "فندق روش ريحان من روتانا",
      image: "/images/hotels.png",
      address: "الرياض, شارع العليا العام، حي العليا",
      category: "الفنادق",
      location: "الرياض",
    },
    {
      id: "6",
      title: "فندق روش ريحان من روتانا",
      image: "/images/hotels.png",
      address: "الرياض, شارع العليا العام، حي العليا",
      category: "الفنادق",
      location: "الرياض",
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
              أفضل مزودي خدمات
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
            استعرض خيارات عالم زفاف المميزة من قائمة مزودي خدمات الزفاف
          </p>
        </div>

        <div className="mt-10 w-[90%] mx-auto">
          <Swiper
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="providers-swiper"
            loop={true}
          >
            {listings.map((provider) => (
              <SwiperSlide key={provider.id} className="my-3">
                <ProviderCard provider={provider} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BestProviders;
