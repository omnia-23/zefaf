"use client";
import React from "react";
import useSWR from "swr";
import BlogCard from "./BlogCard";

export interface Article {
  id: number;
  title: string;
  count: number;
  image: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const PopularArticles = () => {
  const articles = [
    {
      id: 1,
      title: "فنادق",
      count: 130,
      image: "/images/hotel.svg",
    },
    {
      id: 2,
      title: "قصور الأفراح",
      count: 130,
      image: "/images/hotel.svg",
    },
    {
      id: 3,
      title: "المطاعم",
      count: 130,
      image: "/images/hotel.svg",
    },
    {
      id: 4,
      title: "الاستراحات",
      count: 130,
      image: "/images/hotel.svg",
    },
  ];

  const { data } = useSWR("https://zafaf.sa/public/api/minBlog", fetcher);

  return (
    <section className="container mx-auto  lg:px-8 flex flex-col items-start gap-20 self-stretch py-[120px] text-black">
      {/* Section Header */}
      <div className="w-full flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <span className="w-6 h-[5px] rounded-lg bg-[#DB0962]"></span>
          <p className="text-[#221F20] text-2xl font-bold leading-normal">
            أشهر المقالات
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
          <div className="flex-1">
            <p className="text-right text-gray-600 text-base font-normal leading-relaxed max-w-[569px]">
              اكتشف أشهر المقالات على عالم زفاف، من نصائح تنسيق الزفاف وأحدث
              صيحات الموضة إلى أفكار إبداعية لضمان يوم زفاف لا يُنسى.{" "}
            </p>
          </div>
          <div className="md:self-end">
            <a
              href="/blogs"
              className="text-[#AF074E] hover:text-[#8a063d] underline transition-colors duration-200 text-sm font-medium"
            >
              عرض الكل
            </a>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
        {articles?.map((article: Article, index: number) => (
          <BlogCard key={index} article={article} />
        ))}
      </div>
    </section>
  );
};

export default PopularArticles;
