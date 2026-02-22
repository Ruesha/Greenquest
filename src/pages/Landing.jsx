import React from 'react'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import Aboutus from '../components/Aboutus'
import Trailer from '../components/Trailer'
import Advocacy from '../components/Advocacy'
import VoteBattleCards from '../components/Votes'
import Team from '../components/Team'
import Ceo from '../components/Ceo'
import Waitlist from '../components/Waitlist'
import Socials from '../components/Socials'
import Footer from '../static/Footer'
import Testimonial from '../components/Testimonial'
const Landing = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <Aboutus />
      <Trailer />
      <Advocacy />
      <VoteBattleCards />
      <Team />
      <Ceo /> 
      <Waitlist />
      <Socials />
      <Testimonial />
      <Footer />

    </div>
  )
}

export default Landing
