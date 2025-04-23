import React from 'react';
import './Community.css';

const Community = () => {
  return (
    <div className="community-page">
      <h1 className="page-title fade-in">Join the VR Community</h1>
      <p className="page-description fade-in">
        Connect, share, and grow with fellow enthusiasts.
      </p>
      <div className="community-sections">
        <div className="community-card hover-glow slide-in">
          <h2>Discussions</h2>
          <p>Engage in thought-provoking conversations about VR.</p>
        </div>
        <div className="community-card hover-glow slide-in">
          <h2>Events</h2>
          <p>Join live events and meet like-minded individuals.</p>
        </div>
      </div>
    </div>
  );
};

export default Community;
