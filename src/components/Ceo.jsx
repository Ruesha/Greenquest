import React from 'react'
import '../styles/Ceo.css'

import member1 from '../assets/teams/Grace.jpg'
import member2 from '../assets/teams/David.jpg'
import member3 from '../assets/teams/Kelvin.jpg'

const Ceo = () => {
  return (
    <div className='meettheteam'>

      {/* LEFT TEXT */}
      <div className="leftnote">

        <div className="head">MEET OUR TEAM</div>

        <div className="headnote">
          A team of Genz's passionate about change.
        </div>

        <div className="headquote">
          "Climate change is the most significant thing humans have ever done on this planet.
          The only thing that needs to be bigger is our movement to stop it"
          <span> – Bill McKibben</span>
        </div>

      </div>

      {/* RIGHT IMAGES */}
      <div className="images">

        {/* CEO */}
        <div className="featured-container">
          <img src={member1} alt="Grace" />
          <div className="overlay">
            <h3>Grace</h3>
            <p>CEO</p>
          </div>
        </div>

        {/* CTO */}
        <div className="bottom-card">
          <img src={member2} alt="David" />
          <div className="overlay">
            <h3>David</h3>
            <p>CTO</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Ceo