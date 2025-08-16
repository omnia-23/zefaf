import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerData = {
    logo: {
      src: "/images/new-logo.svg",
      alt: "Zafaf Logo",
      width: 200,
      height: 55,
    },
    description:
      "منصة زفاف هي منصة سعودية تختص بأفراحكم ومناسباتكم وجميع خدمات الأفراح وهي أحد منتجات شركة بيرادور السعودية لخدمة المعلومات والبرمجيات.",
    importantLinks: {
      title: "روابط هامة",
      links: [
        { text: "الرئيسية", url: "/" },
        {
          text: "من نحن",
          url: "/",
        },
        {
          text: "سياسة الخصوصية",
          url: "",
        },
        {
          text: "الشروط والاحكام",
          url: "",
        },
        {
          text: "المدونة",
          url: "/blogs",
        },
        {
          text: "الأسئلة الشائعة",
          url: "",
        },
        {
          text: "اتصل بنا",
          url: "",
        },
      ],
    },
    mainCategories: {
      title: "الأقسام الرئيسية",
      categories: [
        {
          text: "قاعات الفنادق",
          url: "/hotels",
        },
        {
          text: "قصور الأفراح",
          url: "/palaces",
        },
        {
          text: "استراحات الزفاف",
          url: "",
        },
        {
          text: "الضيافة وبوفيه الزفاف",
          url: "",
        },
        {
          text: "فستان الزفاف",
          url: "",
        },
        {
          text: "عبايات الزفاف",
          url: "",
        },
        {
          text: "فساتين الخطوبة",
          url: "",
        },
      ],
    },
    contactInfo: {
      title: "تواصل معنا",
      details: [
        { text: "الرياض ، المملكه العربيه السعوديه" },
        { text: "اتصل بنا : 553773356", url: "tel:553773356" },
        {
          text: "البريد الالكتروني : Sales@Zafaf.sa",
          url: "mailto:Sales@Zafaf.sa",
        },
      ],
      // socialMedia: [
      //   {
      //     platform: "Snapchat",
      //     url: "https://www.snapchat.com/add/zafaf.sa",
      //     icon: "/images/footer/snapchat.png",
      //   },
      //   {
      //     platform: "X-twitter",
      //     url: "https://x.com/zafafsa1",
      //     icon: "/images/footer/x.png",
      //   },
      //   {
      //     platform: "Instagram",
      //     url: "https://www.instagram.com/zafaf.sa1",
      //     icon: "/images/footer/instagram.png",
      //   },
      //   {
      //     platform: "Tiktok",
      //     url: "https://www.tiktok.com/@zafaf.sa",
      //     icon: "/images/footer/tiktok.png",
      //   },
      //   {
      //     platform: "Whatsapp",
      //     url: "https://wa.me/966553773356",
      //     icon: "/images/footer/whatsapp.png",
      //   },
      // ],
    },
    copyright:
      "© ٢٠٢٤ عالم زفاف — جميع الحقوق محفوظة. تم التطوير بواسطة فريق التطوير.",
  };

  return (
    <footer className="bg-[#FDF3F7] py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start">
              <Image
                src={footerData.logo.src}
                alt={footerData.logo.alt}
                width={footerData.logo.width}
                height={footerData.logo.height}
                priority
              />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {footerData.description}
            </p>
          </div>

          {/* Important Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {footerData.importantLinks.title}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {footerData.importantLinks.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="hover:text-pink-500 transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Categories */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {footerData.mainCategories.title}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {footerData.mainCategories.categories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={category.url}
                    className="hover:text-pink-500 transition-colors"
                  >
                    {category.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {footerData.contactInfo.title}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 mb-4">
              {footerData.contactInfo.details.map((detail, index) => (
                <li key={index}>
                  {detail.url ? (
                    <Link
                      href={detail.url}
                      className="hover:text-pink-500 transition-colors"
                    >
                      {detail.text}
                    </Link>
                  ) : (
                    <span>{detail.text}</span>
                  )}
                </li>
              ))}
            </ul>

            {/* Social Media */}
            {/* <div className="flex justify-center md:justify-end gap-3 mt-4">
              {footerData.contactInfo.socialMedia.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
                  aria-label={social.platform}
                >
                  <Image
                    src={social.icon}
                    alt={social.platform}
                    width={20}
                    height={20}
                  />
                </Link>
              ))}
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 border-t pt-4">
          {footerData.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
