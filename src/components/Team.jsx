import React from 'react';
import ceo from '../assets/teams/ceo.png';
import '../styles/Team.css'; // Create a Team.css for the styles

const Team = () => {
  return (
    <section className="team-section">

      <div className="ceo-container">
        <div className="ceo-image-wrapper">
          <img src={ceo} alt="CEO Grace James" className="ceo-image" />
        </div>
        <div className="ceo-text-wrapper">
          <p className="ceo-quote">
            "Africans are not consumers. In contrast, the African gaming industry is on the rise,
            transforming from a niche market into a powerhouse of creativity and innovation. Local developers
            are creating culturally rich and impactful games, showcasing immense potential for growth."
          </p>
          <div className="ceo-details">
            <h1 className="ceo-name">Grace James</h1>
            <p className="ceo-title">Founder GreenQuest</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Team;
