import React from "react";
import Image from "next/image";
import { Article } from "./Blogs";

export default function BlogCard({ article }: { article: Article }) {
  return (
    <div key={article.id} className="w-[302px] h-[444px]  relative">
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        {/* Image with overlay */}
        <Image
          className="w-full h-full object-cover"
          width={302}
          height={444}
          src={article.image}
          alt={article.title}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Article details overlay */}
        <div className="absolute bottom-0 p-4 w-full text-white bg-gradient-to-t from-black to-transparent">
          {/* Title */}
          <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
          <h3 className="text-sm font-medium">{article.count} مزود خدمة</h3>
        </div>
      </div>
    </div>
  );
}
