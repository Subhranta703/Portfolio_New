import React from "react";
import "./Experience.css"; // Add styles

const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-title">Experience</h1>
      <div className="experience-list">

        {/* Warme Foundation */}
        <div className="experience-item">
                  <h2>Warme Foundation | Full Stack Developer Intern</h2>
                  <p className="date">July 2024 - Present</p>
                  <p><strong>Tech Stack:</strong> JavaScript, React.js, Node.js, Express.js, Tailwind CSS</p>
                  <ul>
                    <li>Developed and launched a responsive website from scratch.</li>
                    <li>Integrated a secure payment gateway and AI chatbot for automated support.</li>
                    <li>Optimized performance and enhanced user engagement.</li>
                  </ul>
        </div>

        {/* Medius AI */}
        <div className="experience-item">
          <h2>Medius AI | React JS Developer Intern</h2>
          <p className="date">May 2024 - July 2024</p>
          <p><strong>Tech Stack:</strong> JavaScript, React.js, Next.js, HTML, CSS</p>
          <ul>
            <li>Developed an innovative React web app with secure authentication and RESTful API integration.</li>
            <li>Built a responsive website from scratch, enhancing user experience.</li>
            <li>Offered technical guidance and resolved complex challenges.</li>
          </ul>
        </div>

        {/* InterstellarXR */}
        <div className="experience-item">
          <h2>InterstellarXR | Front-end Developer Intern</h2>
          <p className="date">Oct 2023 - Dec 2023</p>
          <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, Bootstrap</p>
          <ul>
            <li>Led the development of the company's website from inception.</li>
            <li>Transformed Figma designs into a fully functional site.</li>
            <li>Optimized performance and improved user experience.</li>
          </ul>
        </div>

        
      </div>
    </div>
  );
};

export default Experience;
