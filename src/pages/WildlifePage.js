import React from "react";
import "../pages/WildLifePage.css";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";

const WildlifePage = () => {
  return (
    <div>
      <header>
        <section className="wildlife">
          <Navigation />
        </section>
      </header>
      <Footer />
    </div>
  );
};

export default WildlifePage;
