import React from "react";

export default function HeaderSection() {
  return (
    <div
      className="relative bg-cover bg-center h-96 md:h-[28rem]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/bannerEachPage.png")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center">
        <div className="text-right text-white">
          {/* breadcrumbs */}
          <div className="text-sm sm:text-base mb-2">
            <span>الرئيسية</span>
            <span className="mx-2">/</span>
            <span className="text-[#DB0962]">تصنيف الأفراح</span>
          </div>

          {/* title */}
          <div className="flex items-center my-3 sm:my-5 gap-2 sm:gap-4">
            <span className="w-4 sm:w-6 h-[4px] sm:h-[5px] rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              قصور الأفراح
            </h1>
          </div>

          {/* description */}
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            لوريم إيبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
            ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... كتيب
            أو طباعة أو موقع أو لتصميم أو يستخدم مصممي الجرافيك
          </p>
        </div>
      </div>
    </div>
  );
}
