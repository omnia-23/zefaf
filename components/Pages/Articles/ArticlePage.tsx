"use client";
import { useState } from "react";
import HeaderSection from "@/components/Pages/Halls/HeaderSection";
import SideBarFilters from "@/components/Pages/Articles/SideBarFilters";

export default function ArticlesPage({
  params,
}: {
  params: { categorySlug: string };
}) {
  const categorySlug = decodeURIComponent(params.categorySlug);
  console.log({ categorySlug });

  const [selectedFilters, setSelectedFilters] = useState({
    eventType: categorySlug,
  });

  const [selectedKey, setSelectedKey] = useState("1");

  // const {
  //   halls,
  //   totalHalls,
  //   error,
  //   isLoadingInitialData,
  //   isLoadingMore,
  //   isReachingEnd,
  //   size,
  //   setSize,
  // } = useHalls({
  //   ...selectedFilters,
  //   sort: selectedKey,
  // });

  // const selectedLabel =
  //   sortOptions.find((item) => item.key === selectedKey)?.label ?? "ترتيب";

  const handleFilterChange = (newFilters: Partial<typeof selectedFilters>) => {
    setSelectedFilters((prev) => ({ ...prev, ...newFilters }));
    // Reset to first page when filters change
    // setSize(1);
  };

  // const handleLoadMore = () => {
  //   setSize(size + 1);
  // };

  const blogs = [
    {
      title: "",
      description: "",
      image: "",
    },
  ];
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Header Section */}
      <HeaderSection
        title="اكتشف احدث المقالات و البومات الصور"
        breadcrumbs={[
          { label: "الرئيسية", href: "/" },
          { label: " اكتشف", href: "/المقالات" },
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
            {/* Property Cards */}
            {/* {blogs.map((hall) => (
              <HallCard key={hall.id} hall={hall} />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
