import React from "react";
import slime from "../assets/boss_emerges.mp4";
import girl from "../assets/dash.mp4";
import "../styles/Aboutus.css";

const Aboutus = () => {
  return (
    <section className="video-about">

      {/* SECTION 1 — WHO WE ARE */}
      <div className="video-block">
        <h2 className="section-heading">Who We Are</h2>
        <div className="video-section">
          <video src={slime} autoPlay loop muted playsInline className="bg-video" />
          <div className="video-overlay-dark" />

          <div className="video-text left">
            <h1>WE BUILD IMMERSIVE GAMES</h1>
            <p>Storytelling. Systems. Impact.</p>
          </div>
        </div>
      </div>

      {/* SECTION 2 — OUR MISSION */}
      <div className="video-block">
        <h2 className="section-heading">Our Mission</h2>
        <div className="video-section">
          <video src={girl} autoPlay loop muted playsInline className="bg-video" />
          <div className="video-overlay-dark" />

          <div className="video-text right">
            <h1>EDUCATION THROUGH PLAY</h1>
            <p>Culture. Learning. Future Thinking.</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Aboutus;
