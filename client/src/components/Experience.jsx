import React from "react";
import "./Experience.css"; // Updated styles

const Experience = () => {
  return (
    <section className="experience">
      <div className="container">
        <h1 className="experience-title">Experience</h1>
        <div className="experience-list">

          {/* Warme Foundation */}
          <div className="experience-item">
            <h2 className="position">Full Stack Developer Intern</h2>
            <h3 className="company">Warme Foundation</h3>
            <p className="date">July 2024 - Present</p>
            <p><b>Tech Stack:</b> JavaScript, React.js, Node.js, Express.js, Tailwind CSS</p>
            <ul>
              <li>Developed and launched a responsive website from scratch.</li>
              <li>Integrated a secure payment gateway and AI chatbot for automated support.</li>
              <li>Optimized performance and enhanced user engagement.</li>
            </ul>
          </div>

          {/* Medius AI */}
          <div className="experience-item">
            <h2 className="position">React JS Developer Intern</h2>
            <h3 className="company">Medius AI</h3>
            <p className="date">May 2024 - July 2024</p>
            <p><b>Tech Stack:</b> JavaScript, React.js, Next.js, HTML, CSS</p>
            <ul>
              <li>Developed an innovative React web app with secure authentication and RESTful API integration.</li>
              <li>Built a responsive website from scratch, enhancing user experience.</li>
              <li>Offered technical guidance and resolved complex challenges.</li>
            </ul>
          </div>

          {/* InterstellarXR */}
          <div className="experience-item">
            <h2 className="position">Front-end Developer Intern</h2>
            <h3 className="company">InterstellarXR</h3>
            <p className="date">Oct 2023 - Dec 2023</p>
            <p><b>Tech Stack:</b> HTML, CSS, JavaScript, Bootstrap</p>
            <ul>
              <li>Led the development of the company's website from inception.</li>
              <li>Transformed Figma designs into a fully functional site.</li>
              <li>Optimized performance and improved user experience.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
