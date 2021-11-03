import React from "react";
import "./Pages.css";
import Footer from "../Components/Footer";
import SiteSectionHeader from "../Components/SiteSectionHeader";
import LandscapesBackgroundImg from "../Images/Landscapes/MainLandscapesImg.jpg";

const LandscapesPage = () => {
  return (
    <div>
      <SiteSectionHeader coverImg={LandscapesBackgroundImg} />
      <Footer />
    </div>
  );
};

export default LandscapesPage;
