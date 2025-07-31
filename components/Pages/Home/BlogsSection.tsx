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

const BlogsSection = () => {
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
    <section className="lg:min-h-[650px]">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-10 lg:py-[120px]">
        {/* Section Header */}
        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="w-6 h-[5px] rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
            <h2 className="text-[color:var(--Text-Color,#221F20)] text-2xl sm:text-3xl font-bold">
              اشهر المقالات
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              اكتشف أشهر المقالات على عالم زفاف، من نصائح تنسيق الزفاف وأحدث
              صيحات الموضة إلى أفكار إبداعية لضمان يوم زفاف لا يُنسى.{" "}
            </p>
            <a
              href="/blogs"
              className="text-[#AF074E] hover:text-[#8a063d] underline transition-colors text-sm font-medium"
            >
              عرض الكل
            </a>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 place-items-center">
          {articles?.map((article: Article, index: number) => (
            <BlogCard key={index} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
