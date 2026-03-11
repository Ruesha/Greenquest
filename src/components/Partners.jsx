import React from "react";

import logo1 from "../assets/business_day_logo.png";
import logo2 from "../assets/dw_logo_1.png";
import logo3 from "../assets/ndes.png";
import logo4 from "../assets/theworldaround.png";
import logo6 from "../assets/FUZE-TALENT-SHOW-FOR-TECH-FOUNDERS.png";
import logo7 from "../assets/TBF.png";
import logo8 from "../assets/wmo1.png";
import logo5 from "../assets/Falling_walls.png";
import logo9 from "../assets/Prohelvetia.png";

import leaf from "../assets/whiteleaf.png";
import "../styles/Partners.css";

const Partners = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo6,
    logo7,
    logo8,
    logo5,
    logo9,
  ];

  return (
    <section id="partners" className="partners-section">
      <h3 className="partners-title">
        <img src={leaf} alt="" width={30} />
        Featured In
      </h3>

      <div className="carousel">
        <div className="logos">
          {/* first set */}
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="partner logo" />
          ))}

          {/* duplicate set for infinite loop */}
          {logos.map((logo, index) => (
            <img key={"dup" + index} src={logo} alt="partner logo" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;