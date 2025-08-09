"use client";
// pages/index.js
import Head from "next/head";
import { useState } from "react";
import { ChevronDown, Heart, MapPinIcon, Star } from "lucide-react";
import HeaderSection from "@/components/Pages/Halls/HeaderSection";
import SideBarFilters from "@/components/Pages/Halls/SideBarFilters";
import {
  AppstoreOutlined,
  DownOutlined,
  MailOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Menu, Space, Typography } from "antd";
import Image from "next/image";
import HallCard from "@/components/Pages/Halls/HallCard";

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

  const sortOptions = [
    // { key: "default", label: "ترتيب", disabled: true },
    { key: "1", label: "الأحدث" },
    { key: "2", label: "الأقدم" },
    { key: "3", label: "الأعلى سعراً" },
    { key: "4", label: "الأقل سعراً" },
  ];

  const [selectedKey, setSelectedKey] = useState("default");

  const selectedLabel =
    sortOptions.find((item) => item.key === selectedKey)?.label ?? "ترتيب";

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Head>
        <title>قصور الأفراح - العقارات</title>
        <meta name="description" content="أفضل قصور الأفراح والعقارات" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <HeaderSection
        title="قصور الأفراح"
        description="لوريم إيبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل..."
        breadcrumbs={[
          { label: "الرئيسية", href: "/" },
          { label: "قصور الأفراح", href: "/halls" }, // Active (last) item will be pink
        ]}
      />

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
                <Dropdown
                  menu={{
                    items: sortOptions,
                    selectable: true,
                    selectedKeys:
                      selectedKey !== "default" ? [selectedKey] : [],
                    onSelect: ({ key }) => {
                      if (key !== "default") {
                        setSelectedKey(key);
                      }
                    },
                  }}
                  placement="bottomLeft"
                >
                  <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-black hover:bg-gray-50 transition-all flex items-center gap-1">
                    {selectedLabel}
                    <DownOutlined className="text-xs" />
                  </button>
                </Dropdown>

                <button className="text-sm flex items-center border border-gray-300 rounded-md px-2 py-1 font-medium">
                  <MapPinIcon className="w-4 h-4 mx-1" />
                  خريطة
                </button>
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
            <HallCard />

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
