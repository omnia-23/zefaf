"use client";
import React, { useState } from "react";
import HeaderSection from "@/components/Pages/Halls/HeaderSection";
import { useHall } from "@/hooks/useHall";
import VenueImageSlider from "@/components/shared/VenueImageSlider";
import BookingForm from "@/components/Pages/Halls/BookingForm";
import LoadingSpinner from "@/components/shared/LoadingSpinner"; // You should create this component
import ErrorMessage from "@/components/shared/ErrorMessage"; // You should create this component
import HallInfo from "@/components/Pages/Halls/HallData";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, Mail } from "lucide-react";
import BookingModal from "@/components/Pages/Halls/BookingModal";

export default function HallPage({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug);
  const { hall, isLoading, error } = useHall(slug);
  const [isOpen, setIsOpen] = useState(false);

  // console.log({ HallPage: hall });

  const footerItems = [
    {
      label: "واتساب",
      isWhatsApp: true,
      icon: FaWhatsapp,
      action: () => {
        const message = encodeURIComponent(
          `مرحبا، أريد الاستفسار عن أسعار ${hall?.name}`
        );
        window.open(
          `https://wa.me/${hall?.contact.phone}?text=${message}`,
          "_blank"
        );
      },
    },
    {
      label: "اتصل بنا",
      icon: Phone,
      action: () => (window.location.href = `tel:${hall?.contact.phone}`),
    },
    {
      label: "اطلب السعر",
      icon: Mail,
      action: () => setIsOpen(true),
    },
  ];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message="Failed to load hall details" />;
  }

  if (!hall) {
    return <ErrorMessage message="Hall not found" />;
  }

  return (
    <div>
      <HeaderSection
        title={hall.name}
        // description={hall.description}
        breadcrumbs={[
          { label: "الرئيسية", href: "/" },
          { label: "قصور الأفراح", href: "/halls" },
          { label: hall.name, href: `/halls/${params.slug}` },
        ]}
      />

      <div className="container mx-auto px-4 py-10">
        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-2">
          {/* Left column - Images */}
          <div className="lg:w-2/3">
            <VenueImageSlider images={hall.media} />

            {/* Header with name and price */}
            <HallInfo hallDetails={hall} />
          </div>

          {/* Right column - Details and features */}
          <div className="hidden lg:block lg:w-1/3">
            <BookingForm hallSlug={hall.slug} />
          </div>
        </div>
      </div>

      {/* Mobile Footer Buttons */}
      <div className="lg:hidden fixed -bottom-[1px] left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-around items-center py-2">
          {footerItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="flex flex-col items-center justify-center text-sm font-medium w-full py-2 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <item.icon className="w-6 h-6 mb-1" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <BookingModal
          hallSlug={hall.slug}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
}
