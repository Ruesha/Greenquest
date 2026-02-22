import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram, FaTiktok, FaDiscord } from "react-icons/fa";
import '../styles/Socials.css'; // import the CSS

const Socials = () => {
  return (
    <div className='socials-wrapper'>
        <ul className='socials-list'>
            <li><a href='https://www.twitter.com/GreenQuestGame' target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
            <li><a href='https://www.instagram.com/greenquestinnovations?igsh=N3cyYnZ5aW9zMnRn&utm_source=qr' target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            <li><a href='https://www.linkedin.com/company/greenquest/' target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
            <li><a href='https://www.tiktok.com/@greenquestgames?_t=ZM-8vapAgY3oYw&_r=1' target="_blank" rel="noopener noreferrer"><FaTiktok /></a></li>
            <li><a href='https://discord.com/invite/34JGRh38F4?fbclid=PAAaZ9q4IcgbN5XsoiGXKXiVhUiHziu-gR8qQGIoAgLEkxh_sfsVwYtrVwAFo' target="_blank" rel="noopener noreferrer"><FaDiscord /></a></li>
        </ul> 
    </div>
  );
};

export default Socials;