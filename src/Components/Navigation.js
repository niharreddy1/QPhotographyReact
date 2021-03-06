import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import navLogo from "../Images/websiteLogos/q_logo_no_bg_wht.png";

export default function Navigation() {
  return (
    <div>
      <nav>
        <Link to="/">
          <button id="home_button" className="hover:underline">
            Home
          </button>
        </Link>

        <Link to="/landscapes">
          <button id="landscapes_button" className="hover:underline">
            Landscapes
          </button>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="130"
          height="2"
          viewBox="0 0 130 2"
        >
          <line
            id="Line_6"
            data-name="Line 6"
            x2="130"
            transform="translate(0 1)"
            fill="none"
            stroke="#fff"
            stroke-width="2"
          />
        </svg>

        <img id="logo" src={navLogo} alt="white q photography logo" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="130"
          height="2"
          viewBox="0 0 130 2"
        >
          <line
            id="Line_6"
            data-name="Line 6"
            x2="130"
            transform="translate(0 1)"
            fill="none"
            stroke="#fff"
            stroke-width="2"
          />
        </svg>

        <Link to="/portraits">
          <button id="portraits_button" class="hover:underline">
            Portraits
          </button>
        </Link>

        <Link to="/wildlife">
          <button id="wildlife_button" class="hover:underline">
            Wildlife
          </button>
        </Link>

        <svg
          id="scroll_animation"
          class="animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          width="62.561"
          height="29.14"
          viewBox="0 0 62.561 29.14"
        >
          <path
            id="Path_1"
            data-name="Path 1"
            d="M-3349.013,971.438l25,30-25,30"
            transform="translate(1032.719 3350.549) rotate(90)"
            fill="none"
            stroke="#fff"
            stroke-width="4"
          />
        </svg>
      </nav>
    </div>
  );
}
