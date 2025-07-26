import React from "react";
import ReactDOM from "react-dom/client";
import MainSection from "./MainSection";
import OffersSection from "./OffersSection";
import WeddingServices from "./WeddingServices";
import JoinUs from "./JoinUs";
import Hotels from "./Hotels";
import Palaces from "./WeddingPalaces";
import PopularArticles from "./Blogs";
import OurServices from "./OurServices";
import AllViews from "./AllViews";

const Home = () => {
    return (
        <div>
            <MainSection />
            <WeddingServices />
            <JoinUs />
            <Hotels />
            <OffersSection />
            <AllViews />
            <Palaces />
            <PopularArticles />
            <OurServices />
        </div>
    );
};

export default Home;

if (document.getElementById("home")) {
    const Index = ReactDOM.createRoot(document.getElementById("home"));
    Index.render(<Home />);
}
