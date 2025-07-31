import React from "react";

const AllViews = () => {
  const services = [
    {
      id: 1,
      title: "شاليهات نظام قاعات بالرياض",
      description:
        "احصل على أفخم الشاليهات المصممة بأسلوب يناسب حفلات الزفاف والفعاليات الخاصة.",
    },
    {
      id: 2,
      title: "صور مكياج عروس",
      description:
        "استعرض أجمل إطلالات مكياج العروس لتختاري ما يناسبك في يومك المميز.",
    },
    {
      id: 3,
      title: "أحدث تسريحات عرايس",
      description:
        "اكتشفي أحدث صيحات تسريحات العرايس لإطلالة ساحرة في يوم زفافك.",
    },
    {
      id: 4,
      title: "فساتين زفاف",
      description:
        "تشكيلة واسعة من فساتين الزفاف بأحدث التصاميم من المصممين المميزين.",
    },
  ];

  return (
    <section className="container  lg:px-8 mx-auto flex flex-col gap-10 py-8 px-4 sm:px-6 md:px-10 text-black">
      {/* Section Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-1 rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
          <p className="text-[color:var(--Text-Color,#221F20)] text-2xl font-bold leading-normal">
            كل المعارض
          </p>
        </div>
        <p>
          في قسم كل المعارض، نوفر لك أفخم الشاليهات، أحدث صيحات مكياج وتسريحات
          العرايس، مع أروع تشكيلات فساتين الزفاف لتختاري الأفضل ليومك!{" "}
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
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllViews;
