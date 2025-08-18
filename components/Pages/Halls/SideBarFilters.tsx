import { Dropdown } from "@/components/shared/Dropdown";
import { useCities } from "@/hooks/useCities";
import { useCountry } from "@/hooks/useCountry";
import React, { useState } from "react";

export default function SideBarFilters({
  onFilterChange,
  selectedFilters,
}: {
  selectedFilters: {
    hasOffer: boolean;
    eventType: string;
    city: string;
    country: string;
    minPrice: number;
    maxPrice: number;
    minCapacity: number;
    maxCapacity: number;
  };
  onFilterChange: (
    newFilters: Partial<{
      eventType: string;
      city: string;
      country: string;
      hasOffer: boolean;
      minPrice: number;
      maxPrice: number;
      minCapacity: number;
      maxCapacity: number;
    }>
  ) => void;
}) {
  const [localFilters, setLocalFilters] = useState(selectedFilters);

  const eventTypes = [
    { label: "قصور الأفراح", value: "halls" },
    { label: "قصور زفاف", value: "wedding palaces" },
  ];

  const { countries } = useCountry();
  const { cities } = useCities(Number(localFilters.country));

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({ ...prev, [name]: Number(value) || 0 }));
  };

  const handleDropdownChange = (field: string) => (value: string) => {
    setLocalFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalFilters((prev) => ({ ...prev, hasOffer: e.target.checked }));
  };

  const handleSearch = () => {
    onFilterChange(localFilters);
  };

  return (
    <div className="lg:w-1/4">
      <div className="bg-white rounded-lg shadow-sm p-6 space-y-6 sticky top-4">
        {/* Event Type Filter */}
        <Dropdown
          options={eventTypes}
          value={localFilters.eventType}
          onChange={handleDropdownChange("eventType")}
          placeholder="اختر نوع المناسبة"
        />

        {/* Country Filter */}
        <Dropdown
          options={countries.map((country) => ({
            label: country.name,
            value: country.id.toString(),
          }))}
          value={localFilters.country}
          onChange={handleDropdownChange("country")}
          placeholder="اختر البلد"
        />

        {/* City Filter */}
        <Dropdown
          options={cities.map((city) => ({
            label: city.name,
            value: city.id.toString(),
          }))}
          value={localFilters.city}
          onChange={handleDropdownChange("city")}
          placeholder="اختر المنطقة"
        />

        {/* Price Range Filter */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">نطاق السعر</h4>
          <div className="flex gap-2">
            <input
              type="number"
              name="minPrice"
              value={localFilters.minPrice}
              onChange={handleRangeChange}
              placeholder="الحد الأدنى"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
            <input
              type="number"
              name="maxPrice"
              value={localFilters.maxPrice}
              onChange={handleRangeChange}
              placeholder="الحد الأقصى"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>

        {/* Capacity Range Filter */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">سعة القاعة</h4>
          <div className="flex gap-2">
            <input
              type="number"
              name="minCapacity"
              value={localFilters.minCapacity}
              onChange={handleRangeChange}
              placeholder="الحد الأدنى"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
            <input
              type="number"
              name="maxCapacity"
              value={localFilters.maxCapacity}
              onChange={handleRangeChange}
              placeholder="الحد الأقصى"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>

        {/* Offers Filter */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-medium text-gray-700">
            عروض وخصومات
          </span>
          <div className="relative inline-block w-11 h-5">
            <input
              id="has-offer-toggle"
              type="checkbox"
              checked={localFilters.hasOffer}
              onChange={handleToggleChange}
              className="peer appearance-none w-11 h-5 bg-gray-50 border border-gray-300 rounded-full checked:bg-pink-600 cursor-pointer transition-colors duration-300"
            />
            <label
              htmlFor="has-offer-toggle"
              className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-pink-600 cursor-pointer"
            ></label>
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="w-full bg-[#DB0962] text-white py-2 px-4 rounded-lg hover:bg-[#B80852] transition-colors"
        >
          بحث
        </button>
      </div>
    </div>
  );
}
