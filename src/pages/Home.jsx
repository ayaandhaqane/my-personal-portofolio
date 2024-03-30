import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Bio from "../pages/Bio";
import Skills from "../pages/Skills";
import Project from "../pages/Project";
import Contact from "../pages/Contact";


const  Home = () => {
     return <div>
        {/* Hedear section */}
        {/* panner section */}
        <Header />
        <Banner />
        <Bio />
        <Skills /> 
        <Project />
        <Contact />
        
     </div>
}


export default Home;