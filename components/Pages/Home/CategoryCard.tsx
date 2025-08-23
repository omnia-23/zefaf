import { ICategory } from "@/types/category";
import Image from "next/image";

export const CategoryCard = ({ category }: { category: ICategory }) => {
  return (
    <div className="relative w-full rounded-lg overflow-hidden group aspect-[4/3]">
      <Image
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        width={320}
        height={240}
        src={category.images[0] ?? "/images/hotels.png"}
        alt={category.title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-4 right-4 flex flex-col gap-1 text-white text-right">
        <p className="text-lg font-bold">{category.title}</p>
        <p className="text-xs md:text-sm">
          {category.service_provider_count} مزود خدمة
        </p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button className="bg-white text-[#DB0962] px-4 py-1.5 rounded-full font-medium hover:bg-[#DB0962] hover:text-white transition-colors text-sm">
          عرض المزودين
        </button>
      </div>
    </div>
  );
};
