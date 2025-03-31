import "./Skills.css";

const skills = [
  "JavaScript", "Java", "Python", "C", "HTML", "CSS",
  "React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap",
  "MongoDB", "PostgreSQL", "MySQL",
  "Git & GitHub", "VS Code", "Postman", "Command Line",
  "Data Structures & Algorithms", "OOPs", "Operating System"
];

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
