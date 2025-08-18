import React from "react";
import ReactDOM from "react-dom/client";
import CategoriesSection from "./CategoriesSection";
import OffersSection from "./OffersSection";
import WeddingServices from "./WeddingServices";
import JoinUs from "./OffersSlider";
import Hotels from "./HotelsSection";
import Palaces from "./WeddingPalaces";
import PopularArticles from "./BlogsSection";
import OurServicesSection from "./OurServicesSection";
import AllViews from "./AllViews";

const Home = () => {
  return (
    <div>
      <CategoriesSection />
      <WeddingServices />
      <JoinUs />
      <Hotels />
      <OffersSection />
      <AllViews />
      <Palaces />
      <PopularArticles />
      <OurServicesSection />
    </div>
  );
};

export default Home;

// if (document.getElementById("home")) {
//   const Index = ReactDOM.createRoot(document.getElementById("home"));
//   Index.render(<Home />);
// }
