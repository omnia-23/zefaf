"use client";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import { useOffers } from "@/hooks/useOffers";

const OffersSlider = () => {
  const { offers, isLoading, error } = useOffers();

  const slides = [
    {
      title: "انضم الينا",
      description:
        "في كل عام يتواصل أكثر من 300 ألف عريس وعروس مع الشركات المسجلة في زفاف.نت، أنت أيضاً يمكنك إضافة عملك والتواصل مع العرسان بسهولة!",
      buttonText: "اضف شركتك",
      image:
        "https://zafaf.sa/wp-content/uploads/2025/08/Zafaf-%D8%A7%D9%84%D9%8A%D9%88%D9%85-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-%D9%A9%D9%A5.webp",
    },
    // {
    //   title: "شركاء النجاح",
    //   description:
    //     "انضم إلى شبكة من الشركات الناجحة في قطاع الأفراح. نوفر لك الأدوات والتقنيات لتنمية عملك.",
    //   buttonText: "تعرف أكثر",
    //   image: "/images/bannerEachPage.png", // Fixed double slash
    // },
    // {
    //   title: "عروض خاصة",
    //   description:
    //     "احصل على خصومات حصرية عند انضمامك إلى منصتنا هذا الشهر. فرصتك للوصول إلى آلاف العملاء المحتملين!",
    //   buttonText: "استفد من العروض",
    //   image: "/images/joinus/banner.png",
    // },
    // {
    //   title: "شركاء النجاح",
    //   description:
    //     "انضم إلى شبكة من الشركات الناجحة في قطاع الأفراح. نوفر لك الأدوات والتقنيات لتنمية عملك.",
    //   buttonText: "تعرف أكثر",
    //   image: "/images/bannerEachPage.png", // Fixed double slash
    // },
  ];

  // ✅ Handle loading
  if (isLoading) {
    return (
      <section className="w-full h-[340px] flex items-center justify-center bg-gray-900 text-white my-16">
        <p className="animate-pulse">جاري التحميل...</p>
      </section>
    );
  }

  // ✅ Handle error
  if (error) {
    return (
      <section className="w-full h-[340px] flex items-center justify-center bg-red-900 text-white my-16">
        <p>حدث خطأ أثناء تحميل العروض</p>
      </section>
    );
  }

  // ✅ Filter active offers
  const filteredOffers =
    offers?.filter((offer) => offer.status === "Active") || [];

  // ✅ Handle no offers case
  if (filteredOffers.length === 0) {
    return (
      <section className="w-full h-[340px] flex items-center justify-center bg-gray-800 text-white my-16">
        <p>لا توجد عروض متاحة حالياً</p>
      </section>
    );
  }

  return (
    <section className="w-full h-[340px] overflow-hidden relative my-20">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="h-full w-full"
        loop
        grabCursor
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index} className="h-full w-full !px-0">
            <div
              className="w-full h-full relative bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('${slide.image}')`,
              }}
            >
              <Link
                href={"listing/فندق-بوتيك-المشرق"}
                className="block h-full w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OffersSlider;
