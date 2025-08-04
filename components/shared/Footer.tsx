import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#FDF3F7] py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-2 text-center">
            <div className="flex justify-center">
              <Image
                src="/images/new-logo.svg"
                alt="logo"
                width={200}
                height={55}
                priority
              />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              لوريم إبسوم دولور سيت اميتلوريم إبسوم دولور سيت اميتلوريم إبسوم.
            </p>
          </div>

          {/* Help Section */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">مساعدة</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                {/* <a href="#" className="hover:text-pink-500 transition-colors"> */}
                من نحن
                {/* </a> */}
              </li>
              <li>
                {/* <a href="#" className="hover:text-pink-500 transition-colors"> */}
                اتصل بنا
                {/* </a> */}
              </li>
              <li>
                {/* <a href="#" className="hover:text-pink-500 transition-colors"> */}
                الشروط والأحكام
                {/* </a> */}
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              روابط هامة
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                {/* <a href="#" className="hover:text-pink-500 transition-colors"> */}
                الشركات
                {/* </a> */}
              </li>
              <li>
                {/* <a href="#" className="hover:text-pink-500 transition-colors"> */}
                المدن
                {/* </a> */}
              </li>
            </ul>
          </div>

          {/* App Download Section */}
          {/* <div className="text-center md:text-right space-y-4">
            <h3 className="text-lg font-bold mb-4">حمل تطبيق زفاف الآن!</h3>
            <div className="flex justify-between  gap-3 items-center md:items-start">
              <a href="#" className="inline-block">
                <Image
                  src="/images/footer/play-store.svg"
                  alt="play-store"
                  width={136}
                  height={40}
                />
              </a>
              <a href="#" className="inline-block">
                <Image
                  src="/images/footer/app-store.svg"
                  alt="app-store"
                  width={136}
                  height={40}
                />
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-3 mb-6">
              <a
                href="#"
                className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Image
                  src="/images/footer/facebook.png"
                  alt="x"
                  width={50}
                  height={50}
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Image
                  src="/images/footer/whatsapp.png"
                  alt="x"
                  width={50}
                  height={50}
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Image
                  src="/images/footer/x.png"
                  alt="x"
                  width={50}
                  height={50}
                />
              </a>
            </div>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 border-t pt-4">
          جميع الحقوق محفوظة © عالم زفاف ٢٠٢٤. تم التطوير بواسطة ديجي فلاي
        </div>
      </div>
    </footer>
  );
};

export default Footer;
