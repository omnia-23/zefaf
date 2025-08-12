"use client";
import React, { useState } from "react";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import HallDetails from "./HallDetails";
import HallOffers from "./HallOffers";
import ContactInfo from "./ContactInfo";
import ReviewsSection from "./ReviewSection";
import FAQSection from "./FAQSection";
import { IHall } from "@/services/halls";

export default function TabsSections({ hallDetails }: { hallDetails: IHall }) {
  const [activeTab, setActiveTab] = useState<string>("hotel-details");

  const items = [
    {
      label: "تفاصيل الفندق",
      value: "hotel-details",
      body: <HallDetails hallDetails={hallDetails} />,
    },
    { label: "العروض", value: "offers", body: <HallOffers /> },
    {
      label: "معلومات التواصل",
      value: "contact-info",
      body: <ContactInfo />,
    },
    { label: "التقييمات", value: "reviews", body: <ReviewsSection /> },
    { label: "الأسئلة المتداولة", value: "faq", body: <FAQSection /> },
  ];

  return (
    <Tabs
      value={activeTab}
      onChange={setActiveTab}
      id="custom-animation"
      className="w-full"
    >
      {/* Responsive Tabs Header */}
      <TabsHeader
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        className="bg-transparent border-b border-gray-300 p-0 rounded-none overflow-x-auto"
        indicatorProps={{
          className:
            "bg-transparent rounded-none border-b-2 border-[#990645] shadow-none",
        }}
      >
        <div className="flex w-max min-w-full">
          {items.map(({ label, value }) => (
            <Tab
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`whitespace-nowrap px-3 sm:px-4 py-2 mx-1 sm:mx-2 text-sm sm:text-base transition-colors duration-200 ${
                activeTab === value
                  ? "text-[#990645] font-semibold"
                  : "text-[#888888]"
              }`}
            >
              {label}
            </Tab>
          ))}
        </div>
      </TabsHeader>

      {/* Tabs Content */}
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
        {items.map(({ value, body }) => (
          <TabPanel key={value} value={value} className="p-0 pt-4">
            {body}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
