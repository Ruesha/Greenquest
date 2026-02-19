import React, { useState } from 'react'
import '../styles/Header.css'
import logo from '../assets/logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="nav-container">
        
        <div className="logo">
          <img src={logo} alt="Site Logo" width={55} />
        </div>

        {/* Desktop Nav */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" className="active">Home</a>
          <a href="#who">Who We Are</a>
          <a href="#advocacy">Advocacy Programme</a>
          <a href="#partners">Our Partners</a>
          <a href="#contact">Contact Us</a>
          <a href="#shop">Shop</a>
        </nav>

        {/* Hamburger */}
        <div 
          className={`hamburger ${menuOpen ? "open" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  )
}

export default Header
