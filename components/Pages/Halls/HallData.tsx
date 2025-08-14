import React from "react";
import { Heart, Share2Icon, Star } from "lucide-react";
import TabsSections from "./TabsSections";
import { IHall } from "@/types/hall";

export default function HallData({ hallDetails }: { hallDetails: IHall }) {
  return (
    <div className="my-10">
      <div className="flex flex-col md:flex-row justify-between items-start my-8 gap-4">
        {/* Left section - Hall details */}
        <div className="flex flex-col justify-between items-start w-full md:w-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {hallDetails.name}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 my-3 font-medium w-full">
            <div className="flex items-center gap-6 flex-wrap">
              <div>
                <span>{hallDetails.capacities.overall.range}</span>
              </div>
              <div className="flex items-center gap-1 text-[#990645]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-[#6D0431]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
                </svg>
                <span>{hallDetails.location.address}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-green-500" />
                <span className="text-green-600 font-semibold">
                  {hallDetails.stars ?? 4.5}
                </span>
              </div>
            </div>
          </div>

          <div className="text-[#990645] font-bold text-xl md:text-2xl mt-2">
            {hallDetails.price ?? 100} ر.س
          </div>
        </div>

        {/* Right section - Share icons */}
        <div className="flex justify-start md:justify-end gap-3 w-full md:w-auto">
          <div className="w-fit p-2 rounded-full shadow hover:bg-gray-100 transition-colors cursor-pointer">
            <Share2Icon color="gray" className="w-5 h-5" />
          </div>
          <div className="w-fit p-2 rounded-full shadow hover:bg-gray-100 transition-colors cursor-pointer">
            <Heart color="gray" className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Tabs Description */}
      <TabsSections hallDetails={hallDetails} />
    </div>
  );
}
