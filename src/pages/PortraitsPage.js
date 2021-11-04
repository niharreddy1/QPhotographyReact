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
            alt="Casual"
            class="shadow-xl rounded"
          />
        </div>

        <div class="flex flex-wrap justify-center pt-28 space-x-4">
          <img
            src={SiteImages.portraitsSeven}
            alt="Casual"
            class="shadow-xl rounded w-3/12"
          />
          <img
            src={SiteImages.portraitsEight}
            alt="Casual"
            class="shadow-xl rounded w-3/12"
          />
          <img
            src={SiteImages.portraitsNine}
            alt="Casual"
            class="shadow-xl rounded w-3/12"
          />
        </div>

        <div class="flex flex-wrap justify-center pt-28 space-x-10">
          <img
            src={SiteImages.portraitsTen}
            alt="Graduation"
            class="shadow-xl rounded w-3/12 h-4/6"
          />
          <img
            src={SiteImages.portraitsEleven}
            alt="Graduation"
            class="shadow-xl rounded w-5/12 h-4/6"
          />
        </div>

        <div class="flex flex-wrap justify-center pt-28 space-x-10">
          <img
            style={{ height: "75%", width: "75%" }}
            src={SiteImages.portraitsTwelve}
            alt="Lights"
            class="shadow-xl rounded"
          />
        </div>

        <div class="flex flex-wrap justify-center pt-28 space-x-10">
          <img
            src={SiteImages.portraitsThirteen}
            alt="Lights"
            class="shadow-xl rounded w-3/12"
          />
          <img
            src={SiteImages.portraitsFourteen}
            alt="Lights"
            class="shadow-xl rounded w-3/12"
          />
          <img
            src={SiteImages.portraitsFifteen}
            alt="Lights"
            class="shadow-xl rounded w-3/12"
          />
        </div>

        <div class="flex flex-wrap justify-center pt-28 space-x-10">
          <img
            style={{ height: "75%", width: "75%" }}
            src={SiteImages.portraitsSixteen}
            alt="Lights"
            class="shadow-xl rounded"
          />
        </div>

        <div class="flex flex-wrap justify-center pt-28 space-x-10">
          <img
            src={SiteImages.portraitsSeventeen}
            style={{ height: "75%", width: "75%" }}
            alt="Sreekar"
            class="shadow-xl rounded"
          />
        </div>

        <div class="flex flex-wrap justify-center pt-28 space-x-32">
          <img
            src={SiteImages.portraitsEighteen}
            alt="Stronger"
            class="shadow-xl rounded w-3/12"
          />
          <img
            src={SiteImages.portraitsNineteen}
            alt="Stronger"
            class="shadow-xl rounded w-4/12"
          />
        </div>

        <div class="flex flex-wrap justify-center pt-28 space-x-10">
          <img
            src={SiteImages.portraitsTwenty}
            style={{ height: "75%", width: "75%" }}
            alt="Stronger"
            class="shadow-xl rounded"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PortraitsPage;
