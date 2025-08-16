import Image from "next/image";
import React from "react";
import { IProvider } from "./BestProviders";

export default function ProviderCard({ provider }: { provider: IProvider }) {
  return (
    <div className="h-full flex flex-col group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      {/* Image Container - Fixed aspect ratio */}
      <div className="relative aspect-[4/3] flex-shrink-0">
        <Image
          src={provider.image}
          alt={provider.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-2 left-2">
          <span className="bg-white text-[#DB0962] px-2 py-1 rounded-full text-xs font-medium">
            {provider.category}
          </span>
        </div>
      </div>

      {/* Content - Flexible height */}
      <div className="flex flex-col p-3 flex-grow">
        <h3 className="text-base font-bold text-gray-800 line-clamp-1">
          {provider.title}
        </h3>
        <p className="text-gray-600 text-xs flex items-center mt-1">
          <svg
            className="w-3 h-3 mr-1 text-[#DB0962]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          {provider.location}
        </p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30">
        <span className="bg-white text-[#DB0962] px-4 py-1.5 rounded-full font-medium hover:bg-[#DB0962] hover:text-white transition-colors text-sm">
          عرض التفاصيل
        </span>
      </div>
    </div>
  );
}
