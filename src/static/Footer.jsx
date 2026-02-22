import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram, FaTiktok, FaDiscord } from "react-icons/fa";
import logo from '../assets/logo.png';
import googleplay from '../assets/googleplay.png';
import appstore from '../assets/appstore.png';
import '../styles/Footer.css'; // import CSS

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      {/* Top Section */}
      <div className='footer-top'>
        {/* Left Section: Logo and Description */}
        <div className='footer-left'>
          <img src={logo} className='footer-logo' alt="GreenQuest Logo" />
          <p className='footer-desc'>
            At GreenQuest Innovations We don’t just imagine better futures; we help build them.
          </p>
        </div>

        {/* Right Section: App Download */}
        <div className='footer-right'>
          <h4>Download the app</h4>
          <div className='app-images'>
            <img src={appstore} className='appstore' alt="App Store" />
            <img src={googleplay} className='googleplay' alt="Google Play" />
          </div>
        </div>
      </div>

      {/* Social Media Links Section */}
      <div className='footer-socials'>
        <ul>
          <li>
            <a href='https://www.twitter.com/GreenQuestGame' target="_blank" rel="noreferrer">
              <FaTwitter className='social-icon' />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/greenquestinnovations?igsh=N3cyYnZ5aW9zMnRn&utm_source=qr' target="_blank" rel="noreferrer">
              <FaInstagram className='social-icon' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/company/greenquest/' target="_blank" rel="noreferrer">
              <FaLinkedinIn className='social-icon' />
            </a>
          </li>
          <li>
            <a href='https://www.tiktok.com/@greenquestgames?_t=ZM-8vapAgY3oYw&_r=1' target="_blank" rel="noreferrer">
              <FaTiktok className='social-icon' />
            </a>
          </li>
          <li>
            <a href='https://discord.com/invite/34JGRh38F4?fbclid=PAAaZ9q4IcgbN5XsoiGXKXiVhUiHziu-gR8qQGIoAgLEkxh_sfsVwYtrVwAFo' target='_blank' rel="noreferrer">
              <FaDiscord className='social-icon' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;