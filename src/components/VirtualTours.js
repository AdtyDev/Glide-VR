import React from 'react';
import './VirtualTours.css';

const VirtualTours = () => {
  return (
    <div className="virtual-tours-page">
      <h1 className="page-title fade-in">Virtual Tours</h1>
      <p className="page-description fade-in">
        Explore iconic landmarks in the most immersive way.
      </p>
      <div className="tours-grid">
        <div className="tour-card hover-glow slide-in">
          <h2>Eiffel Tower</h2>
          <p>Ascend the tower and take in the breathtaking views of Paris.</p>
        </div>
        <div className="tour-card hover-glow slide-in">
          <h2>Great Wall of China</h2>
          <p>Walk along this magnificent wonder from your living room.</p>
        </div>
      </div>
    </div>
  );
};

export default VirtualTours;
