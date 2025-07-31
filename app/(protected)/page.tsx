import {
  AllViews,
  HotelsSection,
  JoinUs,
  MainSection,
  OffersSection,
  OurServicesSection,
  WeddingServices,
  Palaces,
  BlogsSection,
} from "@/components/Pages/Home";

import React from "react";

const page = () => {
  return (
    <>
      <MainSection />
      <WeddingServices />
      <JoinUs />
      <HotelsSection />
      <OffersSection />
      {/* <AllViews />        //  commented out for now */}
      <Palaces />
      <BlogsSection />
      <OurServicesSection />
    </>
  );
};

export default page;
