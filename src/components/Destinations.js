import React from 'react';
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
];

const Destinations = () => {
  return (
    <div className="destinations-page">
      <h1 className="page-title">Explore the Wonders</h1>
      <p className="page-description">
        Discover the most fascinating destinations from around the world.
      </p>
      <div className="card-container">
        {destinations.map((dest, index) => (
          <div key={index} className="destination-card">
            <div className="card-image" style={{ backgroundImage: `url(${dest.image})` }}></div>
            <div className="card-content">
              <h2 className="wonder-name">{dest.name}</h2>
              <p className="wonder-description">{dest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
