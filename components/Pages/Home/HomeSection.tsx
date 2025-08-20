"use client";
import React from "react";
import HomeSearchTabs from "@/components/HomeNavigation/HomeSearchTabs";

const MainSection = () => {
  return (
    <section
      className="flex flex-col items-center text-center bg-cover bg-center py-24 md:py-28 min-h-screen h-fit"
      style={{
        backgroundImage: "url(/images/Home-Banner.svg)",
      }}
    >
      <div className="px-4 container lg:px-8 flex flex-col w-full">
        {/* Small headline */}
        <div className="mt-10 lg:mt-12 w-full flex justify-start">
          <p className="text-white text-right text-lg sm:text-xl md:text-2xl font-medium leading-snug">
            التخطيط لحفل زفافك يبدأ الآن!
          </p>
        </div>

        {/* Main headline */}
        <div className="mt-4 lg:mt-10 w-full flex justify-start container lg:px-0">
          <p
            className="text-white text-right font-extrabold 
                 text-2xl  md:text-3xl lg:text-5xl
                 leading-8 sm:leading-10 md:leading-[50px] lg:leading-[80px] xl:leading-[100px]"
          >
            <span className="text-[#DB0962] ml-1">عالم زفاف,</span>
            <span className="text-white">
              الدليل الأكبر لجميع
              <br className="inline-flex" />
              خدمات حفل الزفاف في السعودية.
            </span>
          </p>
        </div>

        {/* search tabs */}
        <div className="mt-8">
          <HomeSearchTabs />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
