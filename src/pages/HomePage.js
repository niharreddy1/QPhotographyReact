import React from "react";
import { Link } from "react-router-dom";
import qFallPhoto from "../Images/q_fall_crop.jpeg";
import logoNoBgBlk from "../Images/websiteLogos/q_logo_no_bg_blk.jpg";
import fbIcon from "../Images/Icons/f_logo_RGB-Blue_1024.png";
import instaIcon from "../Images/Icons/Instagram_Glyph_Gradient_RGB.png";
import linkedInIcon from "../Images/Icons/LI-In-Bug.png";
import "./Pages.css";

const HomePage = () => {
  return (
    <div className="flex">
      {/* Left hand side picture of q */}
      <div className="w-1/2 h-screen">
        <img
          className="object-cover h-screen"
          src={qFallPhoto}
          alt="Qadir in the fall."
        />
      </div>

      {/* Right hand side website nav */}
      <div className="relative w-1/2 h-screen">
        {/* Top Logo */}
        <img
          className="transform scale-50"
          src={logoNoBgBlk}
          alt="Q Photograhpy Logo"
        />

        {/* About Q */}
        <div className="px-12 py-10 text-center">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">
            About:
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Qadir Muhammad is an aspiring wildlife veterinarian with a passion
            for all things photography.
          </p>
        </div>
        <br />

        {/* Site portfolio options  */}
        <div id="portfolio_options" className="text-center">
          <div id="site_options">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">
              Explore the portfolio:
            </p>
            <br />

            <div className="space-x-2">
              <Link to="/wildlife">
                <button
                  //   id="wildlife_button"
                  className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-transparent hover:bg-black text-black font-semibold hover:text-white py-1 px-3 border border-black hover:border-transparent rounded"
                >
                  {" "}
                  Wildlife{" "}
                </button>
              </Link>

              <Link to="/landscapes">
                <button
                  //   id="landscapes_button"
                  className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-transparent hover:bg-black text-black font-semibold hover:text-white py-1 px-3 border border-black hover:border-transparent rounded"
                >
                  {" "}
                  Landscapes{" "}
                </button>
              </Link>
              <Link to="/portraits">
                <button
                  //   id="photos_button"
                  className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-transparent hover:bg-black text-black font-semibold hover:text-white py-1 px-3 border border-black hover:border-transparent rounded"
                >
                  {" "}
                  Portraits{" "}
                </button>
              </Link>
            </div>

            <br />
            <br />
            <br />

            {/* Contact Q */}
            <div id="contact_options" className="text-center">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">
                Business Inquiries/DM:
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                qmuhammad16@gmail.com
              </p>
            </div>
            <br />

            <br />
            <div id="social_media_buttons" className="text-center">
              <button>
                <a href="https://www.facebook.com/profile.php?id=100009318531620">
                  <img
                    src={fbIcon}
                    alt="Facebook Button for link re-direction"
                    className="w-10 h-10 mr-3"
                  />
                </a>
              </button>
              <button>
                <a href="https://www.instagram.com/qadirphotos/">
                  <img
                    src={instaIcon}
                    alt="Instagram Button for link re-direction"
                    className="w-10 h-10 mr-3"
                  />
                </a>
              </button>
              <button>
                <a href="https://www.linkedin.com/in/qadir-muhammad-b75751142/">
                  <img
                    src={linkedInIcon}
                    alt="Instagram Button for link re-direction"
                    className="w-12 h-10"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
