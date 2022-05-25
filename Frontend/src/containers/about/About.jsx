import React from "react";
import Introduction from '../../containers/introduction/Introduction';
import Video from '../../containers/video/Video';


import "./about.css";

const About = () => (
    <div className="about">
        <div className="page">
    
        <Introduction />
        <Video />
        </div>
        </div>
  );
  
  export default About;