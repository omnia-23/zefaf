import { Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { IHall } from "@/services/halls";

export default function HallCard({ hall }: { hall: IHall }) {
  // console.log({ hall });
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/halls/${hall.slug}`)}
      className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden mb-6 hover:shadow-lg transition-shadow p-3 max-w-[954px] w-full"
    >
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="w-full md:w-1/3 relative rounded-lg overflow-hidden aspect-[4/3] md:aspect-auto md:h-full">
          <Image
            width={500}
            height={700}
            src={`${hall.images[0].url}`}
            alt={hall.name}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <button className="absolute top-3 right-3 p-1 bg-white rounded-full shadow-md hover:bg-gray-50">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-2 md:gap-6 px-3 py-2">
          {/* Title and Price */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base sm:text-lg font-bold">{hall.name}</h3>
              <h5 className="text-[#990645] font-bold text-base sm:text-lg">
                1000 - 700 ر.س
              </h5>
            </div>

            {/* Location + Rating + Capacity */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-sm">
              <div className="flex items-center text-gray-500 flex-wrap">
                <svg
                  className="w-4 h-4 text-[#6D0431]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
                </svg>
                <span className="text-[#6D0431] mx-1  font-medium">
                  {hall.address}
                </span>

                <svg
                  className="w-4 h-4 mx-1 text-green-500"
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
                <span className="text-green-600 font-semibold">(4.8)</span>
              </div>
              <div className="text-sm text-gray-600">{hall.capacity} شخص</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-base font-normal line-clamp-4">
            {hall.description}
          </p>
        </div>
      </div>
    </div>
  );
}
