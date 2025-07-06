"use client";

import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="section" id="contact">
      <div className="top-header">
        <h1>Get in touch</h1>
        <span>Do you have a project in your mind, contact me here</span>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <h2>
              Find Me <span className="arrow">↘</span>
            </h2>
            <p>
              <Mail size={18} /> Email: mkhang778@gmail.com
            </p>
            <p>
              <Phone size={18} /> Tel: +84 842 170 204
            </p>
          </div>
        </div>
        <div className="col">
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="form-inputs">
              <input
                type="text"
                name="name"
                className="input-field"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                className="input-field"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="text-area">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-button">
              <button type="submit" className="btn">
                Send <Send size={18} className="ml-2 -rotate-45" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
