import React from "react";
import "../styles/Hero.css";
import bgVideo from "../assets/lagos.mp4"; // adjust path if needed
import Header from "../static/Header";

const Hero = () => {
  return (
    <section className="hero">
      <Header />
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content left">
        <h1 className="hero-title">
          GREENQUEST
        </h1>

        <p className="hero-tagline">
         Driving real-world impact through immersive games and interactive storytelling
        </p>

        <p className="hero-description">
         Afro-futuristic games designed to explore real-world challenges, empower players, and inspire action
        </p>

       
      </div>
    </section>
  );
};

export default Hero;
