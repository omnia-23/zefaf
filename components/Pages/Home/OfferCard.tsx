import React from "react";
import { Offer } from "./OffersSection";
import Image from "next/image";

export default function OfferCard({ offer }: { offer: Offer }) {
  return (
    <a
      href={`/offer/${offer.id}`}
      key={offer.id}
      className="bg-white flex flex-col lg:flex-row gap-4 rounded-lg overflow-hidden w-full max-w-[681px] h-auto p-4 border-2"
    >
      {/* Image Section */}
      <div className="relative w-full lg:w-[180px] h-[200px]">
        <Image
          src={offer.image}
          alt={offer.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between gap-3">
        <div className="flex justify-between items-start flex-wrap gap-y-1">
          <h3 className="text-base sm:text-lg font-bold">{offer.title}</h3>
          <h5 className="text-base text-[#990645] font-bold">{offer.price}</h5>
        </div>

        <p className="text-sm text-[#990645] font-medium">{offer.hotel_name}</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-gray-700">
          {offer.options.map((option, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[#707070] ml-2">•</span>
              <span>{option}</span>
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
