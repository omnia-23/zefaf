"use client";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Dropdown } from "@/components/shared/Dropdown";
import toast from "react-hot-toast";
import { FormInputsType } from "@/types/hall";


const BookingForm = ({ hallId }: { hallId: number }) => {
  const { user } = useAuth();

  const [formData, setFormData] = useState<FormInputsType>({
    eventType: "",
    date: "",
    guestCount: "",
    budget: "",
    inquiry: "",
    // Add fields for non-logged in users
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Record<keyof FormInputsType, string>>({
    eventType: "",
    date: "",
    guestCount: "",
    budget: "",
    inquiry: "",
    name: "",
    email: "",
    phone: "",
  });

  const [isAgreed, setIsAgreed] = useState(false);
  const [agreementError, setAgreementError] = useState("");

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

  const handleInputChange = (field: keyof FormInputsType, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;
    if (!formData.eventType) {
      newErrors.eventType = "يرجى اختيار نوع المناسبة";
      isValid = false;
    }

    if (!formData.date) {
      newErrors.date = "يرجى اختيار التاريخ";
      isValid = false;
    }

    if (!formData.guestCount) {
      newErrors.guestCount = "يرجى اختيار عدد المدعوين";
      isValid = false;
    }

    if (!formData.budget) {
      newErrors.budget = "يرجى اختيار الميزانية";
      isValid = false;
    }

    if (!user) {
      if (!formData.name) {
        newErrors.name = "يرجى إدخال الاسم";
        isValid = false;
      }

      if (!formData.email) {
        newErrors.email = "يرجى إدخال البريد الإلكتروني";
        isValid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "يرجى إدخال بريد إلكتروني صحيح";
        isValid = false;
      }

      if (!formData.phone) {
        newErrors.phone = "يرجى إدخال رقم الهاتف";
        isValid = false;
      } else if (!/^\d{9,15}$/.test(formData.phone.replace(/[\s-+]/g, ""))) {
        newErrors.phone = "يرجى إدخال رقم هاتف صحيح";
        isValid = false;
      }
    }

    // Check agreement
    if (!isAgreed) {
      setAgreementError("يرجى الموافقة على الشروط والأحكام");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Data:", formData);
      console.log("User Data:", user);
      
      toast.success("تم إرسال طلب الحجز بنجاح!");
      setFormData({
        eventType: "",
        date: "",
        guestCount: "",
        budget: "",
        inquiry: "",
        name: "",
        email: "",
        phone: "",
      });
    } else {
      toast.error("يرجى إصلاح الأخطاء في النموذج");
    }
  };

  return (
    <div className="w-full md:px-4 lg:max-w-sm md:mx-auto" dir="rtl">
      <div className="lg:shadow-md rounded-lg p-4 md:p-6 bg-white">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* User Information (only shown if not logged in) */}
          {!user && (
            <>
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-1 md:mb-2 text-sm md:text-base">
                  الاسم
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={`w-full p-2 md:p-3 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-lg bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm md:text-base`}
                  placeholder="أدخل اسمك الكامل"
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-xs md:text-sm">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-1 md:mb-2 text-sm md:text-base">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full p-2 md:p-3 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm md:text-base`}
                  placeholder="أدخل بريدك الإلكتروني"
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-xs md:text-sm">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-medium mb-1 md:mb-2 text-sm md:text-base">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={`w-full p-2 md:p-3 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-lg bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm md:text-base`}
                  placeholder="أدخل رقم هاتفك"
                />
                {errors.phone && (
                  <p className="mt-1 text-red-500 text-xs md:text-sm">
                    {errors.phone}
                  </p>
                )}
              </div>
            </>
          )}

          {/* Event Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 md:mb-2 text-sm md:text-base">
              نوع المناسبة
            </label>
            <div
              className={`${
                errors.eventType ? "border border-red-500 rounded-lg" : ""
              }`}
            >
              <Dropdown
                options={eventTypes}
                value={formData.eventType}
                onChange={(value) => handleInputChange("eventType", value)}
                placeholder="اختر نوع المناسبة"
              />
            </div>
            {errors.eventType && (
              <p className="mt-1 text-red-500 text-xs md:text-sm">
                {errors.eventType}
              </p>
            )}
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
                className={`w-full p-2 md:p-3 border ${
                  errors.date ? "border-red-500" : "border-gray-300"
                } rounded-lg bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm md:text-base`}
              />
            </div>
            {errors.date && (
              <p className="mt-1 text-red-500 text-xs md:text-sm">
                {errors.date}
              </p>
            )}
          </div>

          {/* Guest Count */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 md:mb-2 text-sm md:text-base">
              عدد المدعوين
            </label>
            <div
              className={`${
                errors.guestCount ? "border border-red-500 rounded-lg" : ""
              }`}
            >
              <Dropdown
                options={guestCounts}
                value={formData.guestCount}
                onChange={(value) => handleInputChange("guestCount", value)}
                placeholder="اختر عدد المدعوين"
              />
            </div>
            {errors.guestCount && (
              <p className="mt-1 text-red-500 text-xs md:text-sm">
                {errors.guestCount}
              </p>
            )}
          </div>

          {/* Budget */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 md:mb-2 text-sm md:text-base">
              ميزانية المناسبة
            </label>
            <div
              className={`${
                errors.budget ? "border border-red-500 rounded-lg" : ""
              }`}
            >
              <Dropdown
                options={budgetRanges}
                value={formData.budget}
                onChange={(value) => handleInputChange("budget", value)}
                placeholder="اختر الميزانية"
              />
            </div>
            {errors.budget && (
              <p className="mt-1 text-red-500 text-xs md:text-sm">
                {errors.budget}
              </p>
            )}
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
              className={`w-full p-2 md:p-3 border ${
                errors.inquiry ? "border-red-500" : "border-gray-300"
              } rounded-lg bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-sm md:text-base`}
            />
            {errors.inquiry && (
              <p className="mt-1 text-red-500 text-xs md:text-sm">
                {errors.inquiry}
              </p>
            )}
          </div>

          {/* Agreement Checkbox */}
          <div className="flex items-start gap-2 md:gap-3">
            <div className="flex items-center h-5 mt-0.5">
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={(e) => {
                  setIsAgreed(e.target.checked);
                  if (e.target.checked) setAgreementError("");
                }}
                className={`w-4 h-4 text-pink-600 bg-gray-100 ${
                  agreementError ? "border-red-500" : "border-gray-300"
                } rounded focus:ring-pink-500 focus:ring-2`}
              />
            </div>
            <div>
              <label className="text-xs md:text-sm text-gray-600 leading-relaxed">
                أوافق على الإتفاقية الخاصة بمنصة زفاف وإلتزم بالشروط والأحكام
              </label>
              {agreementError && (
                <p className="mt-1 text-red-500 text-xs">{agreementError}</p>
              )}
            </div>
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
