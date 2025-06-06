import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    if (!email) {
      setMessage('Please enter your email.');
      return;
    }

    try {
      // Replace this with your actual API call
      setMessage('Thank you! You will receive the latest scam news weekly.');
      setEmail('');
    } catch (error) {
      setMessage('Subscription failed. Please try again later.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">

      

        <div className="newsletter">
        <div className="logo">
          <Link to="/">
            <img src="/scam-detectorlogo.png" alt="ScamDetector Logo" className="logo-icon" />
          </Link>
        </div>
          
          <div className="newsletter-input">
          <h2>Subscribe to our weekly newsletter</h2>
            <input
              type="email"
              placeholder="Your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="newsletter-input">
            <button onClick={handleSubscribe}>SUBSCRIBE</button>
          </div>
          </div>
          {message && <p className="subscribe-message">{message}</p>}
          
        </div>

        <div className="footer-links">
          <div className="link-section">
            <h3>For Consumers</h3>
            <ul>
              <li><Link to="/report-scam">Report a Scam</Link></li>
              <li><Link to="/money-back">How to get your money back</Link></li>
              <li><Link to="/app-extension">ScamAdviser App & Browser Extension</Link></li>
              <li><Link to="/recognize-scam">How to Recognize a Scam Website</Link></li>
              <li><Link to="/check-site">Check a site for me</Link></li>
            </ul>
          </div>
          <div className="link-section">
            <h3>For Businesses</h3>
            <ul>
              <li><Link to="/claim-website">Claim your Website</Link></li>
              <li><Link to="/api-feed">API & Data Feed</Link></li>
              <li><Link to="/install-logo">Install Our Logo</Link></li>
              <li><Link to="/partner">Become our Partner</Link></li>
              <li><Link to="/advertise">Advertise on ScamAdviser</Link></li>
            </ul>
          </div>
          <div className="link-section">
            <h3>About ScamAdviser</h3>
            <ul>
              <a href="/About"><li><Link to="/About">About Us</Link></li> </a>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/press">In the Press</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link> | 
          <Link to="/terms"> Terms & Conditions</Link> | 
          <Link to="/imprint"> Imprint</Link> | 
          <Link to="/disclaimer"> Disclaimer</Link> | 
          <Link to="/guidelines"> Content Guidelines</Link> | 
          <Link to="/notice-take-down"> Notice and Take Down</Link> | 
          <Link to="/sitemap"> Sitemap</Link> | 
          <strong> Copyright © 2025 ScamAdviser</strong>
        </p>
        <div className="social-icons">
          <span>🔴</span> <span>▶️</span> <span>🔗</span> <span>✈️</span> <span>🟢</span> <span>🏛️</span>
        </div>
        <p className="member">
          ScamAdviser is a member of <strong>GASA</strong><br />
          <span className="gasa-sub">Global Anti-Scam Alliance</span>
        </p>
        <p>Built with ❤️ using React, Spring Boot, and Firebase | © 2025 ScamDetector</p>
      </div>
    </footer>
  );
};

export default Footer;
