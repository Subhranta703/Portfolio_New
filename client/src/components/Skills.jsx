import "./Skills.css";

const skills = ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "JavaScript", "Git & GitHub"];

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill">{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
