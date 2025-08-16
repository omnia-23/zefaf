import {
  HotelsSection,
  JoinUs,
  OffersSection,
  WeddingServices,
  Palaces,
  BlogsSection,
  CategoriesSection,
} from "@/components/Pages/Home";
import FamousCities from "@/components/Pages/Home/FamousCities";
import OurTeam from "@/components/Pages/Home/OueTeam";
import Footer from "@/components/shared/Footer";
import MainNavbar from "@/components/shared/HomeNavigation/MainNavbar";

import React from "react";

const page = () => {
  return (
    <>
      <MainNavbar />
      <CategoriesSection />
      <WeddingServices />
      <JoinUs />
      <HotelsSection />
      <FamousCities />
      <OffersSection />
      {/* <AllViews />        //  commented out for now */}
      <Palaces />
      <BlogsSection />
      <OurTeam />
      {/* <OurServicesSection /> */}
      <Footer />
    </>
  );
};

export default page;
