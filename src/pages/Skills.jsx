import React from 'react'
import { FaCode, FaServer, FaTools, FaUserFriends } from 'react-icons/fa'; // Example icons


function Skills() {

 const skills = [
    { name: 'HTML', level: 100 },
    { name: 'JAVA', level: 95 },
    { name: 'Python', level: 80 },
    { name: 'C#    ', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'CSS  ', level: 70 },
    { name: 'React', level: 40 },
  ];

  return (
    <div id='skills' className="technologies">
      <h2>MY SKILLS</h2>
      {skills.map((skill) => (
        <div className="skill-row" key={skill.name}>
          <div className="skill-name">{skill.name}</div>
          <div className="progress-bar-background">
            <div className="progress-bar" style={{ width: `${skill.level}%` }}></div>
          </div>
          <div className="skill-level ">{skill.level}%</div>
          
        </div>
      ))}
    </div>
  )
}

export default Skills;