import React from "react";
import { Heart, Phone, Share2Icon, Star } from "lucide-react";
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
            {hallDetails.pricing?.range ?? 100}
          </div>
        </div>

        {/* Right section - Share icons */}
        <div className="flex justify-start md:justify-end gap-3 w-full md:w-auto">
          <a
            href={`https://wa.me/${hallDetails.contact.phone}`} // replace with hotel phone number including country code (no + or spaces)
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit p-2 rounded-full shadow hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-green-500"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
            </svg>
          </a>

          <div className="w-fit p-2 rounded-full shadow hover:bg-gray-100 transition-colors cursor-pointer">
            <Share2Icon color="#990645" className="w-5 h-5" />
          </div>
          <div className="w-fit p-2 rounded-full shadow hover:bg-gray-100 transition-colors cursor-pointer">
            <Heart color="#990645" className="w-5 h-5" />
          </div>
          <a
            href={`tel:{hallDetails.contact.phone}`} // replace with hotel number
            className="w-fit p-2 rounded-full shadow hover:bg-gray-100 transition-colors cursor-pointer block"
          >
            <Phone color="#990645" className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Tabs Description */}
      <TabsSections hallDetails={hallDetails} />
    </div>
  );
}
