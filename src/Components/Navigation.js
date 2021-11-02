import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div>
      <nav>
        <a href="index.html">
          <button id="home_button" class="hover:underline">
            Home
          </button>
        </a>
        <a href="landscapes.html">
          <button id="landscapes_button" class="hover:underline">
            Landscapes
          </button>
        </a>
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

        {/* <img id="logo" src={navLogo} alt="white q photography logo" /> */}

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
        <a href="portraits.html">
          <button id="portraits_button" class="hover:underline">
            Portraits
          </button>
        </a>

        <button id="wildlife_button" class="hover:underline">
          Wildlife
        </button>

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
