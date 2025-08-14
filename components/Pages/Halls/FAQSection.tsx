"use client";

import React, { useState } from "react";

const FAQSection = ({
  faq,
}: {
  faq?: { question: string; answer: string }[];
}) => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
  // const faqData = [
  //   {
  //     id: 1,
  //     question: "كم تبلغ تكلفة حملات الإعلانات في فندق بوتيك المشرق الرياض؟",
  //     answer:
  //       "تختلف تكلفة حملات الإعلانات حسب نوع الحملة والمدة الزمنية والجمهور المستهدف. نحن نقدم باقات متنوعة تناسب جميع الميزانيات، ويمكنكم التواصل معنا للحصول على عرض سعر مخصص لاحتياجاتكم.",
  //   },
  //   {
  //     id: 2,
  //     question: "كم تبلغ سعة فندق بوتيك المشرق الرياض؟",
  //     answer:
  //       "يحتوي فندق بوتيك المشرق الرياض على 150 غرفة وجناح فاخر، مع مجموعة متنوعة من أنواع الإقامة التي تناسب احتياجات جميع النزلاء من رجال الأعمال والعائلات والأزواج.",
  //   },
  //   {
  //     id: 3,
  //     question: "ما هي المناسبات التي يستقبلها فندق بوتيك المشرق الرياض؟",
  //     answer:
  //       "يستقبل الفندق جميع أنواع المناسبات بما في ذلك حفلات الزفاف، المؤتمرات والاجتماعات التجارية، حفلات أعياد الميلاد، المناسبات الاجتماعية والعائلية، والفعاليات الخاصة. لدينا قاعات متعددة الأحجام لتناسب جميع الاحتياجات.",
  //   },
  //   {
  //     id: 4,
  //     question: "ما هي الخدمات والمرافق التي يوفرها فندق بوتيك المشرق الرياض؟",
  //     answer:
  //       "يوفر الفندق مجموعة واسعة من الخدمات والمرافق منها: مطاعم فاخرة، مركز للياقة البدنية، سبا ومركز صحي، مسبح داخلي وخارجي، مركز الأعمال، خدمة الغرف على مدار 24 ساعة، موقف سيارات مجاني، وخدمة واي فاي مجانية في جميع أنحاء الفندق.",
  //   },
  //   {
  //     id: 5,
  //     question: "كيفية الوصول إلى الفندق",
  //     answer:
  //       "يقع فندق بوتيك المشرق في قلب الرياض في منطقة استراتيجية سهلة الوصول. يمكن الوصول إليه عبر طريق الملك فهد أو طريق الملك عبدالعزيز. يبعد الفندق 45 دقيقة عن مطار الملك خالد الدولي، ونوفر خدمة النقل من وإلى المطار حسب الطلب.",
  //   },
  // ];

  const toggleItem = (id: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full px-4 md:max-w-4xl md:mx-auto md:px-6" dir="rtl">
      {/* Header */}
      <div className="text-start mb-6 md:mb-8">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
          الأسئلة المتداولة
        </h2>
      </div>

      {/* FAQ Container */}
      <div className="space-y-3 md:space-y-4">
        {faq?.map((item, index) => (
          <div
            key={index}
            className="bg-white border-b-[1px] border-gray-200 overflow-hidden"
          >
            {/* Question Header */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-3 md:p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2 md:gap-3">
                {/* Pink Question Mark Icon */}
                <div className="w-5 h-5 md:w-6 md:h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-500 text-xs md:text-sm font-bold">
                    ؟
                  </span>
                </div>
                <h3 className="text-gray-800 font-bold text-right flex-1 text-sm md:text-base">
                  {item.question}
                </h3>
              </div>

              {/* Toggle Arrow */}
              <div className="flex-shrink-0 mr-2 md:mr-4">
                <svg
                  className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transform transition-transform duration-200 ${
                    openItems[index] ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            {/* Answer Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems[index] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-3 pb-3 md:px-4 md:pb-4 pr-10 md:pr-13">
                <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                  <p className="text-gray-700 font-medium leading-relaxed text-sm md:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
