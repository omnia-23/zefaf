"use client";
// pages/index.js
import Head from "next/head";
import { useState } from "react";
import { ChevronDown, Heart, Star } from "lucide-react";
import HeaderSection from "@/components/Pages/Halls/HeaderSection";
import SideBarFilters from "@/components/Pages/Halls/SideBarFilters";

export default function PropertyListing() {
  const [selectedFilters, setSelectedFilters] = useState({
    bedrooms: "",
    city: "",
    area: "",
  });

  const [isFilterOpen, setIsFilterOpen] = useState({
    bedrooms: false,
    city: false,
    area: false,
  });

  const toggleFilter = (filterName: string) => {
    setIsFilterOpen((prev) => ({
      ...prev,
      //   [filterName]: !prev[filterName],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>قصور الأفراح - العقارات</title>
        <meta name="description" content="أفضل قصور الأفراح والعقارات" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <HeaderSection />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <SideBarFilters />

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <select className="p-2 border border-gray-300 rounded-lg text-sm">
                  <option>ترتيب</option>
                  <option>الأحدث</option>
                  <option>الأقدم</option>
                  <option>الأعلى سعراً</option>
                  <option>الأقل سعراً</option>
                </select>
              </div>
              <div className="text-gray-600">
                <span>500 منتج متاح</span>
              </div>
            </div>

            {/* Section Title */}
            <div className="mb-6">
              <div className="flex items-center my-3 sm:my-5 gap-2 sm:gap-4">
                <span className="w-4 sm:w-6 h-[4px] sm:h-[5px] rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
                <h2 className="text-xl">افضل قاعات الزفاف</h2>
              </div>
            </div>

            {/* Property Card */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative">
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    alt="فندق ومطعم"
                    className="w-full h-48 md:h-full object-cover"
                  />
                  <button className="absolute top-3 left-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">
                      فندق ومطعم المركز العالي
                    </h3>
                    <div className="text-left">
                      <div className="text-red-500 font-bold text-lg">
                        800 - 600
                      </div>
                      <div className="text-sm text-gray-500">150 - 800 شخص</div>
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center ml-4">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-gray-300" />
                      <span className="text-sm text-gray-600 mr-1">(4.0)</span>
                    </div>
                    <span className="text-sm text-red-500 bg-red-50 px-2 py-1 rounded">
                      ● بلدية الطائف
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    لكنها سلسلة من الكلمات الالتينية التي لا تحمل معنى كامل،
                    وتظل صحيفة بيضاء. لدينا كتاب سيرد عدد لدينا كتاب سيرد عدد
                    لدينا كتاب سيرد عدد لدينا كتاب... ولكنها تعطي الحياة إلى
                    النص أنها تمثل ميزة مفيدة لدينا كتاب سيرد عدد كتاب سيرد
                    البيانات تحمي الحياة في البناء لدينا كتاب سيرد عدد كتاب سيرد
                    البيانات
                  </p>
                </div>
              </div>
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors">
                عرض المزيد
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
