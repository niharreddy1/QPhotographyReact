import React from "react";
import "./Pages.css";
import Footer from "../Components/Footer";
import SiteSectionHeader from "../Components/SiteSectionHeader";
import SiteImages from "../Images/SiteImages";

const LandscapesPage = () => {
  return (
    <div>
      <SiteSectionHeader coverImg={SiteImages.landscapesMain} />

      <Footer />
    </div>
  );
};

export default LandscapesPage;
