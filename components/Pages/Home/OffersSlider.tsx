"use client";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const OffersSlider = () => {
  const slides = [
    {
      title: "انضم الينا",
      description:
        "في كل عام يتواصل أكثر من 300 ألف عريس وعروس مع الشركات المسجلة في زفاف.نت، أنت أيضاً يمكنك إضافة عملك والتواصل مع العرسان بسهولة!",
      buttonText: "اضف شركتك",
      backgroundImage: "/images/joinus/banner.png",
    },
    {
      title: "شركاء النجاح",
      description:
        "انضم إلى شبكة من الشركات الناجحة في قطاع الأفراح. نوفر لك الأدوات والتقنيات لتنمية عملك.",
      buttonText: "تعرف أكثر",
      backgroundImage: "/images/bannerEachPage.png", // Fixed double slash
    },
    {
      title: "عروض خاصة",
      description:
        "احصل على خصومات حصرية عند انضمامك إلى منصتنا هذا الشهر. فرصتك للوصول إلى آلاف العملاء المحتملين!",
      buttonText: "استفد من العروض",
      backgroundImage: "/images/joinus/banner.png",
    },
    {
      title: "شركاء النجاح",
      description:
        "انضم إلى شبكة من الشركات الناجحة في قطاع الأفراح. نوفر لك الأدوات والتقنيات لتنمية عملك.",
      buttonText: "تعرف أكثر",
      backgroundImage: "/images/bannerEachPage.png", // Fixed double slash
    },
  ];

  return (
    <section className="h-[340px] w-full overflow-hidden relative">
      <Swiper
        spaceBetween={0} // Removed space between slides
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // Changed to false for better UX
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="h-full w-full"
        loop
        grabCursor
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <div
              className="w-full h-full relative bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${slide.backgroundImage}')`,
              }}
            >
              <Link href={"/offers"} className="block h-full w-full">
                <div className="container mx-auto h-full flex items-center">
                  <div className="relative flex flex-col gap-4 sm:gap-6 px-4 sm:px-10 lg:px-20 max-w-full sm:max-w-3xl lg:max-w-[845px]">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="w-6 h-[5px] rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
                      <p className="text-xl sm:text-2xl font-bold text-white leading-normal">
                        {slide.title}
                      </p>
                    </div>
                    <p className="text-white text-sm sm:text-base leading-relaxed">
                      {slide.description}
                    </p>
                    <div>
                      <button className="h-12 px-5 sm:px-6 py-3 rounded-lg text-white bg-[color:var(--Primary,#DB0962)] hover:bg-[color:var(--Primary-dark,#B80852)] transition-colors duration-300 text-sm sm:text-base">
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OffersSlider;
