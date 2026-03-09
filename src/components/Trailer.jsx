import React, { useState, useEffect } from "react";
import "../styles/Trailer.css";

// Import your custom thumbnail images
import trailer1Img from "../assets/MandN.png";
import trailer2Img from "../assets/RescueTide.jpg";

const trailers = [
  {
    id: 1,
    title: "GreenQuest: Monsters and Threats",
    description:
      "Our debut game introduces players to a world where unseen challenges take visible form.",
    video: "https://www.youtube.com/embed/HuaiE7vX688",
    thumbnail: trailer1Img,
    launchDate: new Date("2026-08-01T00:00:00"),
  },
  {
    id: 2,
    title: "GreenQuest: Rise of the Guardians",
    description:
      "A new adventure expands the GreenQuest universe with powerful guardians restoring balance.",
    video: "https://www.youtube.com/embed/YOUR_SECOND_VIDEO",
    thumbnail: trailer2Img,
    launchDate: new Date("2026-04-15T00:00:00"),
  },
];

const Trailer = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [activeVideo, setActiveVideo] = useState(null);

  // Countdown calculation
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

  // Update countdown every second
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

      <div className="trailer-carousel">
        {trailers.map((trailer) => (
          <div key={trailer.id} className="trailer-slide">

            <p>
              <strong>{trailer.title}</strong>
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

          </div>
        ))}
      </div>
    </section>
  );
};

export default Trailer;