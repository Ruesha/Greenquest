import React from 'react'
import '../styles/Ceo.css'
import member1 from '../assets/teams/Grace.jpg'
import member2 from '../assets/teams/David.jpg'
import member3 from '../assets/teams/Kelvin.jpg'
import member4 from '../assets/teams/yvette.jpg'

const Ceo = () => {
  return (
    <div className='meettheteam'>
        <div className="leftnote">
            <div className="head">
                MEET OUR TEAM
            </div>
            <div className="headnote">
                We join hands to create a lasting impact on children all over the world.
            </div>
            <div className="headquote">
                "Climate change is the most significant thing humans have ever done on this planet. The only thing that needs to be bigger is our movement to stop it" <span>- Bill McKibben</span>
            </div>
        </div>
      <div className="images">
        <img src={member1} alt="" width={30}/>
        <img src={member2} alt="" width={30}/>
        <img src={member3} alt="" width={30} />
        <img src={member4} alt="" width={30}/>
      </div>
    </div>
  )
}

export default Ceo
