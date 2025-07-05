"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

interface HeaderData {
  name: string;
  cv: {
    url: string;
  }[];
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/header?populate=*");
        const json = await res.json();
        const data = json.data;
        setHeaderData({
          name: data.Name,
          cv: data.cv || [],
        });
      } catch (err) {
        console.error("Error fetching header data:", err);
      }
    };
    fetchHeaderData();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="header" className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">
        <p className="nav-name">{headerData?.name || "..."}</p>
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
        <a
          className="btn flex items-center"
          href={
            headerData?.cv?.[0]?.url
              ? `http://localhost:1337${headerData.cv[0].url}`
              : "#"
          }
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV <Download className="w-4 h-4 ml-2" />
        </a>
      </div>

      <div className="nav-menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
    </nav>
  );
}
