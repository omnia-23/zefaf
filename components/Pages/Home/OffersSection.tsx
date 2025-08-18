"use client";
import React from "react";
import OfferCard from "./OfferCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export interface IOffer {
  id: number;
  image: string;
  title: string;
  hotel_name: string;
  description: string;
  options: string[];
  price: string;
  endDate?: string;
}

const OffersSection = () => {
  const offers: IOffer[] = [
    {
      id: 1,
      image: "/images/Frame 18 (1).svg",
      title: "باقة عروض شهر اغسطس",
      hotel_name: "فندق روش ريحان من روتانا",
      description:
        "إنها سلسلة من الكلمات اللاتينية التي ، عند وضعها في موضعها ،لا تشكل جملًا بمعنى كامل ، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات.",
      price: "800 - 600 ر.س",
      options: [
        "500 - 1000 شخص",
        "قاعة الحفل",
        "قاعة عشاء منفصلة",
        " مشرفة خاصة للعروس",
        "قاعة الحفل",
        "خدمات الصبابات و عاملات الضيافة",
        "جناح خاص للعرسان",
      ],
    },
    {
      id: 2,
      image: "/images/Frame 18 (1).svg",
      title: "باقة عروض شهر اغسطس",
      hotel_name: "فندق روش ريحان من روتانا",
      description:
        "إنها سلسلة من الكلمات اللاتينية التي ، عند وضعها في موضعها ،لا تشكل جملًا بمعنى كامل ، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات.",
      price: "800 - 600 ر.س",
      options: [
        "500 - 1000 شخص",
        "قاعة الحفل",
        "قاعة عشاء منفصلة",
        " مشرفة خاصة للعروس",
        "قاعة الحفل",
        "خدمات الصبابات و عاملات الضيافة",
        "جناح خاص للعرسان",
      ],
    },
    {
      id: 3,
      image: "/images/Frame 18 (1).svg",
      title: "باقة عروض شهر اغسطس",
      hotel_name: "فندق روش ريحان من روتانا",
      description:
        "إنها سلسلة من الكلمات اللاتينية التي ، عند وضعها في موضعها ،لا تشكل جملًا بمعنى كامل ، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات.",
      price: "800 - 600 ر.س",
      options: [
        "500 - 1000 شخص",
        "قاعة الحفل",
        "قاعة عشاء منفصلة",
        " مشرفة خاصة للعروس",
        "قاعة الحفل",
        "خدمات الصبابات و عاملات الضيافة",
        "جناح خاص للعرسان",
      ],
    },
  ];

  // const fetcher = (url: string) => fetch(url).then((res) => res.json());
  // const { data } = useSWR(
  //   "https://zafaf.sa/public/api/halls/keywords",
  //   fetcher
  // );

  return (
    <section className="bg-[#FDF3F7] lg:min-h-[650px]">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-10 lg:py-[120px]">
        {/* Section Header */}
        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="w-6 h-[5px] rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
            <h2 className="text-[color:var(--Text-Color,#221F20)] text-2xl font-bold leading-[normal]">
              افضل العروض
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              مع عالم زفاف، استمتع بأفضل العروض والتخفيضات على قاعات الزفاف
              والخدمات المميزة، لضمان إتمام حفل أحلامك بأفضل سعر وجودة!{" "}
            </p>

            <div className="md:self-end">
              <a
                href="/offers"
                className="text-[#AF074E] hover:text-[#8a063d] underline transition-colors text-sm font-medium"
              >
                عرض الكل
              </a>
            </div>
          </div>
        </div>

        <div className="w-full mt-10">
          <Swiper
            spaceBetween={16}
            breakpoints={{
              // Mobile: 1 slide
              0: {
                slidesPerView: 1.05,
              },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
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
            loop
            grabCursor
          >
            {offers?.map((offer: IOffer) => (
              <SwiperSlide key={offer.id} className="pb-10">
                <OfferCard offer={offer} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
