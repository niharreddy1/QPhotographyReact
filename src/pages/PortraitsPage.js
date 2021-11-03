import React from "react";
import "./Pages.css";
import Footer from "../Components/Footer";
import SiteSectionHeader from "../Components/SiteSectionHeader";
import SiteImages from "../Images/SiteImages";

const PortraitsPage = () => {
  return (
    <div>
      <SiteSectionHeader coverImg={SiteImages.portraitsMain} />
      <Footer />
    </div>
  );
};

export default PortraitsPage;
