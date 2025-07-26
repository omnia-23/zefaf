import React from "react";

const OurServices = () => {
  const services = [
    {
      id: 1,
      icon: "/images/services-1.svg",
      title: "العروض",
      description:
        "استكشف باقاتنا المتنوعة التي تشمل كل ما تحتاجه لتخطيط حفل زفافك، فنحن نقدم خيارات مرنة تناسب جميع الأذواق والميزانيات.",
    },
    {
      id: 2,
      icon: "/images/services-2.svg",
      title: "الأسعار",
      description:
        "نحن نؤمن بأهمية الشفافية، حيث تجد هنا تفاصيل الأسعار لكل خدمة، مما يساعدك على اتخاذ قرار مبني على معرفة كاملة.",
    },
    {
      id: 3,
      icon: "/images/services-3.svg",
      title: "فريق العمل",
      description:
        "فريقنا المتخصص جاهز لمساعدتك في كل خطوة، من التخطيط إلى التنفيذ، لتضمن  أن يكون حفل",
    },
  ];

  return (
    <section className="container lg:px-8 mx-auto flex flex-col items-start gap-20 self-stretch py-[120px] text-black px-4">
      {/* Section Header */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <span className="w-6 h-[5px] rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
          <p className="text-[color:var(--Text-Color,#221F20)] [leading-trim:both] [text-edge:cap] text-2xl font-bold leading-[normal]">
            خدماتنا
          </p>
        </div>
        <p className="text-[#555] text-right [leading-trim:both] [text-edge:cap] text-base font-normal leading-[normal]">
          في عالم زفاف، نوفر لك فريق عمل محترف، أسعار تنافسية تناسب الجميع،
          وعروض مميزة تضمن لك تجربة زفاف استثنائية بأعلى جودة.{" "}
        </p>
      </div>

      {/* Services Grid */}
      <div className="flex flex-wrap gap-6 max-w-full justify-center w-full">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex w-[411px] h-[183px] flex-col items-end gap-6 border border-[color:var(--neutral-5,#F3F3F3)] [background:var(--Neutral-White,#FFF)] p-6 rounded-lg border-solid"
          >
            <div className="flex-1 w-full h-full relative">
              <div className="flex items-center gap-5">
                <img
                  className="size-[40px]"
                  src={service.icon}
                  alt={service.title}
                />
                <p className="text-[color:var(--Text-Color,#221F20)] [leading-trim:both] [text-edge:cap] text-xl font-semibold leading-[normal]">
                  {service.title}
                </p>
              </div>
              <p className="self-stretch mt-2 text-[color:var(--neutral-40,#A0A0A0)] text-right [leading-trim:both] [text-edge:cap] text-base font-normal leading-[normal]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
