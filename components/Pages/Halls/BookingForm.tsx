"use client";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";
import { BookingPayloadType, FormInputsType } from "@/types/hall";
import { sendFormSubmit } from "@/services/halls";
import { Dropdown } from "@/components/shared/Dropdown";

const BookingForm = ({ hallSlug }: { hallSlug: string }) => {
  const { user } = useAuth();

  const [formData, setFormData] = useState<FormInputsType>({
    eventType: "",
    date: "",
    guestMin: "",
    guestMax: "",
    budgetMin: "",
    budgetMax: "",
    inquiry: "",
    contact_name: "",
    contact_email: "",
    contact_phone: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isAgreed, setIsAgreed] = useState(false);
  const [agreementError, setAgreementError] = useState("");

  const eventTypes = [
    { label: "حفل زفاف", value: "wedding" },
    { label: "مؤتمر", value: "conference" },
    { label: "حفل تخرج", value: "graduation" },
    { label: "حفل عيد ميلاد", value: "birthday" },
    { label: "اجتماع عمل", value: "business" },
    { label: "مناسبة خاصة", value: "other" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (!formData.eventType) {
      newErrors.eventType = "يرجى اختيار نوع المناسبة";
      isValid = false;
    }
    if (!formData.date) {
      newErrors.date = "يرجى اختيار التاريخ";
      isValid = false;
    }

    if (!formData.guestMin || !formData.guestMax) {
      newErrors.guest = "يرجى إدخال عدد المدعوين (من / إلى)";
      isValid = false;
    }
    if (!formData.budgetMin || !formData.budgetMax) {
      newErrors.budget = "يرجى إدخال الميزانية (من / إلى)";
      isValid = false;
    }

    if (!user) {
      if (!formData.contact_name) {
        newErrors.contact_name = "يرجى إدخال الاسم";
        isValid = false;
      }
      if (!formData.contact_email) {
        newErrors.contact_email = "يرجى إدخال البريد الإلكتروني";
        isValid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(formData.contact_email)) {
        newErrors.contact_email = "يرجى إدخال بريد إلكتروني صحيح";
        isValid = false;
      }
      if (!formData.contact_phone) {
        newErrors.contact_phone = "يرجى إدخال رقم الهاتف";
        isValid = false;
      } else if (
        !/^\d{9,15}$/.test(formData.contact_phone.replace(/[\s-+]/g, ""))
      ) {
        newErrors.contact_phone = "يرجى إدخال رقم هاتف صحيح";
        isValid = false;
      }
    }

    if (!isAgreed) {
      setAgreementError("يرجى الموافقة على الشروط والأحكام");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // 🔥 Build API payload
  const buildPayload = (): BookingPayloadType => {
    return {
      contact_name: user?.name || formData.contact_name,
      contact_email: user?.email || formData.contact_email,
      contact_phone: user?.phone || formData.contact_phone,
      currency: "SAR",
      notes: formData.inquiry,
      event_date: formData.date,
      occasions: [{ type: formData.eventType }],
      guests: [
        { min: Number(formData.guestMin), max: Number(formData.guestMax) },
      ],
      budgets: [
        { min: Number(formData.budgetMin), max: Number(formData.budgetMax) },
      ],
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const payload = buildPayload();
      console.log("🚀 Payload to API:", payload);

      // TODO: send payload to API
      const res = await sendFormSubmit(hallSlug, payload);
      console.log({ res });
      toast.success("تم إرسال طلب الحجز بنجاح!");
      setFormData({
        eventType: "",
        date: "",
        guestMin: "",
        guestMax: "",
        budgetMin: "",
        budgetMax: "",
        inquiry: "",
        contact_name: "",
        contact_email: "",
        contact_phone: "",
      });
      setIsAgreed(false);
    } else {
      toast.error("يرجى إصلاح الأخطاء في النموذج");
    }
  };

  return (
    <div
      className="sticky top-32 w-full md:px-4 lg:max-w-sm md:mx-auto h-fit"
      dir="rtl"
    >
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
                  value={formData.contact_name}
                  onChange={(e) =>
                    handleInputChange("contact_name", e.target.value)
                  }
                  className={`w-full p-2 border ${
                    errors.contact_name ? "border-red-500" : "border-gray-300"
                  } rounded-lg bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm md:text-base`}
                  placeholder="أدخل اسمك الكامل"
                />
                {errors.contact_name && (
                  <p className="mt-1 text-red-500 text-xs md:text-sm">
                    {errors.contact_name}
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
                  value={formData.contact_email}
                  onChange={(e) =>
                    handleInputChange("contact_email", e.target.value)
                  }
                  className={`w-full p-2 border ${
                    errors.contact_email ? "border-red-500" : "border-gray-300"
                  } rounded-lg bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm md:text-base`}
                  placeholder="أدخل بريدك الإلكتروني"
                />
                {errors.contact_email && (
                  <p className="mt-1 text-red-500 text-xs md:text-sm">
                    {errors.contact_email}
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
                  value={formData.contact_phone}
                  onChange={(e) =>
                    handleInputChange("contact_phone", e.target.value)
                  }
                  className={`w-full p-2  border ${
                    errors.contact_phone ? "border-red-500" : "border-gray-300"
                  } rounded-lg bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm md:text-base`}
                  placeholder="أدخل رقم هاتفك"
                />
                {errors.contact_phone && (
                  <p className="mt-1 text-red-500 text-xs md:text-sm">
                    {errors.contact_phone}
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
                className={`w-full p-2 border ${
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
            <label className="block text-gray-700 font-medium mb-1">
              عدد المدعوين
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="من"
                value={formData.guestMin}
                onChange={(e) => handleInputChange("guestMin", e.target.value)}
                className={`w-1/2 p-2 border ${
                  errors.guest ? "border-red-500" : "border-gray-300"
                } rounded-lg`}
              />
              <input
                type="number"
                placeholder="إلى"
                value={formData.guestMax}
                onChange={(e) => handleInputChange("guestMax", e.target.value)}
                className={`w-1/2 p-2 border ${
                  errors.guest ? "border-red-500" : "border-gray-300"
                } rounded-lg`}
              />
            </div>
            {errors.guest && (
              <p className="mt-1 text-red-500 text-xs">{errors.guest}</p>
            )}
          </div>

          {/* Budget Range */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              ميزانية المناسبة
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="من"
                value={formData.budgetMin}
                onChange={(e) => handleInputChange("budgetMin", e.target.value)}
                className={`w-1/2 p-2 border ${
                  errors.budget ? "border-red-500" : "border-gray-300"
                } rounded-lg`}
              />
              <input
                type="number"
                placeholder="إلى"
                value={formData.budgetMax}
                onChange={(e) => handleInputChange("budgetMax", e.target.value)}
                className={`w-1/2 p-2 border ${
                  errors.budget ? "border-red-500" : "border-gray-300"
                } rounded-lg`}
              />
            </div>
            {errors.budget && (
              <p className="mt-1 text-red-500 text-xs">{errors.budget}</p>
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
              className={`w-full p-2   border ${
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
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 text-sm md:text-base"
          >
            احجز الآن
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
