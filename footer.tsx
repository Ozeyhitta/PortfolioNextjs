import { Instagram, Linkedin, Facebook, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="top-footer">
        <p>Khang Nguyen</p>
      </div>
      <div className="middle-footer">
        <ul className="footer-menu">
          <li className="footer_menu_list">
            <a href="#home">Home</a>
          </li>
          <li className="footer_menu_list">
            <a href="#about">About</a>
          </li>
          <li className="footer_menu_list">
            <a href="#projects">Projects</a>
          </li>
          <li className="footer_menu_list">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-social-icons">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <Instagram size={20} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <Facebook size={20} />
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <Github size={20} />
        </a>
      </div>
      <div className="bottom-footer">
        <p>
          Copyright &copy;
          <a href="#home" style={{ textDecoration: "none" }}>
            Khang Nguyen
          </a>
          - All rights reserved
        </p>
      </div>
    </footer>
  );
}
