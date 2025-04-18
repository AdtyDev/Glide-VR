import React from 'react';
import './Explore.css';

const Explore = () => {
  return (
    <div className="explore-page">
      <h1 className="page-title">Explore the Unknown</h1>
      <p className="page-description">
        Dive into uncharted realms of knowledge and experience virtual reality like never before.
      </p>
      <div className="explore-content">
        <div className="explore-section">
          <h2>Discover Worlds</h2>
          <p>Step into virtual landscapes and unlock hidden secrets of the digital frontier.</p>
        </div>
        <div className="explore-section">
          <h2>Interactive Challenges</h2>
          <p>Participate in engaging quests and compete with fellow explorers.</p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
