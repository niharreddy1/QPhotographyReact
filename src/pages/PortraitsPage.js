import React from "react";
import "./Pages.css";
import Footer from "../Components/Footer";
import SiteSectionHeader from "../Components/SiteSectionHeader";
import SiteImages from "../Images/SiteImages";

const PortraitsPage = () => {
  return (
    <div>
      <SiteSectionHeader coverImg={SiteImages.portraitsMain} />
      <div class="pt-28 pb-32">
        <div class="flex flex-wrap justify-center">
          <img
            src={SiteImages.portraitsOne}
            style={{ height: "75%", width: "75%" }}
            alt="Graduation"
            class="shadow-xl rounded"
          />
        </div>

        <div class="flex flex-wrap justify-center pt-28 space-x-4">
          <img
            src={SiteImages.portraitsTwo}
            alt="Graduation"
            class="shadow-xl rounded w-3/12"
          />
          <img
            src={SiteImages.portraitsThree}
            alt="Graduation"
            class="shadow-xl rounded w-3/12"
          />
          <img
            src={SiteImages.portraitsFour}
            alt="Graduation"
            class="shadow-xl rounded w-3/12"
          />
        </div>

        <div class="flex flex-wrap justify-center pt-28">
          <img
            src={SiteImages.portraitsFive}
            style={{ height: "75%", width: "75%" }}
            alt="Graduation"
            class="shadow-xl rounded"
          />
        </div>

        <div class="flex flex-wrap justify-center pt-28">
          <img
            src={SiteImages.portraitsSix}
            style={{ height: "75%", width: "75%" }}
            alt="Graduation"
            class="shadow-xl rounded"
          />
        </div>

        <div class="flex flex-wrap justify-center pt-28 space-x-4">
          <img
            src={SiteImages.portraitsSeven}
            alt="Graduation"
            class="shadow-xl rounded w-3/12"
          />
          <img
            src={SiteImages.portraitsEight}
            alt="Graduation"
            class="shadow-xl rounded w-3/12"
          />
          <img
            src={SiteImages.portraitsNine}
            alt="Graduation"
            class="shadow-xl rounded w-3/12"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PortraitsPage;
