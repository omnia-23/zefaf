import { ChevronDown } from "lucide-react";
import React from "react";

export default function SideBarFilters({
  onFilterChange,
  selectedFilters,
}: {
  selectedFilters: {
    bedrooms: string;
    city: string;
    area: string;
  };
  onFilterChange: (
    newFilters: Partial<{
      bedrooms: string;
      city: string;
      area: string;
    }>
  ) => void;
}) {
  return (
    <div className="lg:w-1/4">
      <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
        <h3 className="text-lg font-semibold mb-6 text-gray-800">
          قاعات الزفاف
        </h3>

        {/* Bedrooms Filter */}
        <div className="mb-6">
          <button
            // onClick={() => toggleFilter("bedrooms")}
            className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className="text-gray-700">قصور الأفراح</span>
            <ChevronDown
              //  ${isFilterOpen.bedrooms ? "rotate-180" : ""}
              className={`w-4 h-4 text-gray-500 transition-transform
              `}
            />
          </button>
          {/* {isFilterOpen.bedrooms && (
            <div className="mt-2 space-y-2 pr-4">
              {["جميع الغرف", "1 غرفة", "2 غرفة", "3+ غرف"].map((option) => (
                <label key={option} className="flex items-center">
                  <input type="checkbox" className="ml-2" />
                  <span className="text-sm text-gray-600">{option}</span>
                </label>
              ))}
            </div>
          )} */}
        </div>

        {/* City Filter */}
        <div className="mb-6">
          <button
            // onClick={() => toggleFilter("city")}
            className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className="text-gray-700">المدينة</span>
            <ChevronDown
              //  ${isFilterOpen.city ? "rotate-180" : ""}
              className={`w-4 h-4 text-gray-500 transition-transform
                 `}
            />
          </button>
          {/* {isFilterOpen.city && (
            <div className="mt-2 space-y-2 pr-4">
              {["الرياض", "جدة", "الدمام", "مكة"].map((city) => (
                <label key={city} className="flex items-center">
                  <input type="checkbox" className="ml-2" />
                  <span className="text-sm text-gray-600">{city}</span>
                </label>
              ))}
            </div>
          )} */}
        </div>

        {/* Area Filter */}
        <div className="mb-6">
          <button
            // onClick={() => toggleFilter("area")}
            className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className="text-gray-700">المنطقة</span>
            <ChevronDown
              //  ${isFilterOpen.area ? "rotate-180" : ""}
              className={`w-4 h-4 text-gray-500 transition-colors
              `}
            />
          </button>
          {/* {isFilterOpen.area && (
            <div className="mt-2 space-y-2 pr-4">
              {["الشمال", "الجنوب", "الشرق", "الغرب"].map((area) => (
                <label key={area} className="flex items-center">
                  <input type="checkbox" className="ml-2" />
                  <span className="text-sm text-gray-600">{area}</span>
                </label>
              ))}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
