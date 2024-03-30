import React from "react";


function Bio (){
    return(
    <div id="bio" className="bio">
      <div className="about-me-container">
      <div className="sidebar">
        <img src= "imge.png" alt="Patrycja" className="pic" />
        <h3>HELLO, I'M AYAAN</h3>
        <p>I am a skilled programmer specializing in large-scale system development and architecture, proficient in Python, Java, React, and JavaScrip</p>
        <div className="social-links">
          <img src="fb.png" alt="Facebook" />
          <img src= "X.png" alt="Twitter" />
          <img src="insta.png" alt="Instagram" />
        </div>
      </div>
      <div className="about">
        <h1>About Me</h1>
        <p>
        I am a student with a keen interest in coding, stemming from a curiosity about
         how technology shapes our world. My educational journey, enriched with courses in 
         mathematics and computer science, has equipped me with a solid foundation in logical thinking
          and problem-solving. Outside of academics, I am passionate about exploring new technologies, 
          participating in coding challenges, and contributing to open-source projects. This blend of 
          education and hands-on 
        experience sparked my fascination with coding and its potential to create innovative solutions.
        I am a student with a keen interest in coding, stemming from a curiosity about
         how technology shapes our world. My educational journey, enriched with courses in 
         mathematics and computer science, has equipped me with a solid foundation in logical thinking
          and problem-solving. Outside of academics, I am passionate about exploring new technologies, 
          participating in coding challenges, and contributing to open-source projects. This blend of 
          education and hands-on 
        experience sparked my fascination with coding and its potential to create innovative solutions
        </p>
        <button className="contact-btn">CONTACT ME</button>
      </div>
    </div>
    </div>
    
    )
}

export default Bio