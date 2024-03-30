import React from 'react';
import '../global.css'; // Make sure to create a corresponding CSS file

const PortfolioItem = ({ title, imageUrl, githubUrl }) => {
  return (
    <div className="portfolio-item">
      <div className="image-container">
        <img src={imageUrl} alt={title} className="portfolio-image" />
      </div>
      <h3 className="item-title">{title}</h3>
      <div className="buttons-container">
        <a href={githubUrl} className="btn github">GitHub</a>
        {/* <a href={demoUrl} className="btn live-demo">Live Demo</a> */}
      </div>
    </div>
  );
};

export default PortfolioItem;