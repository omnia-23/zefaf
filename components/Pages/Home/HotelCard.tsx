import Image from "next/image";
import React from "react";
import { Hotel } from "./HotelsSection";
import HeartIcon from "@/public/images/heart.svg";
import { RenderHTML } from "@/components/shared";

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div>
      <a
        href={`/hotels/${hotel.id}`}
        key={hotel.id}
        className="bg-white flex flex-col lg:flex-row gap-4 rounded-lg overflow-hidden w-full max-w-[681px] h-auto p-4 border-2"
      >
        {/* Image Section */}
        <div className="relative w-full lg:w-[193px] flex-shrink-0">
          <Image
            height={200}
            width={193}
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-full object-cover rounded-lg"
          />
          <button className="absolute top-2 right-2 bg-white text-gray-500 rounded-full p-1 shadow">
            <Image src={HeartIcon} alt="heart" width={16} height={16} />
          </button>
        </div>

        {/* Content Section */}
        <div className="w-full flex flex-col gap-2 md:gap-6">
          {/* Title and Location */}
          <div className="flex flex-col gap-3">
            {/* Title  */}
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-base sm:text-lg font-bold">
                {/* <RenderHTML
                  length={20}
                  htmlContent={hotel.name}
                  renderInTable={true}
                /> */}
                {hotel.name}
              </h3>

              {/* Price Range */}
              <h5 className="text-[#990645] font-bold text-base sm:text-lg text-right sm:text-left">
                {hotel.priceRange}
              </h5>
            </div>

            {/* Location + Rating + Capacity */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-sm">
              <div className="flex items-center text-gray-500 flex-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-[#6D0431]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
                </svg>
                <span className="text-[#6D0431] mx-1">{hotel.location}</span>
                <svg
                  className="w-4 h-4 mx-1 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.5l1.92 4.5 4.84.58-3.68 3.18.98 4.74L12 15.4l-4.06 2.1.98-4.74-3.68-3.18 4.84-.58L12 4.5z"
                  />
                </svg>
                <span className="text-green-600 font-semibold">
                  ({hotel.rating})
                </span>
              </div>
              <div className="text-sm text-gray-600">{hotel.capacity}</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm line-clamp-3">
            {hotel.description}
            {/* <RenderHTML htmlContent={hotel.description} renderInTable={true} /> */}
          </p>
        </div>
      </a>
    </div>
  );
}
