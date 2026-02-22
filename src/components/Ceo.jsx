import React from 'react'
import '../styles/Ceo.css'
import member1 from '../assets/teams/Grace.jpg'   // Featured / CEO
import member2 from '../assets/teams/David.jpg'
import member3 from '../assets/teams/Kelvin.jpg'
import member4 from '../assets/teams/yvette.jpg'

const Ceo = () => {
  return (
    <div className='meettheteam'>

        <div className="leftnote">
            <div className="head">MEET OUR TEAM</div>
            <div className="headnote">
                We join hands to create a lasting impact on children all over the world.
            </div>
            <div className="headquote">
                "Climate change is the most significant thing humans have ever done on this planet.
                The only thing that needs to be bigger is our movement to stop it"
                <span> – Bill McKibben</span>
            </div>
        </div>

        <div className="images">
            {/* Featured CEO */}
            <div className="featured-container">
                <img src={member1} alt="Featured member" />
                <div className="overlay">
                    <h3>Grace</h3>
                    <p>CEO</p>
                </div>
            </div>

            {/* Bottom row members */}
            <div className="bottom-row">
                <div className="bottom-card">
                    <img src={member2} alt="Team member" />
                    <div className="overlay">
                        <h3>David</h3>
                        <p>CTO</p>
                    </div>
                </div>

                <div className="bottom-card">
                    <img src={member3} alt="Team member" />
                    <div className="overlay">
                        <h3>Kelvin</h3>
                        <p>CBDO</p>
                    </div>
                </div>

                <div className="bottom-card">
                    <img src={member4} alt="Team member" />
                    <div className="overlay">
                        <h3>Yvette</h3>
                        <p>Web Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ceo