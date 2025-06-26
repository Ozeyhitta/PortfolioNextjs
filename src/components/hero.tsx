"use client";

import { useEffect, useRef, useState } from "react";

import {
  Instagram,
  Linkedin,
  Facebook,
  Github,
  Mouse,
  Download,
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const typeTextRef = useRef<HTMLSpanElement>(null);
  const [heroData, setHeroData] = useState({
    Name: "",
    Description: "",
    Instagram: "",
    LinkedIn: "",
    Facebook: "",
    github: "",
    Avatar: { url: "" },
    cv: [{ url: "" }],
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Fetch data from Strapi API
    const fetchHeroData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/hero?populate=*"
        );
        const { data } = await response.json();
        setHeroData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchHeroData();
  }, []);

  useEffect(() => {
    if (!isMounted) return;
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
  }, [isMounted]);

  if (!isMounted) return null;

  if (!heroData || !heroData.Name) return null;
  console.log(heroData.github);
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>{heroData.Name}</span>
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
          <p>{heroData.Description}</p>
        </div>
        <div className="featured-text-btn">
          <button className="btn blue-btn">Hire me</button>
          <a
            href={`http://localhost:1337${heroData.cv[0].url}`}
            className="btn flex items-center"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV <Download className="w-4 h-4 ml-2" />
          </a>
        </div>
        <div className="social_icons">
          {heroData.Instagram && (
            <a
              href={
                heroData.Instagram.startsWith("http")
                  ? heroData.Instagram
                  : `https://${heroData.Instagram}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <Instagram size={20} />
            </a>
          )}
          {heroData.LinkedIn && (
            <a
              href={
                heroData.LinkedIn.startsWith("http")
                  ? heroData.LinkedIn
                  : `https://${heroData.LinkedIn}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <Linkedin size={20} />
            </a>
          )}
          {heroData.Facebook && (
            <a
              href={
                heroData.Facebook.startsWith("http")
                  ? heroData.Facebook
                  : `https://${heroData.Facebook}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <Facebook size={20} />
            </a>
          )}

          {heroData.github && (
            <a
              href={
                heroData.github.startsWith("http")
                  ? heroData.github
                  : `https://${heroData.github}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <Image
            src={
              heroData.Avatar?.url
                ? `http://localhost:1337${heroData.Avatar.url}`
                : "/images/furina.jpg"
            }
            alt={`${heroData.Name} Avatar`}
            width={300}
            height={300}
            className="profile-image"
            priority
            unoptimized
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
