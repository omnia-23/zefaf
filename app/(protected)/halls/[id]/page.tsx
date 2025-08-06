import React from "react";
import Image from "next/image";
import { Heart, MapPin, Star } from "lucide-react";
import MainNavbar from "@/components/shared/Navigation/MainNavbar";
import HeaderSection from "@/components/Pages/Halls/HeaderSection";
import VenueImageSlider from "@/components/shared/VenueImageSlider";

interface HallDetails {
  id: number;
  name: string;
  location: string;
  rating: string;
  priceRange: string;
  capacity: string;
  description: string;
  image: string;
  features: string[];
  images: string[];
}

export default function HallDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  // In a real application, you would fetch the hall details from an API
  // const { data, isLoading, error } = useSWR(`/api/halls/${params.id}`, fetcher);

  // Mock data for demonstration
  const hallDetails: HallDetails = {
    id: parseInt(params.id),
    name: "فندق ذهب المركز المالي",
    location: "بلدية العليا",
    rating: "4.5",
    priceRange: "1500 - 8000 ر.س",
    capacity: "150 - 800 شخص",
    description:
      "إنها سلسلة من الكلمات اللاتينية التي، عند وضعها في موضعها، لا تشكل جملةً بمعنى كامل، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات. إنها سلسلة من الكلمات اللاتينية التي، عند وضعها في موضعها، لا تشكل جملةً بمعنى كامل، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات.",
    image: "/images/hotel.svg",
    features: [
      "مكيف هواء",
      "واي فاي مجاني",
      "موقف سيارات",
      "خدمة الغرف",
      "مسبح",
      "مطعم",
      "صالة رياضية",
      "سبا",
    ],
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    ],
  };

  return (
    <>
      <HeaderSection
        title={`${hallDetails.name}`}
        description={`${hallDetails.description}`}
        breadcrumbs={[
          { label: "الرئيسية", href: "/" },
          { label: "قصور الأفراح", href: "/halls" },
          { label: `${hallDetails.name}`, href: `/halls/${params.id}` },
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - Images */}
          <div className="lg:w-2/3">
            <VenueImageSlider images={hallDetails.images} />

            {/* Header with name and price */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {hallDetails.name}
              </h1>
              <div className="text-[#990645] font-bold text-xl md:text-2xl mt-2 md:mt-0">
                {hallDetails.priceRange}
              </div>
            </div>
            {/* Description */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">تفاصيل القاعة</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  {hallDetails.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Details and features */}
          <div className="lg:w-1/3">
            {/* Info card */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              {/* Location and rating */}
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#6D0431]" />
                  <span className="text-[#6D0431] font-medium">
                    {hallDetails.location}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-green-500" />
                  <span className="text-green-600 font-semibold">
                    {hallDetails.rating}
                  </span>
                </div>
                <div className="text-gray-600">{hallDetails.capacity}</div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-bold mb-4">المميزات</h3>
                <div className="grid grid-cols-2 gap-3">
                  {hallDetails.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#DB0962]"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking button */}
            <button className="w-full bg-[#DB0962] hover:bg-[#b0074e] text-white font-bold py-3 px-4 rounded-lg transition-colors">
              احجز الآن
            </button>

            {/* Contact info */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">معلومات الاتصال</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <span className="text-gray-700">+966 12 345 6789</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span className="text-gray-700">info@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    ></path>
                  </svg>
                  <span className="text-gray-700">www.example.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs section for additional information */}
        {/* <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <a
                href="#"
                className="border-[#DB0962] text-[#DB0962] whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
              >
                تفاصيل القاعة
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
              >
                المراجعات
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
              >
                الموقع
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
              >
                الأسئلة الشائعة
              </a>
            </nav>
          </div>
        </div> */}
      </div>
    </>
  );
}
