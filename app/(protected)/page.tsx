import {
  AllViews,
  Hotels,
  JoinUs,
  MainSection,
  OffersSection,
  OurServices,
  WeddingServices,
  Palaces,
  PopularArticles,
} from "@/components/Pages/Home";
import React from "react";

const page = () => {
  return (
    <>
      <MainSection />
      <WeddingServices />
      <JoinUs />
      <Hotels />
      <OffersSection />
      <AllViews />
      <Palaces />
      <PopularArticles />
      <OurServices />
    </>
  );
};

export default page;
