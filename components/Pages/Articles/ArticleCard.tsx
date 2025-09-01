import { Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { RenderHTML } from "@/components/shared";
import { IArticle } from "@/types/article";

export default function ArticleCard({ article }: { article: IArticle }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/${article.slug}`)}
      className="group cursor-pointer bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 max-w-[954px] w-full overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative w-full md:w-full h-36 md:h-40 overflow-hidden">
        <Image
          src={article.image}
          alt={article.slug}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-medium text-gray-900">
          {article.title}
        </h3>

        {/* Description */}
        <RenderHTML
          maxLines={2}
          seeMore={false}
          className="text-gray-600 text-sm leading-relaxed"
          htmlContent={article.description}
        />
      </div>
    </div>
  );
}
