"use client";

import { useEffect, useRef } from "react";
import {
  Instagram,
  Linkedin,
  Facebook,
  Github,
  Mouse,
  Download,
} from "lucide-react";

export default function Hero() {
  const typeTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Typing effect
    const words = ["Designer", "Developer", "Coder"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      const currentWord = words[wordIndex];

      if (typeTextRef.current) {
        if (isDeleting) {
          typeTextRef.current.textContent = currentWord.substring(
            0,
            charIndex - 1
          );
          charIndex--;
        } else {
          typeTextRef.current.textContent = currentWord.substring(
            0,
            charIndex + 1
          );
          charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      const speed = isDeleting ? 80 : 100;
      setTimeout(typeEffect, speed);
    };

    typeEffect();
  }, []);

  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Khang Nguyen</span>
        </div>
        <div className="featured-name">
          <p>
            I&apos;m{" "}
            <span ref={typeTextRef} className="typeText">
              Designer
            </span>
          </p>
        </div>
        <div className="featured-text-info">
          <p>
            Experienced frontend developer with a passion for creating visually
            stunning and user-friendly websites.
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn blue-btn">Hire me</button>
          <button className="btn">
            Download CV <Download className="w-4 h-4 ml-2" />
          </button>
        </div>
        <div className="social_icons">
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
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img
            src="/images/furina.jpg"
            alt="Khang Nguyen Avatar"
            className="profile-image"
          />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <Mouse size={20} />
          <p>Scroll down</p>
        </a>
      </div>
    </section>
  );
}
