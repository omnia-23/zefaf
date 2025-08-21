import React from "react";
import {
  OffersSection,
  WeddingServices,
  BlogsSection,
  CategoriesSection,
} from "@/components/Pages/Home";
import BestProviders from "@/components/Pages/Home/BestProviders";
import FamousCities from "@/components/Pages/Home/FamousCities";
import OffersSlider from "@/components/Pages/Home/OffersSlider";
import MainSection from "@/components/Pages/Home/HomeSection";

const page = () => {
  return (
    <>
      <MainSection />
      <BestProviders />
      <CategoriesSection />
      <WeddingServices />
      <OffersSlider />
      {/* <HotelsSection /> */}
      <FamousCities />
      <OffersSection />
      {/* <AllViews />        //  commented out for now */}
      {/* <Palaces /> */}
      <BlogsSection />
      {/* <OurTeam /> */}
      {/* <OurServicesSection /> */}
    </>
  );
};

export default page;
