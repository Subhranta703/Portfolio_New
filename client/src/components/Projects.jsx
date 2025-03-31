import "./Projects.css";

const projects = [
  {
    name: "Student Hub (AI Hackathon Project)",
    description: "An AI-powered student tool featuring text-to-audio, document summarization, AI chatbot, attendance tracking, and task management.",
    link: "https://github.com/Subhranta703/hack_suiit",
  },
  {
    name: "Ubuntu-Web (Virtual Platform)",
    description: "A virtual platform designed to enhance collaboration and productivity.",
    link: "https://github.com/Subhranta703/ubuntu-WebS",
  },
  {
  
    name: "Library Management System",
    description: "A full-stack system with real-time updates, utilizing REST APIs and MongoDB.",
    link: "https://github.com/Subhranta703/Library_",
  },

];

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="projects-title">Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
