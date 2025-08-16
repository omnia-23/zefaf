import { ICity } from "@/types/city";
import Image from "next/image";

export const CityCard = ({ city }: { city: ICity }) => {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      {/* City Image */}
      <div className="relative h-64 w-full">
        <Image
          src={
            city.image ||
            "https://zafaf.sa/wp-content/uploads/2024/12/Jeddah.png"
          }
          alt={city.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* City Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-xl font-bold mb-1">{city.name}</h3>
        <p className="text-sm opacity-90">1000 مزودى خدمات</p>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity duration-300">
        <button className="bg-white text-[#DB0962] px-6 py-2 rounded-full font-medium hover:bg-[#DB0962] hover:text-white transition-colors">
          عرض مزودى الخدمات
        </button>
      </div>
    </div>
  );
};
