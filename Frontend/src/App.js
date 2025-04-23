import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import RegisterPage from './components/RegisterPage';
import Loginpage from './components/Loginpage';
import Destinations from './components/Destinations';
import Explore from './components/Explore';
import VirtualTours from './components/VirtualTours';
import Community from './components/Community';
import About from './components/About';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/virtual-tours" element={<VirtualTours />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
