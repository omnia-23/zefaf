import React from "react";

export default function OfferCard({
  offer,
}: {
  offer: {
    title: string;
    description: string;
    starts_at: string; // ISO date string
    ends_at: string; // ISO date string
  };
}) {
  return (
    <div className="bg-white flex flex-col lg:flex-row gap-5 rounded-lg overflow-hidden w-full p-5 border-2">
      {/* Image Section */}
      {/* <div className="relative w-full lg:w-[180px] h-[200px]">
        <Image
          src={offer.image}
          alt={offer.title}
          fill
          className="object-cover rounded-lg"
        />
      </div> */}

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between gap-3">
        <div className="flex justify-between items-start flex-wrap gap-y-1">
          <h3 className="text-base md:text-lg font-bold text-black">
            {offer.title}
          </h3>
          <h5 className="text-base text-[#990645] font-bold">
            العرض ساري حتى {offer.ends_at}
          </h5>
        </div>

        <p className="text-base text-[#221F20] font-medium">
          {offer.description}
        </p>

        {/* <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm font-medium text-[#707070]">
          {offer.options.map((option: string, index: number) => (
            <li key={index} className="flex items-start">
              <span className="font-medium ml-2">•</span>
              <span>{option}</span>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
