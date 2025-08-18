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
import MainNavbar from "@/components/shared/HomeNavigation/MainNavbar";

import React from "react";

const page = () => {
  return (
    <>
      <MainNavbar />
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
