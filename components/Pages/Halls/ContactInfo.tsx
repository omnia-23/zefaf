// components/ContactInfo.js
"use client";

import React from "react";

const ContactInfo = () => {
  return (
    <div className="px-4" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Contact Information Header */}
        <div className="text-start mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            معلومات التواصل
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            {/* Phone Number */}
            <div className="text-start">
              <h3 className="text-base font-semibold text-gray-700 mb-2">
                رقم الهاتف
              </h3>
              <a
                href="tel:+966531465467​98"
                className="text-[#DB0962] text-xl font-medium transition-colors"
              >
                +966 531 465 467 98
              </a>
            </div>

            {/* Title */}
            <div className="text-start">
              <h3 className="text-base font-semibold text-gray-700 mb-2">
                العنوان
              </h3>
              <p className="max-w-md text-gray-700">
                إنها سلسلة من الكلمات العشوائية التي، عند وضعها في موضعها، لا
                تشكل جملا بمعنى كامل
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 text-center mb-8">
            فريق العمل
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Team Member 1 */}
            <div className="flex items-center justify-start space-x-reverse space-x-4">
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

            {/* Team Member 1 */}
            <div className="flex items-center justify-start space-x-reverse space-x-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
