import React from 'react';
import Navbar from './Navbar';
import './Homepage.css';

const Homepage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="hero-section" id="home">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">Step Into the Future</h1>
          <p className="hero-subtitle">
            Immerse yourself in virtual experiences like never before.
          </p>
          <button className="cta-button pulse-animation">
          <a href="#get-started">Get Started</a>
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="features" id="features">
        <h2 className="section-title glow-animation">Our Features</h2>
        <div className="feature-list">
          <div className="feature-item hover-scale">
            <img src="/images/immersive.svg" alt="Immersive" />
            <h3>Immersive VR</h3>
            <p>Feel truly connected to the world around you.</p>
          </div>
          <div className="feature-item hover-scale">
            <img src="/images/interactive.svg" alt="Interactive" />
            <h3>Interactive Tours</h3>
            <p>Explore famous landmarks with engaging narratives.</p>
          </div>
          <div className="feature-item hover-scale">
            <img src="/images/accessibility.svg" alt="Accessible" />
            <h3>Global Accessibility</h3>
            <p>Seamlessly access experiences from any device.</p>
          </div>
        </div>
      </section>
      {/* AI-Powered Assistant Section */}
      <section className="ai-assistant" id="ai-assistant">
        <h2 className="section-title glow-animation">AI-Powered Assistant</h2>
        <p>Get real-time assistance during your exploration journey with our AI-powered virtual guide.</p>
        <button className="cta-button hover-glow">Ask for Help</button>
      </section>

      {/* Live Chat Section */}
      <section className="live-chat" id="live-chat">
        <h2 className="section-title glow-animation">Live Chat Support</h2>
        <p>Need assistance? Chat with a live expert anytime, anywhere.</p>
        <button className="cta-button hover-glow">Start Chat</button>
      </section>

      {/* 3D World Experience Section */}
      <section className="three-d-world" id="three-d-world">
        <h2 className="section-title glow-animation">3D World Experience</h2>
        <p>Step into a fully immersive 3D environment and explore the world like never before.</p>
        <button className="cta-button hover-glow">Explore Now</button>
      </section>

      {/* Preview Section */}
      <section className="preview" id="preview">
        <h2 className="section-title glow-animation">Preview Our World</h2>
        <div className="carousel">
          <img src="/images/preview1.jpg" alt="Preview 1" className="carousel-image hover-glow" />
          <img src="/images/preview2.jpg" alt="Preview 2" className="carousel-image hover-glow" />
          <img src="/images/preview3.jpg" alt="Preview 3" className="carousel-image hover-glow" />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2 className="section-title glow-animation">How It Works</h2>
        <div className="steps">
          <div className="step zoom-in">
            <h3>Step 1</h3>
            <p>Select your destination</p>
          </div>
          <div className="step zoom-in">
            <h3>Step 2</h3>
            <p>Use a VR headset or view on your screen</p>
          </div>
          <div className="step zoom-in">
            <h3>Step 3</h3>
            <p>Experience and Explore</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title glow-animation">User Reviews</h2>
        <div className="testimonials-list">
          <div className="testimonial hover-scale">
            <p>"I felt like I was actually there. Amazing experience!"</p>
            <h4>- Alex Johnson</h4>
          </div>
          <div className="testimonial hover-scale">
            <p>"An incredible way to explore the world from home."</p>
            <h4>- Priya Sharma</h4>
          </div>
          <div className="testimonial hover-scale">
            <p>"The level of detail is mind-blowing!"</p>
            <h4>- Michael Lee</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <p>© 2024 Virtual World Explorer</p>
          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
