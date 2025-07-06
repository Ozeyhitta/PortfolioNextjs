"use client";
import { useEffect, useState } from "react";
import { Instagram, Linkedin, Facebook, Github } from "lucide-react";

interface FooterData {
  name: string;
  Github: string;
  Facebook: string;
  Instagram: string;
  Linkedin: string;
}

export default function Footer() {
  const [data, setData] = useState<FooterData | null>(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/footer?populate=*"
        ); // Cập nhật URL nếu cần
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error("Failed to fetch footer data:", error);
      }
    };

    fetchFooterData();
  }, []);

  if (!data) return <footer>Loading...</footer>;

  return (
    <footer>
      <div className="top-footer">
        <p>{data.name}</p>
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
          href={`https://${data.Instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <Instagram size={20} />
        </a>
        <a
          href={`https://${data.Linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <Linkedin size={20} />
        </a>
        <a
          href={`https://${data.Facebook}`}
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <Facebook size={20} />
        </a>
        <a
          href={`https://${data.Github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <Github size={20} />
        </a>
      </div>
      <div className="bottom-footer">
        <p>
          Copyright &copy;{" "}
          <a href="#home" style={{ textDecoration: "none" }}>
            {data.name}
          </a>{" "}
          - All rights reserved
        </p>
      </div>
    </footer>
  );
}
