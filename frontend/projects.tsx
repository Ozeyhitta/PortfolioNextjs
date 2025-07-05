import { Briefcase, Users, Award } from "lucide-react";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
          <Briefcase size={50} />
          <h3>Completed</h3>
          <label>4+ Finished Projects</label>
        </div>
        <div className="project-box">
          <Users size={50} />
          <h3>Client</h3>
          <label>4+ Happy clients</label>
        </div>
        <div className="project-box">
          <Award size={50} />
          <h3>Experience</h3>
          <label>3 years in the field</label>
        </div>
      </div>
    </section>
  );
}
