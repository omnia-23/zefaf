import React from "react";
import Image from "next/image";
import menHallIcon from "@/public/images/halls/men-hall.svg";
import dressIcon from "@/public/images/halls/dress.svg";
import foodIcon from "@/public/images/halls/fork-and-spoon.svg";
import drinkIcon from "@/public/images/halls/drink.svg";
import { IHallDetails } from "@/app/(protected)/halls/[id]/page";

export default function HallDetails({
  hallDetails,
}: {
  hallDetails: IHallDetails;
}) {
  return (
    <div className="font-noto text-black px-4 md:px-0">
      {/* description */}
      <p className="font-normal text-[#707070] text-sm md:text-base">
        {hallDetails.description}
      </p>

      {/* hotel capcity */}
      <div className="mt-8 md:mt-14">
        <h3 className="font-bold text-lg mb-5">سعة الفندق</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* men hall */}
          <div className="flex items-center gap-2 md:gap-3 bg-white p-3 rounded-lg">
            <Image
              src={menHallIcon}
              alt="men"
              width={30}
              height={30}
              className="w-6 h-6 md:w-8 md:h-8"
            />
            <div>
              <h4 className="font-semibold text-black text-sm md:text-base">
                قاعة الرجال
              </h4>
              <p className="font-medium text-xs md:text-sm text-[#707070]">
                {hallDetails.capacity}
              </p>
            </div>
          </div>

          {/* women */}
          <div className="flex items-center gap-2 md:gap-3 bg-white p-3 rounded-lg">
            <Image
              src={dressIcon}
              alt="women"
              width={30}
              height={30}
              className="w-6 h-6 md:w-8 md:h-8"
            />
            <div>
              <h4 className="font-semibold text-black text-sm md:text-base">
                قاعة السيدات
              </h4>
              <p className="font-medium text-xs md:text-sm text-[#707070]">
                {hallDetails.capacity}
              </p>
            </div>
          </div>

          {/* food */}
          <div className="flex items-center gap-2 md:gap-3 bg-white p-3 rounded-lg">
            <Image
              src={foodIcon}
              alt="food"
              width={30}
              height={30}
              className="w-6 h-6 md:w-8 md:h-8"
            />
            <div>
              <h4 className="font-semibold text-black text-sm md:text-base">
                الطعام
              </h4>
              <p className="font-medium text-xs md:text-sm text-[#707070]">
                1500-3000 وجبة
              </p>
            </div>
          </div>

          {/* drinks */}
          <div className="flex items-center gap-2 md:gap-3 bg-white p-3 rounded-lg">
            <Image
              src={drinkIcon}
              alt="drink"
              width={25}
              height={25}
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <div>
              <h4 className="font-semibold text-black text-sm md:text-base">
                المشروبات
              </h4>
              <p className="font-medium text-xs md:text-sm text-[#707070]">
                1500-3000 مشروب
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* service info */}
      <div className="flex flex-col gap-3 mt-14">
        <h4 className="font-bold text-lg mb-5">تفاصيل الخدمة</h4>

        <div className="w-full rounded-md overflow-hidden">
          {/* Table Rows */}
          <div className="grid md:grid-cols-2 justify-items-center-safe">
            {[...Array(Math.ceil(hallDetails.features.length / 2))].map(
              (_, colIndex) => (
                <div key={colIndex}>
                  {hallDetails.features
                    .slice(colIndex * 2, colIndex * 2 + 2)
                    .map((item, index) => (
                      <div
                        key={item.id}
                        className={`grid justify-items-center md:justify-items-start grid-cols-2 gap-x-6 p-3 ${
                          (colIndex * 2 + index) % 2 === 0
                            ? "bg-pink-50"
                            : "bg-white"
                        }`}
                      >
                        <div className="font-semibold text-sm w-fit">
                          {item.label}
                        </div>
                        <div className="font-medium text-sm text-center text-[#707070] w-fit">
                          {item.value}
                        </div>
                      </div>
                    ))}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
