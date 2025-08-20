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
  Input,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useCities } from "@/hooks/useCities";
import { useCategories } from "@/hooks/useCategories";

// Define types for items
interface SelectOption {
  label: string;
  value: string;
}

const HomeSearchTabs = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("search");
  const [categorySearch, setCategorySearch] = useState("");
  const [citySearch, setCitySearch] = useState("");

  const { cities: citiesList } = useCities(1);
  const { categories } = useCategories();
  const cityOptions: SelectOption[] = citiesList.map((c) => ({
    label: c.name,
    value: c.name, // or maybe slug if you have one
  }));

  const categoriesOptions: SelectOption[] = categories.map((c) => ({
    label: c.title,
    value: c.slug, // or maybe slug if you have one
  }));

  // Filtered options
  const filteredCategories = categoriesOptions.filter((c) =>
    c.label.toLowerCase().includes(categorySearch.toLowerCase())
  );
  const filteredCities = cityOptions.filter((c) =>
    c.label.toLowerCase().includes(citySearch.toLowerCase())
  );

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

  const handleCategoryInputClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleCityInputClick = (e: React.MouseEvent) => {
    e.stopPropagation();
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
            <Menu
              dismiss={{
                itemPress: false,
              }}
              placement="bottom-start"
            >
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
                      categoriesOptions,
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
                className="placeholder:text-white text-right text-white bg-black/80 border-0 rounded-md 
                         max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 
                         scrollbar-track-transparent hover:scrollbar-thumb-pink-500"
                dir="rtl"
              >
                {/* 🔍 Search input */}
                <Input
                  placeholder="ابحث..."
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                  label="ابحث..."
                  crossOrigin={undefined}
                  value={categorySearch}
                  onClick={handleCategoryInputClick}
                  onChange={(e) => setCategorySearch(e.target.value)}
                  className="w-full p-3 text-sm rounded-md bg-black/40 text-white placeholder:text-white outline-white focus:outline-none border border-white"
                />

                {/* Filtered list */}
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((category) => (
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
                  ))
                ) : (
                  <p className="text-center text-gray-400 py-2 text-sm">
                    لا توجد نتائج
                  </p>
                )}
              </MenuList>
            </Menu>
          </div>

          {/* City Dropdown */}
          <div className="w-full md:w-1/3 md:border-r md:pr-6">
            <h3 className="text-[#CFCFCF] text-lg mb-1 text-right" dir="rtl">
              المدينة
            </h3>
            <Menu
              dismiss={{
                itemPress: false,
              }}
              placement="bottom-start"
            >
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
                    {getLabel(
                      cityOptions,
                      selectedCity,
                      "الرياض، جدة، مكة......"
                    )}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </Button>
              </MenuHandler>
              <MenuList
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                className="text-right text-white bg-black/80 border-0 rounded-md max-h-72 overflow-y-auto"
                dir="rtl"
              >
                {/* 🔍 Search input */}
                <Input
                  placeholder="ابحث..."
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                  label="ابحث..."
                  crossOrigin={undefined}
                  value={citySearch}
                  onClick={handleCityInputClick}
                  onChange={(e) => setCitySearch(e.target.value)}
                  className="w-full p-3 text-sm rounded-md bg-black/40 text-white placeholder:text-white outline-white focus:outline-none border border-white"
                />

                {/* Filtered list */}
                {filteredCities.length > 0 ? (
                  filteredCities.map((city) => (
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
                  ))
                ) : (
                  <p className="text-center text-gray-400 py-2 text-sm">
                    لا توجد نتائج
                  </p>
                )}
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
