import React from 'react';
import PortfolioItem from '../components/PortfolioItem';

function Project() {
  // Replace these with your actual project details
  const projects = [
    {
      title: 'Personal-Portfolio',
      imageUrl: 'react.jpg',
      githubUrl: 'https://github.com/your-github',
      demoUrl: 'https://your-live-demo.com'
    },
    // ... other projects
  ];
  
  const project = [
    {
      title: 'Send Email project',
      imageUrl: 'java.jpg',
      githubUrl: 'https://github.com/ayaandhaqane',
    },
    // ... other projects
  ];
  const project2 = [
    {
      title: 'Library Book',
      imageUrl: 'csharp.jpg',
      githubUrl: 'https://github.com/ayaandhaqane',
    },
    // ... other projects
  ];
  const projectss = [
    {
      title: 'Face-Attendance',
      imageUrl: 'csharp.jpg',
      githubUrl: 'https://github.com/ayaandhaqane',
    },
    // ... other projects
  ];

  return (
    <div id='project' className="App">
        <div>
          <h1>Projects</h1>
        </div>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <PortfolioItem
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
      <div className="portfolio-container">
        {project.map((projectt, index) => (
          <PortfolioItem
            key={index}
            title={projectt.title}
            imageUrl={projectt.imageUrl}
            githubUrl={projectt.githubUrl}
            demoUrl={projectt.demoUrl}
          />
        ))}
      </div>
      <div className="portfolio-container">
        {projectss.map((projec, index) => (
          <PortfolioItem
            key={index}
            title={projec.title}
            imageUrl={projec.imageUrl}
            githubUrl={projec.githubUrl}
            demoUrl={projec.demoUrl}
          />
        ))}
      </div>
      <div className="portfolio-container">
        {project2.map((project, index) => (
          <PortfolioItem
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;


 