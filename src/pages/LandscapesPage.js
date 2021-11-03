import React from "react";
import "./Pages.css";
import Footer from "../Components/Footer";
import SiteSectionHeader from "../Components/SiteSectionHeader";
import SiteImages from "../Images/SiteImages";

const LandscapesPage = () => {
  return (
    <div>
      <SiteSectionHeader coverImg={SiteImages.landscapesMain} />

      <div className="pt-28 pb-12"></div>

      <Footer />
    </div>
  );
};

export default LandscapesPage;
