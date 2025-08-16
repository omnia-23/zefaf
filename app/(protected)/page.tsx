import {
  HotelsSection,
  JoinUs,
  MainSection,
  OffersSection,
  OurServicesSection,
  WeddingServices,
  Palaces,
  BlogsSection,
} from "@/components/Pages/Home";
import OurTeam from "@/components/Pages/Home/OueTeam";
import Footer from "@/components/shared/Footer";
import MainNavbar from "@/components/shared/HomeNavigation/MainNavbar";

import React from "react";

const page = () => {
  return (
    <>
      <MainNavbar />
      <MainSection />
      <WeddingServices />
      <JoinUs />
      <HotelsSection />
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
