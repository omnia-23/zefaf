"use client";
import { useState } from "react";
import { MapPinIcon } from "lucide-react";
import HeaderSection from "@/components/Pages/Halls/HeaderSection";
import SideBarFilters from "@/components/Pages/Halls/SideBarFilters";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import HallCard from "@/components/Pages/Halls/HallCard";
import { useHalls } from "@/hooks/useHalls";

export default function Page({ params }: { params: { categorySlug: string } }) {
  const categorySlug = decodeURIComponent(params.categorySlug);

  console.log({ categorySlug });
  const [selectedFilters, setSelectedFilters] = useState({
    eventType: categorySlug,
    country: "",
    city: "",
    hasOffer: false,
    minPrice: 0,
    maxPrice: 0,
    minCapacity: 0,
    maxCapacity: 0,
  });

  const [selectedKey, setSelectedKey] = useState("1");

  const {
    halls,
    totalHalls,
    error,
    isLoadingInitialData,
    isLoadingMore,
    isReachingEnd,
    size,
    setSize,
  } = useHalls({
    ...selectedFilters,
    sort: selectedKey,
  });

  const sortOptions = [
    { key: "1", label: "الأحدث" },
    { key: "2", label: "الأقدم" },
    { key: "3", label: "الأعلى سعراً" },
    { key: "4", label: "الأقل سعراً" },
  ];

  const selectedLabel =
    sortOptions.find((item) => item.key === selectedKey)?.label ?? "ترتيب";

  const handleFilterChange = (newFilters: Partial<typeof selectedFilters>) => {
    setSelectedFilters((prev) => ({ ...prev, ...newFilters }));
    // Reset to first page when filters change
    setSize(1);
  };

  const handleLoadMore = () => {
    setSize(size + 1);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Header Section */}
      <HeaderSection
        title="قصور الأفراح"
        description="لوريم إيبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل..."
        breadcrumbs={[
          { label: "الرئيسية", href: "/" },
          { label: "قصور الأفراح", href: "/halls" },
        ]}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <SideBarFilters
            onFilterChange={handleFilterChange}
            selectedFilters={selectedFilters}
            // onSearch={handleSearch} // Pass the search handler
          />

          {/* Rest of your component remains the same */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Dropdown
                  menu={{
                    items: sortOptions,
                    selectable: true,
                    selectedKeys: [selectedKey],
                    onSelect: ({ key }) => {
                      setSelectedKey(key);
                      setSize(1);
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
                <span>{totalHalls} منتج متاح</span>
              </div>
            </div>

            {/* Section Title */}
            <div className="mb-6">
              <div className="flex items-center my-3 sm:my-5 gap-2 sm:gap-4">
                <span className="w-4 sm:w-6 h-[4px] sm:h-[5px] rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
                <h2 className="text-xl">افضل قاعات الزفاف</h2>
              </div>
            </div>

            {/* Loading and Error States */}
            {isLoadingInitialData && (
              <div className="text-center py-10">جاري التحميل...</div>
            )}

            {error && (
              <div className="text-center text-red-500 py-10">
                فشل في تحميل البيانات. يرجى المحاولة مرة أخرى لاحقًا.
              </div>
            )}

            {/* Empty State */}
            {!isLoadingInitialData && halls.length === 0 && !error && (
              <div className="text-center py-10">
                لا توجد نتائج مطابقة للبحث
              </div>
            )}

            {/* Property Cards */}
            {!error && (
              <>
                {halls.map((hall) => (
                  <HallCard key={hall.id} hall={hall} />
                ))}

                {/* Load More */}
                {!isReachingEnd && (
                  <div className="text-center mt-8">
                    <button
                      onClick={handleLoadMore}
                      disabled={isLoadingMore}
                      className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
                    >
                      {isLoadingMore ? "جاري التحميل..." : "عرض المزيد"}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
