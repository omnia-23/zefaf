"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import TeamCard from "./TeamCard";
import "swiper/css";

export interface Member {
  name: string;
  position: string;
  image: string;
}

const OurTeam = () => {
  const teamMembers = [
    {
      name: "صالح الحريرى",
      position: "المؤسس والرئيس التنفيذي",
      image:
        "https://zafaf.sa/wp-content/uploads/2025/08/Mr.Saleh-Elharery.webp",
    },
    {
      name: "على مجدى",
      position: "المدير العام",
      image: "https://zafaf.sa/wp-content/uploads/2025/08/علي-مجدي.webp",
    },
    {
      name: "عبدالله الهسي",
      position: "مصمم الجرافيك",
      image: "https://zafaf.sa/wp-content/uploads/2025/08/عبدالله-الهسي.webp",
    },
    {
      name: "محمود الكيلاني",
      position: "خبير السيو",
      image: "https://zafaf.sa/wp-content/uploads/2025/08/محمود-الكيلاني.webp",
    },
    {
      name: "ايمان عامر",
      position: "مديرة المحتوى",
      image: "https://zafaf.sa/wp-content/uploads/2025/08/ايمان-عامر.webp",
    },
    {
      name: "مؤمن مصطفى",
      position: "مطور الموقع",
      image: "https://zafaf.sa/wp-content/uploads/2025/08/مؤمن-مصطفى.webp",
    },
  ];

  // const fetcher = (url: any) => fetch(url).then((res) => res.json());
  // const { data, isLoading } = useSWR(
  //   "https://zafaf.sa/public/api/getRondomHalls",
  //   fetcher
  // );

  return (
    <section>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-10 lg:py-[120px]">
        {/* Section Header */}
        <div className="w-full flex flex-col gap-6">
          <div className="w-full flex items-center gap-4">
            <span className="w-6 h-[5px] rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
            <h2 className="text-[color:var(--Text-Color,#221F20)] [leading-trim:both] [text-edge:cap] text-2xl font-bold leading-[normal]">
              فريق العمل
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              تعرف على أعضاء فريقنا الذين يعملون وراء الكواليس لتوفير أفضل خدمات
              الزفاف وأكثرها احترافية.
            </p>
          </div>
        </div>

        <div className="mt-10 w-full mx-auto">
          <Swiper
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay]}
            className="members-swiper"
            loop={true}
          >
            {teamMembers?.map((mem: Member, ind: number) => (
              <SwiperSlide key={ind} className="pb-10">
                <TeamCard member={mem} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
