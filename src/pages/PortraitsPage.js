import React from "react";
import "./Pages.css";
import Footer from "../Components/Footer";
import SiteSectionHeader from "../Components/SiteSectionHeader";
import PortraitsBackgroundImg from "../Images/Portraits/MainPortraitsImg.jpg";

const PortraitsPage = () => {
  return (
    <div>
      <SiteSectionHeader coverImg={PortraitsBackgroundImg} />
      <Footer />
    </div>
  );
};

export default PortraitsPage;
