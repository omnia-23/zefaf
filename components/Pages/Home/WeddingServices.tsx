import React from "react";

const WeddingServices = () => {
    const services = [
        {
            id: 1,
            title: "قاعات أفراح فاخرة",
            description:
                "استعرض مجموعة متنوعة من القاعات التي تناسب كل الأذواق والأحجام.",
        },
        {
            id: 2,
            title: "تنسيق كامل للحفلات",
            description:
                "احصل على مساعدة منسقي حفلات محترفين يهتمون بكل تفاصيل زفافك.",
        },
        {
            id: 3,
            title: "خدمات التصوير الاحترافي",
            description: "احجز مصورين خبراء لتوثيق لحظاتك بأفضل جودة.",
        },
        {
            id: 4,
            title: "أزياء زفاف راقية",
            description:
                "استكشف تشكيلات من فساتين الزفاف والبدلات الرسمية من المصممين المميزين.",
        },
        {
            id: 5,
            title: "مكياج وشعر",
            description:
                "اعتمدي على خبراء التجميل ومصففي الشعر لأفضل إطلالة في يومك.",
        },
        {
            id: 6,
            title: "تزيين وقاعات الكوشة",
            description: "تزيين مبتكر ولمسات فريدة لخلق أجواء زفاف لا تُنسى.",
        },
        {
            id: 7,
            title: "ضيافة واستقبال",
            description:
                "خدمات الضيافة التي تجعل ضيوفك يشعرون بالترحيب والراحة.",
        },
    ];

    return (
        <section className="container  mx-auto flex flex-col gap-10 py-8 px-4 sm:px-6 md:px-10 text-black">
            {/* Section Header */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <span className="w-6 h-1 rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
                    <p className="text-[color:var(--Text-Color,#221F20)] text-2xl font-bold leading-normal">
                        ما نقدمه لك
                    </p>
                </div>
                <p>
                    مع عالم زفاف نوفر لك كل ما تحتاجه ليوم زفاف مثالي، من قاعات
                    ملكية وتنسيق الحفلات، إلى التصوير الاحترافي، الأزياء
                    الراقية، والتجميل، مع أفضل النصائح لاستقبال ضيوفك الكرام.
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

export default WeddingServices;
