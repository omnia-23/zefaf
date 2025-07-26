import React from "react";
import { RenderHTML } from "@/components/shared";
import { Offer } from "./OffersSection";
import Image from "next/image";

export default function OfferCard({ offer }: { offer: Offer }) {
  return (
    <div>
      <a
        href={`/offer/${offer.id}`}
        key={offer.id}
        className="bg-white flex-wrap lg:flex-nowrap gap-4 rounded-lg overflow-hidden max-w-[681px] h-[247px] p-4 flex items-start space-x-4 border-2"
      >
        {/* Image Section */}
        <div className="relative w-full lg:w-[193px]">
          <Image
            height={200}
            width={193}
            src={offer.image}
            alt={offer.title}
            className="w-[193px] object-cover h-[200px] rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-2/3 flex flex-col gap-3">
          <div className="w-full flex justify-between items-start">
            <h3 className="text-xl font-bold">{offer.title}</h3>
            <h5 className="text-lg text-[#990645] font-bold">{offer.price}</h5>
          </div>

          <p className="text-sm text-[#990645] font-medium">
            {offer.hotel_name}
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-gray-700">
            {offer.options.map((option, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#707070] ml-2">•</span>
                <span className="text-sm">{option}</span>
              </li>
            ))}
          </ul>
        </div>
      </a>
    </div>
  );
}
