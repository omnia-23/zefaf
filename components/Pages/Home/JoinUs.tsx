import React from "react";

const JoinUs = () => {
  return (
    <section
      className="w-full h-[340px] py-20 relative bg-cover px-4"
      style={{
        background: "url('/images/joinus/banner.png') no-repeat center",
        backgroundSize: "cover",
      }}
    >
      <div
        id="overlay"
        className="absolute top-0 rounded-lg right-0 w-full h-full"
        style={{ backgroundColor: "#000000C4" }}
      ></div>

      <div
        className="w-full h-full container lg:px-8 mx-auto relative"
        style={{ zIndex: 10 }}
      >
        <div className="absolute right-0 top-0 flex flex-col gap-6 px-20">
          <div className="flex items-center gap-4">
            <span className="w-6 h-[5px] rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
            <p className="[leading-trim:both] [text-edge:cap] text-2xl font-bold leading-[normal] text-white">
              انضم الينا
            </p>
          </div>
          <p className="text-white lg:max-w-[845px]">
            في كل عام يتواصل أكثر من 300 ألف عريس وعروس مع الشركات المسجلة في
            زفاف.نت، أنت أيضاً يمكنك إضافة عملك والتواصل مع العرسان بسهولة!
          </p>
          <a href="/company-register">
            <button className="flex h-12 flex-col justify-center items-center gap-2 [background:var(--Primary,#DB0962)] px-6 py-4 rounded-lg w-fit text-white">
              اضف شركتك
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
