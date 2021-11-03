import React from "react";
import "./Pages.css";
import Footer from "../Components/Footer";
import SiteSectionHeader from "../Components/SiteSectionHeader";
import WildlifeBackgroundImg from "../Images/ElephantBG.jpg";

const WildlifePage = () => {
  return (
    <div>
      <SiteSectionHeader coverImg={WildlifeBackgroundImg} />
      <Footer />
    </div>
  );
};

export default WildlifePage;
