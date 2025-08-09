"use client";
import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

// Define types for items
interface SelectOption {
  label: string;
  value: string;
}

const cities: SelectOption[] = [
  { label: "الرياض", value: "riyadh" },
  { label: "جدة", value: "jeddah" },
  { label: "مكة", value: "mecca" },
  { label: "المدينة", value: "medina" },
  { label: "الدمام", value: "dammam" },
  { label: "الخبر", value: "khobar" },
];

const categories: SelectOption[] = [
  { label: "فنادق", value: "hotels" },
  { label: "قصور أفراح", value: "palaces" },
  { label: "قاعات احتفالات", value: "halls" },
  { label: "حدائق ومساحات خارجية", value: "outdoor" },
];

const HomeSearchTabs = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("search");

  const getLabel = (
    list: SelectOption[],
    value: string,
    placeholder: string
  ): string => {
    return list.find((item) => item.value === value)?.label || placeholder;
  };

  const handleSearch = (): void => {
    if (!selectedCategory || !selectedCity) return;

    const query = new URLSearchParams({
      // category: selectedCategory,
      search: selectedCity,
    }).toString();

    switch (selectedCategory) {
      case "hotels":
        router.push(`/hotels?${query}`);
        break;
      case "palaces":
        router.push(`/palaces?${query}`);
        break;
      case "halls":
        router.push(`/halls?${query}`);
        break;
      case "outdoor":
        router.push(`/outdoor?${query}`);
        break;
      default:
        router.push(`/search?${query}`);
    }
  };

  const data = [
    {
      label: "إبحث الأن",
      value: "search",
      body: (
        <div className="bg-[#FFFFFF1F] backdrop-blur-md rounded-md p-7 flex flex-col md:flex-row md:items-end md:justify-between gap-4 w-full">
          {/* Category Dropdown */}
          <div className="w-full md:w-1/3">
            <h3 className="text-[#CFCFCF] text-lg mb-1 text-right" dir="rtl">
              ما الذي تبحث عنه؟
            </h3>
            <Menu placement="bottom-start">
              <MenuHandler>
                <Button
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                  ripple={false}
                  fullWidth
                  className={`flex justify-between items-center bg-transparent py-2 px-0 rounded-lg text-right ${
                    selectedCategory ? "text-white" : "text-[#888888]"
                  }`}
                >
                  <span className="flex-1 text-right" dir="rtl">
                    {getLabel(
                      categories,
                      selectedCategory,
                      "فنادق، قصور أفراح......"
                    )}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </Button>
              </MenuHandler>
              <MenuList
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                className="text-right text-white bg-black/80 border-0 rounded-md"
                dir="rtl"
              >
                {categories.map((category) => (
                  <MenuItem
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`text-sm ${
                      selectedCategory === category.value
                        ? "text-pink-500 font-bold"
                        : ""
                    }`}
                  >
                    {category.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </div>

          {/* City Dropdown */}
          <div className="w-full md:w-1/3 md:border-r md:pr-6">
            <h3 className="text-[#CFCFCF] text-lg mb-1 text-right" dir="rtl">
              المدينة
            </h3>
            <Menu placement="bottom-start">
              <MenuHandler>
                <Button
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                  ripple={false}
                  fullWidth
                  className={`flex justify-between items-center bg-transparent py-2 px-0 rounded-lg text-right ${
                    selectedCity ? "text-white" : "text-[#888888]"
                  }`}
                >
                  <span className="flex-1 text-right" dir="rtl">
                    {getLabel(cities, selectedCity, "الرياض، جدة، مكة......")}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </Button>
              </MenuHandler>
              <MenuList
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                className="text-right text-white bg-black/80 border-0 rounded-md"
                dir="rtl"
              >
                {cities.map((city) => (
                  <MenuItem
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                    key={city.value}
                    onClick={() => setSelectedCity(city.value)}
                    className={`text-sm ${
                      selectedCity === city.value
                        ? "text-pink-500 font-bold"
                        : ""
                    }`}
                  >
                    {city.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </div>

          {/* Search button */}
          <div className="w-full md:w-auto flex justify-end mt-2 md:mt-0">
            <button
              onClick={handleSearch}
              disabled={!selectedCategory || !selectedCity}
              className="w-full md:w-auto bg-pink-600 hover:bg-pink-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      ),
    },
    {
      label: "خطط لزفافك",
      value: "plan",
      body: (
        <p className="text-white text-right">... محتوى التخطيط للزفاف ...</p>
      ),
    },
  ];

  return (
    <div className="px-4 md:px-8 max-w-screen-md ml-auto w-full">
      <Tabs value={activeTab} onChange={setActiveTab} id="custom-animation">
        <TabsHeader
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          className="w-fit rounded-none bg-black/20 p-0"
          indicatorProps={{
            className:
              "bg-[#FFFFFF1F] border-b-2 border-white shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`transition-colors min-w-fit duration-200 px-4 py-2 text-sm md:text-base ${
                activeTab === value
                  ? "text-white font-semibold"
                  : "text-gray-400"
              }`}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          className="w-full"
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, body }) => (
            <TabPanel key={value} value={value} className="p-0 pt-4">
              {body}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default HomeSearchTabs;
