import React, { useState, useEffect } from "react";
import "../styles/Trailer.css";

const Trailer = () => {
  // Countdown logic
  const calculateTimeLeft = () => {
    const launchDate = new Date("2026-04-15T00:00:00");
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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Helper to capitalize unit names
  const formatUnit = (unit) => unit.charAt(0).toUpperCase() + unit.slice(1);

  return (
    <section className="trailer-section">
      <h2>Game Trailer</h2>
      <p>
        <strong>GreenQuest: Monsters and Threats</strong><br />
        Our debut game introduces players to a world where unseen challenges take visible form.
        Through exploration, combat, and restoration, players learn how systems break down and how thoughtful action can rebuild them.
      </p>
      <p>Watch Trailer below:</p>

      <div className="trailer-video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/HuaiE7vX688"
          title="Game Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Countdown Timer */}
      {timeLeft ? (
        <div className="countdown">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="time-box">
              <span className="number">{value}</span>
              <span className="label">{formatUnit(unit)}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="countdown">🚀 Launched!</div>
      )}
    </section>
  );
};

export default Trailer;
