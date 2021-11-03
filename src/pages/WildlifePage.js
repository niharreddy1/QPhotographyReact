import React from "react";
import "./Pages.css";
import Footer from "../Components/Footer";
import SiteSectionHeader from "../Components/SiteSectionHeader";
import SiteImages from "../Images/SiteImages";

const WildlifePage = () => {
  return (
    <div>
      <SiteSectionHeader coverImg={SiteImages.wildlifeMain} />
      <div className="pb-28">
        <div className="flex flex-wrap justify-center space-x-10 pt-28">
          <img
            src={SiteImages.wildlifeOne}
            style={{ height: "45%", width: "45%" }}
            alt="Giraffes"
            className="shadow-xl rounded"
          />
          <img
            src={SiteImages.wildlifeTwo}
            style={{ height: "45%", width: "45%" }}
            alt="Elephant Herd"
            className="shadow-xl rounded"
          />
        </div>

        <div className="flex flex-wrap justify-center pt-28 space-x-10">
          <img
            src={SiteImages.wildlifeThree}
            style={{ height: "45%", width: "45%" }}
            alt="Turtle in sand"
            className="shadow-xl rounded"
          />
          <img
            src={SiteImages.wildlifeFour}
            style={{ height: "45%", width: "45%" }}
            alt="Pig in sand"
            className="shadow-xl rounded"
          />
        </div>

        <div className="flex flex-wrap justify-center pt-28 space-x-10">
          <img
            src={SiteImages.wildlifeFive}
            alt="Rabbits one"
            className="shadow-xl rounded w-3/12"
          />
          <img
            src={SiteImages.wildlifeSix}
            alt="Rabbits two"
            className="shadow-xl rounded w-3/12"
          />
          <img
            src={SiteImages.wildlifeSeven}
            alt="Rabbits three"
            className="shadow-xl rounded w-3/12"
          />
        </div>

        <div className="flex flex-wrap justify-center pt-28 space-x-20">
          <img
            src={SiteImages.wildlifeEight}
            alt="Bird one"
            className="shadow-xl rounded w-3/12 h-auto"
          />
          <img
            src={SiteImages.wildlifeNine}
            alt="Bird two"
            className="shadow-xl rounded w-3/12 h-auto"
          />
          <img
            src={SiteImages.wildlifeTen}
            alt="Bird three"
            className="shadow-xl rounded w-3/12 h-auto"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WildlifePage;
