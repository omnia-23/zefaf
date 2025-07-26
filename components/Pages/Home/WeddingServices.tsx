import React from "react";

const WeddingServices = () => {
  const services = [
    {
      id: 1,
      title: "قاعات أفراح فاخرة",
      count: 130,
    },
    {
      id: 2,
      title: "تنسيق كامل للحفلات",
      count: 130,
    },
    {
      id: 3,
      title: "خدمات التصوير الاحترافي",
      count: 130,
    },
    {
      id: 4,
      title: "أزياء زفاف راقية",
      count: 130,
    },
    {
      id: 5,
      title: "مكياج وشعر",
      count: 130,
    },
    {
      id: 6,
      title: "تزيين وقاعات الكوشة",
      count: 130,
    },
    {
      id: 7,
      title: "ضيافة واستقبال",
      count: 130,
    },
  ];

  return (
    <section className="container  mx-auto flex flex-col gap-10 py-8 px-4 sm:px-6 md:px-10 text-black">
      {/* Section Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-1 rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
          <p className="text-[color:var(--Text-Color,#221F20)] text-2xl font-bold leading-normal">
            خدمات الافراح
          </p>
        </div>
        <p>
          مع عالم زفاف نوفر لك كل ما تحتاجه ليوم زفاف مثالي، من قاعات ملكية
          وتنسيق الحفلات، إلى التصوير الاحترافي، الأزياء الراقية، والتجميل، مع
          أفضل النصائح لاستقبال ضيوفك الكرام.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {services.map((service) => (
          <div
            key={service.id}
            style={{ borderRight: "11px solid #e65391" }}
            className="flex flex-col justify-center h-[120px] gap-2 border border-[color:var(--neutral-5,#F3F3F3)] bg-white shadow-sm px-6 py-4 rounded-lg"
          >
            <p className="text-[color:var(--Text-Color,#221F20)] text-lg font-semibold">
              {service.title}
            </p>
            <p className="text-[color:var(--neutral-50,#888)] text-sm">
              {service.count} خدمة
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeddingServices;
