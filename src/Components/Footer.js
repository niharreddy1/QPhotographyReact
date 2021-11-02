import React from "react";
import "./Footer.css";
import mainLogo from "../Images/websiteLogos/q_logo_no_bg_wht.png";
import fbIcon from "../Images/Icons/f_logo_RGB-Blue_1024.png";
import instaIcon from "../Images/Icons/Instagram_Glyph_Gradient_RGB.png";
import linkedinIcon from "../Images/Icons/LI-In-Bug.png";

export default function Footer() {
  return (
    <div>
      <footer>
        <img
          class="w-2/12 h-1/6"
          src={mainLogo}
          alt="white q photography logo"
        />
        <ul class="space-x-32">
          <li class="inline-block">
            <a href="https://www.facebook.com/profile.php?id=100009318531620">
              <img
                src={fbIcon}
                alt="Facebook Button for link re-direction"
                class="w-10 h-10"
              />
            </a>
          </li>
          <li class="inline-block">
            <a href="https://www.instagram.com/qadirphotos/">
              <img
                src={instaIcon}
                alt="Instagram Button for link re-direction"
                class="w-10 h-10"
              />
            </a>
          </li>
          <li class="inline-block">
            <a href="https://www.linkedin.com/in/qadir-muhammad-b75751142/">
              <img
                src={linkedinIcon}
                alt="LinkedIn Button for link re-direction"
                class="w-12 h-10"
              />
            </a>
          </li>
        </ul>
        <p class="text-white">Website designed by Nihar Reddy</p>
      </footer>
    </div>
  );
}
