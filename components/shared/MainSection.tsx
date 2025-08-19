import HomeSearchTabs from "./HomeNavigation/HomeSearchTabs";

const HomeSection = () => {
  return (
    <div className="px-4 container lg:px-12 flex flex-col w-full">
      <div className="mt-[40px] lg:mt-[50px] w-full flex justify-start">
        <p className="text-[color:var(--Neutral-White,#FFF)] text-right [leading-trim:both] [text-edge:cap] text-2xl font-medium leading-[normal]">
          التخطيط لحفل زفافك يبدأ الآن!
        </p>
      </div>

      <div className="mt-4 lg:mt-[45x] w-full flex justify-start container lg:px-0">
        <p className="text-white text-right [leading-trim:both] [text-edge:cap] text-lg md:text-2xl lg:text-[54px] font-extrabold leading-[50px] lg:leading-[100px]">
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
  );
};

export default HomeSection;
