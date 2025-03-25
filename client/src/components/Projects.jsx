import "./Projects.css";

const projects = [
  { name: "Library Management System", link: "#" },
  { name: "Mental Health & Well-being Companion", link: "#" },
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.name}</h3>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
