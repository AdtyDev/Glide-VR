import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1 className="page-title fade-in">About Us</h1>
      <p className="page-description fade-in">
        Learn about our vision and mission to bring VR to life.
      </p>
      <div className="about-content hover-glow slide-in">
        <h2>Our Vision</h2>
        <p>To create a world where virtual experiences are a part of everyday life.</p>
      </div>
    </div>
  );
};

export default About;
