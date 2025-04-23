import React, { useState } from 'react';
import './Destinations.css';

const destinations = [
  {
    name: 'Taj Mahal',
    description: 'A magnificent symbol of love in Agra, India.',
    image: '/images/taj-mahal.jpg',
  },
  {
    name: 'Christ the Redeemer',
    description: 'The iconic statue overlooking Rio de Janeiro, Brazil.',
    image: '/images/christ-redeemer.jpg',
  },
  {
    name: 'Machu Picchu',
    description: 'The mystical Incan city in the Peruvian Andes.',
    image: '/images/machu-picchu.jpg',
  },
  {
    name: 'Petra',
    description: 'An archaeological wonder carved into rock in Jordan.',
    image: '/images/petra.jpg',
  },
  {
    name: 'Colosseum',
    description: 'A historical amphitheater in Rome, Italy.',
    image: '/images/colosseum.jpg',
  },
  {
    name: 'Great Wall of China',
    description: 'An ancient series of walls and fortifications in China.',
    image: '/images/great-wall.jpg',
  },
  {
    name: 'Chichen Itza',
    description: 'A Mayan archaeological site in Mexico.',
    image: '/images/chichen-itza.jpg',
  },
  // Add more destinations if needed
];

const Destinations = () => {
  const [showViewer, setShowViewer] = useState(false);
  const [iframeUrl, setIframeUrl] = useState('');

  const handleCardClick = async (dest) => {
    try {
      console.log(`Fetching video for: ${dest.name}`);
      const response = await fetch(`http://localhost:5000/api/videos/${encodeURIComponent(dest.name)}`);
      if (!response.ok) throw new Error('Video not found');
      
      const data = await response.json();
      console.log('Received data:', data);
  
      if (data.url) {
        window.open(data.url, '_blank'); // Open the 360 view URL in a new tab
      } else {
        throw new Error('Invalid 360 view URL');
      }
    } catch (err) {
      console.error('Error fetching 360 view URL:', err);
      alert('Could not load the 360 view. Please try again.');
    }
  };
  

  const handleClose = () => {
    setShowViewer(false);
    setIframeUrl('');
  };

  return (
    <div className="destinations-page">
      <h1 className="page-title">Explore the Wonders</h1>
      <p className="page-description">
        Discover the most fascinating destinations from around the world.
      </p>

      <div className="card-container">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="destination-card"
            onClick={() => handleCardClick(dest)}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-image" style={{ backgroundImage: `url(${dest.image})` }}></div>
            <div className="card-content">
              <h2 className="wonder-name">{dest.name}</h2>
              <p className="wonder-description">{dest.description}</p>
            </div>
          </div>
        ))}
      </div>

      {showViewer && (
        <div className="fullscreen-iframe">
          <button className="close-btn" onClick={handleClose}>✕</button>
          <iframe
            src={iframeUrl}
            title="360 View"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default Destinations;
