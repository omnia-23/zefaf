import {
  HotelsSection,
  JoinUs,
  OffersSection,
  WeddingServices,
  Palaces,
  BlogsSection,
  CategoriesSection,
} from "@/components/Pages/Home";
import BestProviders from "@/components/Pages/Home/BestProviders";
import FamousCities from "@/components/Pages/Home/FamousCities";
import OurTeam from "@/components/Pages/Home/OurTeam";
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
      <JoinUs />
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
