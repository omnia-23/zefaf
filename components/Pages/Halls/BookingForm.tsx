"use client";
import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    eventType: "",
    date: "",
    guestCount: "",
    budget: "",
    inquiry: "",
  });

  const [isAgreed, setIsAgreed] = useState(false);

  const eventTypes = [
    "حفل زفاف",
    "مؤتمر",
    "حفل تخرج",
    "حفل عيد ميلاد",
    "اجتماع عمل",
    "مناسبة خاصة",
  ];

  const guestCounts = [
    "50 - 100",
    "100 - 150",
    "150 - 300",
    "300 - 500",
    "500+",
  ];

  const budgetRanges = [
    "1000 - 5000 ريال",
    "5000 - 10000 ريال",
    "10000 - 20000 ريال",
    "20000+ ريال",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!isAgreed) {
      alert("يرجى الموافقة على الشروط والأحكام");
      return;
    }
    console.log("Form Data:", formData);
    alert("تم إرسال طلب الحجز بنجاح!");
  };

  return (
    <div className="w-full px-4 md:max-w-sm md:mx-auto" dir="rtl">
      <div className="md:shadow-md rounded-lg p-4 md:p-6 bg-white">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* Event Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 md:mb-2 text-sm md:text-base">
              نوع المناسبة
            </label>
            <div className="relative">
              <select
                value={formData.eventType}
                onChange={(e) => handleInputChange("eventType", e.target.value)}
                className="w-full p-2 md:p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none text-sm md:text-base"
                required
              >
                <option value="">اختر نوع المناسبة</option>
                {eventTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className="absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-gray-400"
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
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 md:mb-2 text-sm md:text-base">
              التاريخ
            </label>
            <div className="relative">
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                className="w-full p-2 md:p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm md:text-base"
                required
              />
              <div className="absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Guest Count */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 md:mb-2 text-sm md:text-base">
              عدد المدعوين
            </label>
            <div className="relative">
              <select
                value={formData.guestCount}
                onChange={(e) =>
                  handleInputChange("guestCount", e.target.value)
                }
                className="w-full p-2 md:p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none text-sm md:text-base"
                required
              >
                <option value="">اختر عدد المدعوين</option>
                {guestCounts.map((count, index) => (
                  <option key={index} value={count}>
                    {count}
                  </option>
                ))}
              </select>
              <div className="absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-gray-400"
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
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 md:mb-2 text-sm md:text-base">
              ميزانية المناسبة
            </label>
            <div className="relative">
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange("budget", e.target.value)}
                className="w-full p-2 md:p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none text-sm md:text-base"
                required
              >
                <option value="">اختر الميزانية</option>
                {budgetRanges.map((budget, index) => (
                  <option key={index} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
              <div className="absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-gray-400"
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
            </div>
          </div>

          {/* Inquiry */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 md:mb-2 text-sm md:text-base">
              إستفساراتك عن القاعة
            </label>
            <textarea
              value={formData.inquiry}
              onChange={(e) => handleInputChange("inquiry", e.target.value)}
              placeholder="أكتب إستفسارك هنا..."
              rows={3}
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-sm md:text-base"
            />
          </div>

          {/* Agreement Checkbox */}
          <div className="flex items-start gap-2 md:gap-3">
            <div className="flex items-center h-5 mt-0.5">
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 focus:ring-2"
              />
            </div>
            <label className="text-xs md:text-sm text-gray-600 leading-relaxed">
              أوافق على الإتفاقية الخاصة بمنصة زفاف وإلتزم بالشروط والأحكام
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 text-sm md:text-base"
          >
            احجز الآن
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
