import React, { useState, useEffect } from 'react';
import '../styles/Testimonial.css';

const testimonials = [
  {
    detail: 'I enjoyed playing the game and it was very innovative. I learned about keeping the environment clean and how best to recycle used products to make meaningful solutions.',
    name: 'Tofunmi Ogunde - Student, YCT Staff School'
  },
  {
    detail: 'I am glad an innovative game was shown to our students, indeed we can make our country better if children are being educated about climate change.',
    name: 'Mrs Isreal Tope - HeadMistress, Street 2 School School'
  },
  {
    detail: 'It was interesting and I learnt a lot, looking forward to the game coming LIVE.',
    name: 'Daniel Ishola - Student, YCT Staff School'
  },
  {
    detail: 'I cannot wait to be a game developer in order to design applications that will help people around me.',
    name: 'Daniel Ishola - Student, YCT Staff School'
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out (0.5s)
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % testimonials.length);
        setFade(true); // fade-in new testimonial
      }, 500); // fade duration
    }, 10000); // display each testimonial for 10s

    return () => clearInterval(interval);
  }, []);

  const t = testimonials[currentIndex];

  return (
    <div className="testimonial-wrapper">
      <div className="testhead">
        <h1>Testimonials</h1>
      </div>
      <div className={`testimonial-card ${fade ? 'fade-in' : 'fade-out'}`}>
        <p className="testimonial-detail">{t.detail}</p>
        <h4 className="testimonial-name">{t.name}</h4>
      </div>
    </div>
  );
};

export default Testimonial;