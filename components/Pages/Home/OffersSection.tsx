"use client";
import React from "react";
import useSWR from "swr";
import { RenderHTML } from "@/components/shared";

const OffersSection = () => {
  const offers = [
    {
      id: 1,
      image: "/frontend/images/Frame 18 (1).svg",
      title: "Offer Title",
      description: "Offer description goes here.",
      price: "1000 SAR",
    },
    {
      id: 2,
      image: "/frontend/images/Frame 18 (1).svg",
      title: "Offer Title",
      description: "Offer description goes here.",
      price: "1000 SAR",
    },
  ];

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR(
    "https://zafaf.sa/public/api/halls/keywords",
    fetcher
  );

  console.log(data);

  return (
    <section className="mx-auto py-10 lg:py-[120px] bg-[#FDF3F7] text-black">
      <div className="w-full h-full container px-4 lg:px-8 mx-auto flex flex-col items-start self-stretch gap-20">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="w-6 h-[5px] rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
            <p className="text-[color:var(--Text-Color,#221F20)] text-2xl font-bold leading-[normal]">
              افضل العروض
            </p>
          </div>
          <p className="text-[#555] text-right text-base font-normal leading-[normal]">
            مع عالم زفاف، استمتع بأفضل العروض والتخفيضات على قاعات الزفاف
            والخدمات المميزة، لضمان إتمام حفل أحلامك بأفضل سعر وجودة!{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-full w-full">
          {data?.map((hotel) => (
            <a
              href={`/hotels/${hotel.id}`}
              key={hotel.id}
              className="bg-white flex-wrap lg:flex-nowrap shadow-lg gap-4 rounded-lg overflow-hidden max-w-3xl w-full p-4 flex items-start space-x-4"
            >
              {/* Image Section */}
              <div className="relative w-full lg:w-1/3">
                <img
                  src={hotel.images[0].path}
                  alt={hotel.name_ar}
                  className="w-full  object-cover h-[200px] rounded-lg"
                />
                <button className="absolute top-2 right-2 bg-white text-gray-500 rounded-full p-1 shadow">
                  ❤️
                </button>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-2/3 flex flex-col gap-6">
                {/* Title and Location */}
                <div className="flex justify-between items-start flex-col gap-[20px]">
                  <h3 className="text-xl font-bold">{hotel.name_ar}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-[#6D0431]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
                    </svg>
                    <span className="text-[#6D0431] mx-1">{hotel.address}</span>
                    {/* <svg
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
                                    </span> */}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-500">
                  <RenderHTML
                    htmlContent={hotel.description_ar}
                    renderInTable={true}
                  />
                </p>

                <div className="flex w-full justify-between items-center">
                  <p className="text-[#6D0431] font-semibold text-lg">
                    {hotel.size}
                  </p>
                  <p>{hotel.price}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
