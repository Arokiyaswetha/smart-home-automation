import React from 'react';
import '../css/home.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      {/* Navigation Header */}
      <header className="homepage-header">
        <div className="logo">SMART AURA</div>
        <nav className="navbar">
          <a href="#overview">Overview</a>
          <a href="#features">Features</a>
          <a href="#service">Service</a>
          <a href="#about">About Us</a>
          <button className="signin-btn" onClick={() => navigate('/signin')}>Sign In</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1><span>Smart</span> <span className="highlight">Home</span> Automation</h1>
          <p className="tagline">“Control Your Home, Anytime. Anywhere”</p>
          <p className="description">
            Welcome to Smart Aura. Imagine walking into a home that lights up, adjusts the temperature,
            plays your favorite music, and locks the doors automatically — all without lifting a finger.
          </p>
          <p className="description">
            With Smart Aura, we bring this dream to life through smart technology that adapts to your lifestyle.
            From energy savings to total security, your home is now your intelligent partner.
          </p>
        </div>
        <div className="hero-image">
          {/* Optional: insert <img src="..." alt="Smart Home" /> here if you want to use your own image */}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <h2>Smart Features Built for You</h2>
        <div className="features-grid">
          <div className="feature-card"><h3>AI-Powered Automation</h3><p>Adjust lighting, temperature, and security based on behavior.</p></div>
          <div className="feature-card"><h3>Mobile App Control</h3><p>Control every device from your smartphone or tablet.</p></div>
          <div className="feature-card"><h3>Advanced Security</h3><p>Real-time alerts, smart locks, and surveillance.</p></div>
          <div className="feature-card"><h3>Cloud Access</h3><p>Store schedules and settings across all your devices.</p></div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="offer-section" id="service">
        <h2>What We Offer</h2>
        <div className="offer-grid">
          <div className="offer-card"><h3>Smart Lighting Installation</h3><p>“Adjust lighting, temperature, and security based on behavior”.</p></div>
          <div className="offer-card"><h3>Home Security Integration</h3><p>"Smart cameras, door locks, and alarm systems with 24/7 monitoring.”</p></div>
          <div className="offer-card"><h3>Energy Monitoring</h3><p>“Track and reduce energy usage with real-time data”</p></div>
          <div className="offer-card"><h3>Custom Automation Plans</h3><p>“Tailored solutions for your home layout and lifestyle”</p></div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <h2>About Us</h2>
        <p>
          We are a passionate team redefining how people interact with their homes.
          With years of experience in IoT and automation, our mission is to make smart living
          accessible and intuitive.
        </p>
      </section>

      {/* Footer */}
      <footer className="homepage-footer">
        <div className="footer-content">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Service</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>📞 +91-XXXXXXXXXX</li>
              <li>📧 support@yourdomain.com</li>
            </ul>
          </div>
          <div>
            <h4>Follow Us</h4>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="copyright">© 2025 Smart Aura. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default HomePage;
