import React from 'react'
import logo1 from '../assets/business_day_logo.png'
import logo2 from '../assets/dw_logo_1.png'
import logo3 from '../assets/ndes.png'
import logo4 from '../assets/theworldaround.png'
import logo5 from '../assets/globalsoln.png'
import logo6 from '../assets/FUZE-TALENT-SHOW-FOR-TECH-FOUNDERS.png'
import logo7 from '../assets/TBF.png'
import logo8 from '../assets/wmo1.png'
import "../styles/Partners.css"
import leaf from '../assets/whiteleaf.png'

const Partners = () => {
  return (
    <div className="partners-section">
      <h3 className="partners-title">
       <img src={leaf} alt="" width={30} /> Featured In
      </h3>

      <div className="logos">
        <img src={logo1} alt="Business Day" className="partner-logo large" />
        <img src={logo2} alt="DW" className="partner-logo" />
        <img src={logo3} alt="NDES" className="partner-logo" />
        <img src={logo4} alt="The World Around" className="partner-logo" />
        <img src={logo5} alt="Global Soln" className="partner-logo" />
        <img src={logo6} alt="Fuze Talent Show" className="partner-logo" />
        <img src={logo7} alt="TBF" className="partner-logo" />
        <img src={logo8} alt="WMO" className="partner-logo" />
      </div>
    </div>
  )
}

export default Partners
