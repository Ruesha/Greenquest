import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="Site Logo" width={55} />
        </div>

        {/* Desktop Nav */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <HashLink smooth to="/#home" onClick={closeMenu}>
            Home
          </HashLink>
          <HashLink smooth to="/#who" onClick={closeMenu}>
            Who We Are
          </HashLink>
          <HashLink smooth to="/#advocacy" onClick={closeMenu}>
            Learning Circle
          </HashLink>
          <HashLink smooth to="/#partners" onClick={closeMenu}>
            Our Partners
          </HashLink>
          <HashLink smooth to="/#games" onClick={closeMenu}>
            Our Games
          </HashLink>
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
  );
};

export default Header;