import React from "react";
import img1 from "../assets/street2schools/GREENQUEST2.jpg";
import img2 from "../assets/street2schools/GREENQUEST11.jpg";
import img3 from "../assets/street2schools/GREENQUEST24.jpg";
import img4 from "../assets/street2schools/GREENQUEST32.jpg";
import img6 from "../assets/street2schools/GREENQUEST39.jpg";
import img7 from "../assets/street2schools/GREENQUEST46.jpg";
import img8 from "../assets/street2schools/GREENQUEST52.jpg";
import img9 from "../assets/street2schools/GREENQUEST55.jpg";
import img11 from "../assets/street2schools/GREENQUEST60.jpg";
import img12 from "../assets/street2schools/GREENQUEST62.jpg";
import img13 from "../assets/street2schools/street2schools1.jpg";

import s1 from "../assets/street2schools/street2schools1.jpg";
import s2 from "../assets/street2schools/street2schools2.jpg";
import s3 from "../assets/street2schools/street2schools3.jpg";
import s4 from "../assets/street2schools/street2schools4.jpg";
import s5 from "../assets/street2schools/street2schools5.jpg";
import s6 from "../assets/street2schools/street2schools6.jpg";
import s7 from "../assets/street2schools/street2schools7.jpg";
import s8 from "../assets/street2schools/street2schools8.jpg";
import s9 from "../assets/street2schools/street2schools9.jpg";
import s10 from "../assets/street2schools/street2schools10.jpg";
import s11 from "../assets/street2schools/street2schools11.jpg";
import s12 from "../assets/street2schools/street2schools12.jpg";
import s13 from "../assets/street2schools/street2schools13.jpg";
import s14 from "../assets/street2schools/street2schools14.jpg";
import s15 from "../assets/street2schools/street2schools15.jpg";
import s16 from "../assets/street2schools/street2schools16.jpg";
import s17 from "../assets/street2schools/street2schools17.jpg";

import "../styles/Advocacy.css";

const Advocacy = () => {
  const images = [
    img1, img2, img3, img4, img6, img7, img8, img9,
    img11, img12, img13,
    s1, s2, s3, s4, s5, s6, s7, s8, s9,
    s10, s11, s12, s13, s14, s15, s16, s17
  ];

  // Duplicate images for infinite effect
  const infiniteImages = [...images, ...images];

  return (
    <div className="advocacy-section">
      <div className="advocacy-text">
        <h2>LEARNING CIRCLE</h2>

        <p>
          Our advocacy program brings our games into real communities through
          workshops, storytelling, and environmental action.
        </p>

        <p>
          We’ve reached thousands of children across West Africa, helping them
          see their stories and dreams matter.
        </p>
      </div>

      {/* Infinite Gallery */}
      <div className="infinite-gallery">
        <div className="gallery-track">
          {infiniteImages.map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt={`gallery-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advocacy;
