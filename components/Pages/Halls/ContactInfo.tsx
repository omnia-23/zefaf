"use client";
import React, { useState } from "react";

interface MaskedFieldProps {
  label: string;
  value: string;
  type?: "phone" | "whatsapp" | "email" | "text";
}

const MaskedField: React.FC<MaskedFieldProps> = ({
  label,
  value,
  type = "text",
}) => {
  const [showFull, setShowFull] = useState(false);

  // Mask: replace all but last 3 chars with "*"
  const maskedValue = value.replace(/.(?=.{3})/g, "*");

  const formatValue = (val: string) => {
    if (type === "phone" || type === "whatsapp") {
      return val.replace(/(\+\d{3})(\d{3})(\d{3})(\d{3,})/, "$1 $2 $3 $4");
    }
    return val;
  };

  const getHref = (val: string) => {
    switch (type) {
      case "phone":
        return `tel:${val}`;
      case "whatsapp":
        return `https://wa.me/${val.replace(/\D/g, "")}`;
      case "email":
        return `mailto:${val}`;
      default:
        return undefined;
    }
  };

  return (
    <div className="text-start">
      <h3 className="text-base font-semibold text-gray-700 mb-2">{label}</h3>
      {showFull ? (
        type === "text" ? (
          <p className="text-[#DB0962] text-xl font-medium">
            {formatValue(value)}
          </p>
        ) : (
          <a
            href={getHref(value)}
            target={type === "whatsapp" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-[#DB0962] text-xl font-medium transition-colors"
          >
            {formatValue(value)}
          </a>
        )
      ) : (
        <button
          onClick={() => setShowFull(true)}
          className="text-[#DB0962] text-xl font-medium transition-colors underline"
        >
          {maskedValue}
        </button>
      )}
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="px-4" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Contact Information Header */}
        <div className="text-start mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            معلومات التواصل
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MaskedField
              label="رقم الهاتف"
              value="+96653146546798"
              type="phone"
            />
            <MaskedField
              label="واتساب"
              value="+96653146546798"
              type="whatsapp"
            />
            <MaskedField
              label="البريد الإلكتروني"
              value="example@email.com"
              type="email"
            />
            <MaskedField
              label="العنوان"
              value="الرياض، المملكة العربية السعودية"
              type="text"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 text-center mb-8">
            فريق العمل
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex items-center justify-start space-x-reverse space-x-4"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-start">
                  <h4 className="font-semibold text-gray-800">محمد محمد</h4>
                  <p className="text-gray-600 text-sm">موظف</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
