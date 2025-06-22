"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="header" className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">
        <p className="nav-name">Khang</p>
        <span>.</span>
      </div>

      <div className={`nav-menu ${isMenuOpen ? "responsive" : ""}`}>
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a
              href="#home"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a
              href="#about"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a
              href="#projects"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a
              href="#contact"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="circle"></div>
          </li>
        </ul>
      </div>

      <div className="nav-button">
        <button className="btn">
          download CV <Download className="w-4 h-4 ml-2" />
        </button>
      </div>

      <div className="nav-menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
    </nav>
  );
}
