"use client";
import React from "react";
import HeaderSection from "@/components/Pages/Halls/HeaderSection";
import { useHall } from "@/hooks/useHall";
import VenueImageSlider from "@/components/shared/VenueImageSlider";
import BookingForm from "@/components/Pages/Halls/BookingForm";
import LoadingSpinner from "@/components/shared/LoadingSpinner"; // You should create this component
import ErrorMessage from "@/components/shared/ErrorMessage"; // You should create this component
import HallInfo from "@/components/Pages/Halls/HallData";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { FaWhatsapp } from "react-icons/fa";

export default function HallPage({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug);
  const { hall, isLoading, error } = useHall(slug);
  // console.log({ HallPage: hall });

  const footerItems = [
    {
      label: "اطلب السعر",
      // action: () => (window.location.href = `tel:${hall?.contact.phone}`),
    },
    {
      icon: PhoneIcon,
      action: () => (window.location.href = `tel:${hall?.contact.phone}`),
    },
    {
      icon: FaWhatsapp,
      isWhatsApp: true,
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
          <BookingForm hallId={hall.id} />
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-around items-center py-3 px-2">
          {footerItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className={`flex flex-col items-center justify-center w-16 ${
                item.isWhatsApp ? "text-green-500" : "text-gray-600"
              }`}
            >
              {item.isWhatsApp ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                </svg>
              ) : (
                <>
                  {item.icon && <item.icon className="w-6 h-6" />}
                  {item.label && (
                    <span className="text-xs mt-1">{item.label}</span>
                  )}
                </>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
