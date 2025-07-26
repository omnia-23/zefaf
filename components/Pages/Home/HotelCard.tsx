import Image from "next/image";
import React from "react";
import { Hotel } from "./Hotels";
import HeartIcon from "@/public/images/heart.svg";
import { RenderHTML } from "@/components/shared";

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div>
      <a
        href={`/hotels/${hotel.id}`}
        key={hotel.id}
        className="bg-white flex-wrap lg:flex-nowrap gap-4 rounded-lg overflow-hidden max-w-[681px] h-[247px] w-full p-4 flex items-start space-x-4 border-2"
      >
        {/* Image Section */}
        <div className="relative w-full lg:w-[193px]">
          <Image
            height={200}
            width={193}
            src={hotel.image}
            alt={hotel.name}
            className="w-[193px] object-cover h-[200px] rounded-lg"
          />
          <button className="absolute top-2 right-2 bg-white text-gray-500 rounded-full p-1 shadow">
            <Image src={HeartIcon} alt="heart" width={16} height={16} />
          </button>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          {/* Title and Location */}
          <div className="flex justify-between items-start flex-col gap-[20px]">
            {/* title */}
            <div className="flex items-start justify-between w-full">
              <h3 className="text-lg font-bold">
                <RenderHTML
                  length={20}
                  htmlContent={hotel.name}
                  renderInTable={true}
                />
              </h3>
              <h5 className="text-[#990645] font-bold text-lg">
                {hotel.priceRange}
              </h5>
            </div>

            {/* location section */}
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
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
              <div className="text-sm">{hotel.capacity}</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm">
            <RenderHTML htmlContent={hotel.description} renderInTable={true} />
          </p>

          {/* <div className="flex w-full justify-between items-center">
            <p className="text-[#6D0431] font-semibold text-lg">{hotel.size}</p>
            <p>{hotel.price}</p>
          </div> */}
        </div>
      </a>
    </div>
  );
}
