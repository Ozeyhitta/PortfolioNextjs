"use client";

import * as LucideIcons from "lucide-react";
import { useEffect, useState } from "react";
import { LucideProps } from "lucide-react"; // 👈 import type cho icon

interface Project {
  id: number;
  title: string;
  label: string;
  icon: string;
}

function kebabToPascalCase(str: string): string {
  return str
    .trim()
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.data))
      .catch((err) => console.error("Lỗi fetch project:", err));
  }, []);

  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        {projects.map(({ id, title, label, icon }) => {
          const iconKey = kebabToPascalCase(icon);
          const IconComponent = LucideIcons[
            iconKey as keyof typeof LucideIcons
          ] as React.FC<LucideProps>;

          return (
            <div className="project-box" key={id}>
              {IconComponent ? (
                <IconComponent size={50} />
              ) : (
                <LucideIcons.HelpCircle size={50} />
              )}
              <h3>{title}</h3>
              <label>{label}</label>
            </div>
          );
        })}
      </div>
    </section>
  );
}
