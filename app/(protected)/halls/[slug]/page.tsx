"use client";
import React from "react";
import HeaderSection from "@/components/Pages/Halls/HeaderSection";
import { useHall } from "@/hooks/useHall";
import VenueImageSlider from "@/components/shared/VenueImageSlider";
import BookingForm from "@/components/Pages/Halls/BookingForm";
import LoadingSpinner from "@/components/shared/LoadingSpinner"; // You should create this component
import ErrorMessage from "@/components/shared/ErrorMessage"; // You should create this component
import HallInfo from "@/components/Pages/Halls/HallInfo";

export default function HallPage({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug);
  const { hall, isLoading, error } = useHall(slug);
  console.log({ HallPage: hall });

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
        description={hall.description}
        breadcrumbs={[
          { label: "الرئيسية", href: "/" },
          { label: "قصور الأفراح", href: "/halls" },
          { label: hall.name, href: `/halls/${params.slug}` },
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-2">
          {/* Left column - Images */}
          <div className="lg:w-2/3">
            <VenueImageSlider images={hall.images} />

            {/* Header with name and price */}
            <HallInfo hallDetails={hall} />
          </div>

          {/* Right column - Details and features */}
          <BookingForm hallId={hall.id} />
        </div>
      </div>
    </div>
  );
}
