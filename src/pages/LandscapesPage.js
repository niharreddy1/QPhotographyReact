import React from "react";
import "./Pages.css";
import Footer from "../Components/Footer";
import SiteSectionHeader from "../Components/SiteSectionHeader";
import SiteImages from "../Images/SiteImages";

const LandscapesPage = () => {
  return (
    <div>
      <SiteSectionHeader coverImg={SiteImages.landscapesMain} />

      <div className="pt-28 pb-12">
        <div class="flex flex-wrap justify-center space-x-10 pb-32">
          <img
            src={SiteImages.landscapesOne}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesOne"
            class="shadow-xl rounded"
          />
          <img
            src={SiteImages.landscapesTwo}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesTwo"
            class="shadow-xl rounded"
          />
        </div>
        <div class="flex flex-wrap justify-center space-x-10 pb-32">
          <img
            src={SiteImages.landscapesThree}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesThree"
            class="shadow-xl rounded"
          />
          <img
            src={SiteImages.landscapesFour}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesFour"
            class="shadow-xl rounded"
          />
        </div>
        <div class="flex flex-wrap justify-center space-x-10 pb-32">
          <img
            src={SiteImages.landscapesFive}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesFive"
            class="shadow-xl rounded"
          />
          <img
            src={SiteImages.landscapesSix}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesSix"
            class="shadow-xl rounded"
          />
        </div>
        <div class="flex flex-wrap justify-center space-x-10 pb-32">
          <img
            src={SiteImages.landscapesSeven}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesFive"
            class="shadow-xl rounded"
          />
          <img
            src={SiteImages.landscapesEight}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesSix"
            class="shadow-xl rounded"
          />
        </div>
        <div class="flex flex-wrap justify-center space-x-10 pb-32">
          <img
            src={SiteImages.landscapesNine}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesFive"
            class="shadow-xl rounded"
          />
          <img
            src={SiteImages.landscapesTen}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesSix"
            class="shadow-xl rounded"
          />
        </div>
        <div class="flex flex-wrap justify-center space-x-10 pb-32">
          <img
            src={SiteImages.landscapesEleven}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesFive"
            class="shadow-xl rounded"
          />
          <img
            src={SiteImages.landscapesTwelve}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesSix"
            class="shadow-xl rounded"
          />
        </div>

        <div class="flex flex-wrap justify-center space-x-10 pb-32">
          <img
            src={SiteImages.landscapesThirteen}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesFive"
            class="shadow-xl rounded"
          />
          <img
            src={SiteImages.landscapesFourteen}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesSix"
            class="shadow-xl rounded"
          />
        </div>
        <div class="flex flex-wrap justify-center space-x-10 pb-32">
          <img
            src={SiteImages.landscapesFifteen}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesFive"
            class="shadow-xl rounded"
          />
          <img
            src={SiteImages.landscapesSixteen}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesSix"
            class="shadow-xl rounded"
          />
        </div>
        <div class="flex flex-wrap justify-center space-x-10 pb-32">
          <img
            src={SiteImages.landscapesSeventeen}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesFive"
            class="shadow-xl rounded"
          />
          <img
            src={SiteImages.landscapesEighteen}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesSix"
            class="shadow-xl rounded"
          />
        </div>
        <div class="flex flex-wrap justify-center space-x-10 pb-32">
          <img
            src={SiteImages.landscapesNineteen}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesFive"
            class="shadow-xl rounded"
          />
          <img
            src={SiteImages.landscapesTwenty}
            style={{ height: "45%", width: "45%" }}
            alt="landscapesSix"
            class="shadow-xl rounded"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandscapesPage;
