"use client";
import { useState } from "react";
import HeaderSection from "@/components/Pages/Halls/HeaderSection";
import SideBarFilters from "@/components/Pages/Articles/SideBarFilters";
import ArticleCard from "./ArticleCard";
import { IArticle } from "@/types/article";

export default function ArticlesPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    eventType: "",
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

  const articles: IArticle[] = [
    {
      id: 1,
      title: "لوريوم ابيسوم",
      description:
        "لوريم إيبسوم هو ببساطة نص وهمي صناعة الطباعة والتنضيد. لقد كان لوريم",
      image: "/images/Frame 18 (1).svg",
      slug: "slug-1",
    },
    {
      id: 2,
      title: "مقال تجريبي",
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.",
      image: "/images/Frame 18 (1).svg",
      slug: "slug-2",
    },
    {
      id: 3,
      title: "تجربة تصميم",
      description:
        "منذ القرن الخامس عشر، عندما قامت مطبعة مجهولة برص مجموعة من الأحرف.",
      image: "/images/Frame 18 (1).svg",
      slug: "slug-3",
    },
    {
      id: 4,
      title: "عنوان مقالة",
      description:
        "لقد كان النص الوهمي المعيار المستخدم في الصناعة منذ ذلك الوقت.",
      image: "/images/Frame 18 (1).svg",
      slug: "slug-4",
    },
    {
      id: 5,
      title: "اختبار مقالة",
      description:
        "لوريم إيبسوم ما زال يستخدم حتى اليوم كنص افتراضي في الطباعة.",
      image: "/images/Frame 18 (1).svg",
      slug: "slug-5",
    },
    {
      id: 6,
      title: "مقالة توضيحية",
      description: "تم استخدامه كنص بديل في النشر الإلكتروني وتصميم المواقع.",
      image: "/images/Frame 18 (1).svg",
      slug: "slug-6",
    },
    {
      id: 7,
      title: "مقال قصير",
      description: "النص الوهمي أداة مهمة للمصممين لتوضيح شكل النصوص.",
      image: "/images/Frame 18 (1).svg",
      slug: "slug-7",
    },
    {
      id: 8,
      title: "آخر مقال",
      description: "يمكن للمصممين التركيز على الشكل العام بدلاً من المحتوى.",
      image: "/images/Frame 18 (1).svg",
      slug: "slug-8",
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
          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Property Cards */}
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
