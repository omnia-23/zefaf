import { Dropdown } from "@/components/shared/Dropdown";
import { useCategories } from "@/hooks/useCategories";
import React, { useState } from "react";

export default function SideBarFilters({
  onFilterChange,
  selectedFilters,
}: {
  selectedFilters: {
    eventType: string;
  };
  onFilterChange: (
    newFilters: Partial<{
      eventType: string;
    }>
  ) => void;
}) {
  const [localFilters, setLocalFilters] = useState(selectedFilters);

  const { categories } = useCategories();

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
          options={categories.map((category) => ({
            label: category.title,
            value: category.slug,
          }))}
          value={localFilters.eventType}
          onChange={handleDropdownChange("eventType")}
          placeholder="اختر نوع الخدمة"
        />

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
