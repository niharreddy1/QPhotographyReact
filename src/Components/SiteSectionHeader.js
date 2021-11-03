import React from "react";
import Navigation from "./Navigation";
import "./SiteSectionHeader.css";

export default function SiteSectionHeader(props) {
  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${props.coverImg})` }}
    >
      <Navigation />
    </div>
  );
}
