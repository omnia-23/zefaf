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
import Footer from "@/components/shared/Footer";
import MainSection from "@/components/Pages/Home/HomeSection";
import Navbar from "@/components/HomeNavigation/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
};

export default page;
