import React from "react";
import HeaderSection from "@/components/Pages/Halls/HeaderSection";
import VenueImageSlider from "@/components/shared/VenueImageSlider";
import HallInfo from "@/components/Pages/Halls/HallINfo";
import BookingForm from "@/components/Pages/Halls/BookingForm";

export interface IHallDetails {
  id: number;
  name: string;
  location: string;
  rating: string;
  priceRange: string;
  capacity: string;
  description: string;
  image: string;
  features: {
    id: number;
    label: string;
    value: string;
  }[];
  images: string[];
}

export default function HallDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  // In a real application, you would fetch the hall details from an API
  // const { data, isLoading, error } = useSWR(`/api/halls/${params.id}`, fetcher);

  // Mock data for demonstration
  const hallDetails: IHallDetails = {
    id: parseInt(params.id),
    name: "فندق ذهب المركز المالي",
    location: "بلدية العليا",
    rating: "4.5",
    priceRange: "1500 - 8000 ر.س",
    capacity: "150 - 800 شخص",
    description:
      "إنها سلسلة من الكلمات اللاتينية التي، عند وضعها في موضعها، لا تشكل جملةً بمعنى كامل، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات. إنها سلسلة من الكلمات اللاتينية التي، عند وضعها في موضعها، لا تشكل جملةً بمعنى كامل، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات.",
    image: "/images/hotel.svg",
    features: [
      { id: 1, label: "مكيف هواء", value: "متاح" },
      { id: 2, label: "واي فاي مجاني", value: "متاح" },
      { id: 3, label: "موقف سيارات", value: "متاح" },
      { id: 4, label: "خدمة الغرف", value: "متاح" },
      { id: 5, label: "مسبح", value: "متاح" },
      { id: 6, label: "مطعم", value: "متاح" },
      { id: 7, label: "صالة رياضية", value: "متاح" },
      { id: 8, label: "سبا", value: "متاح" },
      { id: 9, label: "سبا", value: "متاح" },
    ],
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    ],
  };

  return (
    <div>
      <HeaderSection
        title={`${hallDetails.name}`}
        description={`${hallDetails.description}`}
        breadcrumbs={[
          { label: "الرئيسية", href: "/" },
          { label: "قصور الأفراح", href: "/halls" },
          { label: `${hallDetails.name}`, href: `/halls/${params.id}` },
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-2">
          {/* Left column - Images */}
          <div className="lg:w-2/3">
            <VenueImageSlider images={hallDetails.images} />

            {/* Header with name and price */}
            <HallInfo hallDetails={hallDetails} />
          </div>

          {/* Right column - Details and features */}
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
