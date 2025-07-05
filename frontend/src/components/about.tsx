"use client";

import { Download } from "lucide-react";
import { useEffect, useState } from "react";

interface RichTextNode {
  type: string;
  children: { type: string; text: string }[];
}
interface AboutData {
  description: RichTextNode[];
  frontend: string[];
  backend: string[];
  database: string[];
  cv: { url: string }[];
}

export default function About() {
  const [about, setAbout] = useState<AboutData | null>(null);
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/about?populate=*");
        const json = await res.json();
        console.log(json);
        const data = json.data;
        console.log(json);
        setAbout({
          description: data.description || [],
          frontend: data.frontend || [],
          backend: data.backend || [],
          database: data.database || [],
          cv: data.cv || [],
        });
      } catch (error) {
        console.error("Failed to fetch about data", error);
      }
    };
    fetchAbout();
  }, []);

  const renderDescription = () => {
    if (!Array.isArray(about?.description)) return null;

    return about?.description.map((block, i) => {
      if (block.type === "paragraph") {
        return (
          <p key={i}>
            {block.children.map((child, j) => (
              <span key={j}>{child.text}</span>
            ))}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <div>{renderDescription()}</div>
            <div className="about-btn">
              <a
                className="btn flex items-center"
                href={
                  about?.cv?.[0]?.url
                    ? `http://localhost:1337${about.cv[0].url}`
                    : "#"
                }
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV <Download className="w-3 h-3 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              {about?.frontend.map((skill, idx) => (
                <span key={idx}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Backend</h3>
            </div>
            <div className="skills-list">
              {about?.backend.map((skill, idx) => (
                <span key={idx}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">
              {about?.database.map((skill, idx) => (
                <span key={idx}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
