import React, { useState, useEffect } from "react";
import "../styles/Trailer.css";

import trailer1Img from "../assets/MandN.png";
import trailer2Img from "../assets/RescueTide.jpg";

const trailers = [
  {
    id: 1,
    title: "GreenQuest:Rescue Tide",
    description:
      "Rescue Tide is an interactive educational simulation that places the player in the role of a community leader responding to a rapidly developing flood emergency in a Lagos urban community.",
    video: "https://www.youtube.com/embed/YOUR_SECOND_VIDEO",
    thumbnail: trailer2Img,
    launchDate: new Date("2026-04-15T00:00:00"),
  },
  {
    id: 2,
    title: "GreenQuest:Monsters and Threats",
    description:
      "Help Niko, a brave orphan girl living in a post-apocalyptic world destroyed by pollution and climate change, save her brother.",
    video: "https://www.youtube.com/embed/HuaiE7vX688",
    thumbnail: trailer1Img,
    launchDate: new Date("2026-06-30T00:00:00"),
  },
];

const Trailer = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [activeVideo, setActiveVideo] = useState(null);

  const calculateTimeLeft = (launchDate) => {
    const now = new Date();
    const difference = launchDate - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimes = {};

      trailers.forEach((trailer) => {
        updatedTimes[trailer.id] = calculateTimeLeft(trailer.launchDate);
      });

      setTimeLeft(updatedTimes);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatUnit = (unit) =>
    unit.charAt(0).toUpperCase() + unit.slice(1);

  return (
    <section className="trailer-section">
      <h2>Our Games</h2>

      <div className="trailer-carousel-wrapper">
        <div className="trailer-carousel">

          {trailers.map((trailer) => (
            <div key={trailer.id} className="trailer-slide">

              <p>
                <strong className="title">{trailer.title}</strong>
                <br />
                {trailer.description}
              </p>

              <div className="trailer-video-wrapper">
                {activeVideo === trailer.id ? (
                  <iframe
                    src={`${trailer.video}?autoplay=1`}
                    title={trailer.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="thumbnail"
                    onClick={() => setActiveVideo(trailer.id)}
                  >
                    <img src={trailer.thumbnail} alt={trailer.title} />
                    <div className="play-button">▶</div>
                  </div>
                )}
              </div>

              {timeLeft[trailer.id] ? (
                <div className="countdown">
                  {Object.entries(timeLeft[trailer.id]).map(([unit, value]) => (
                    <div key={unit} className="time-box">
                      <span className="number">{value}</span>
                      <span className="label">{formatUnit(unit)}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="countdown">🚀 Launched!</div>
              )}

              <div className="swipe-container">
                <div className="swipe-arrow">Swipe →</div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Trailer;