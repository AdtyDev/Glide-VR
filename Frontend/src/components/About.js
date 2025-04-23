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

      <div className="about-content hover-glow fade-in">
        <h2>Meet the Creators</h2>
        <ul className="creator-list">
          <li>Aditya Gupta</li>
          <li>Ahem Khanna</li>
          <li>Atharv Kalal</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
