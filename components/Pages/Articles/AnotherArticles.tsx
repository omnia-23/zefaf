import React from "react";
import ArticleCard from "./ArticleCard";
import { IArticle } from "@/types/article";

const articles: IArticle[] = [
  {
    id: 1,
    status: "active",
    title: "لوريوم ابيسوم",
    desc: "لوريم إيبسوم هو ببساطة نص وهمي صناعة الطباعة والتنضيد. لقد كان لوريم",
    image: "/images/Frame 18 (1).svg",
    slug: "slug-1",
  },
  {
    id: 2,
    status: "active",
    title: "مقال تجريبي",
    desc: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.",
    image: "/images/Frame 18 (1).svg",
    slug: "slug-2",
  },
  {
    id: 3,
    status: "active",
    title: "تجربة تصميم",
    desc: "منذ القرن الخامس عشر، عندما قامت مطبعة مجهولة برص مجموعة من الأحرف.",
    image: "/images/Frame 18 (1).svg",
    slug: "slug-3",
  },
];

export default function AnotherArticles() {
  return (
    <div className="w-full my-10">
      <h2 className="text-2xl font-bold mb-4">مقالات أخرى</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
