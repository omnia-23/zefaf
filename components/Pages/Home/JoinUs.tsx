import React from "react";

const JoinUs = () => {
  return (
    <section
      className="w-full min-h-[340px] py-16 sm:py-20 relative bg-cover px-4"
      style={{
        background: "url('/images/joinus/banner.png') no-repeat center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 w-full h-full bg-black/75 rounded-lg"></div>

      <div className="w-full h-full container mx-auto relative z-10">
        <div className="relative flex flex-col gap-4 sm:gap-6 px-4 sm:px-10 lg:px-20 max-w-full sm:max-w-3xl lg:max-w-[845px]">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="w-6 h-[5px] rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
            <p className="text-xl sm:text-2xl font-bold text-white leading-normal">
              انضم الينا
            </p>
          </div>
          <p className="text-white text-sm sm:text-base leading-relaxed">
            في كل عام يتواصل أكثر من 300 ألف عريس وعروس مع الشركات المسجلة في
            زفاف.نت، أنت أيضاً يمكنك إضافة عملك والتواصل مع العرسان بسهولة!
          </p>
          <div>
            <a href="/joinus">
              <button className="h-12 px-5 sm:px-6 py-3 rounded-lg text-white bg-[color:var(--Primary,#DB0962)] text-sm sm:text-base">
                اضف شركتك
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
