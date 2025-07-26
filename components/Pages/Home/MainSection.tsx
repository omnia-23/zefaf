"use client";
import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const MainSection = () => {
  const { data, isLoading } = useSWR(
    "https://zafaf.sa/public/api/WeddingVenues",
    fetcher
  );

  console.log(data, "ALL");
  return (
    <section className="container lg:px-8 mx-auto flex flex-col items-start gap-20 self-stretch py-12 text-black">
      <div className="flex flex-col gap-6 px-4 lg:px-0">
        <div className="flex items-center gap-4">
          <span className="w-6 h-[5px] rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
          <p className="text-[color:var(--Text-Color,#221F20)] text-2xl font-bold leading-[normal]">
            قاعات الزفاف
          </p>
        </div>
        <p className="text-sm md:text-base lg:text-lg">
          عالم زفاف يوفر لك اجمل قاعات الزفاف التي تناسب كل الأذواق، مع خيارات
          متنوعة تضمن حصولك على قاعة مثالية ليومك المميز.
        </p>
      </div>
      {/* Content section */}
      <div className="grid grid-cols-1 md:grid-cols-3  gap-6 w-full px-4 lg:px-0">
        <div className="relative">
          <div
            id="overlay"
            className="absolute top-0 rounded-lg right-0 w-full h-full"
            style={{
              backgroundColor: "rgba(33, 33, 33, 0.54)",
            }}
          ></div>
          <div className="absolute bottom-8 right-10 flex flex-col gap-2 text-white text-right">
            <p className="text-[color:var(--Neutral-White,#FFF)] text-2xl font-bold leading-[normal]">
              قصور الأفراح
            </p>
            <p className="text-sm md:text-base">
              {data?.halls?.length} مزود خدمة
            </p>
          </div>
          <img
            className="w-full rounded-lg"
            loading="lazy"
            src="/frontend/images/hotels.png"
            alt="Wedding Halls"
          />
        </div>
        {/* Second column */}
        <div className="relative">
          <div
            id="overlay"
            className="absolute top-0 rounded-lg right-0 w-full h-full"
            style={{
              backgroundColor: "rgba(33, 33, 33, 0.54)",
            }}
          ></div>
          <div className="absolute bottom-8 right-10 flex flex-col gap-2 text-white text-right">
            <p className="text-[color:var(--Neutral-White,#FFF)] text-2xl font-bold leading-[normal]">
              الفنادق
            </p>
            <p className="text-sm md:text-base">
              {data?.hotels?.length} مزود خدمة
            </p>
          </div>
          <img
            className="w-full rounded-lg"
            loading="lazy"
            src="/frontend/images/halls.png"
            alt="Hotels"
          />
        </div>
        {/* Second column */}
        <div className="relative">
          <div
            id="overlay"
            className="absolute top-0 rounded-lg right-0 w-full h-full"
            style={{
              backgroundColor: "rgba(33, 33, 33, 0.54)",
            }}
          ></div>
          <div className="absolute bottom-8 right-10 flex flex-col gap-2 text-white text-right">
            <p className="text-[color:var(--Neutral-White,#FFF)]  text-2xl font-bold leading-[normal]">
              الاستراحات
            </p>
            <p className="text-sm md:text-base">
              {data?.resort?.length} مزود خدمة
            </p>
          </div>
          <img
            className="w-full rounded-lg h-[350px] object-cover"
            loading="lazy"
            src="/frontend/images/resorts.png"
            alt="Hotels"
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
