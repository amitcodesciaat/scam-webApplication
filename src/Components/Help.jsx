import React from 'react';
import './Help.css';

const Help = () => {
  return (
    <div className="help-wrapper">
      <div className="help-header">
        <h1>Help & Info</h1>
        <p>Your Digital Safety Guide — Learn, Detect & Stay Protected</p>
      </div>

      <div className="help-content">
        <section>
          <h2>🔍 How We Help</h2>
          <p>
            ScamDetector empowers users with tools and knowledge to fight online fraud. We analyze websites in real-time, detect suspicious patterns, and allow users to report scams to keep everyone safer.
          </p>
          <ul>
            <li>Instant website scam checks</li>
            <li>Fraud trend analysis</li>
            <li>Global user-submitted scam reports</li>
            <li>Educational guides and real-time alerts</li>
          </ul>
        </section>

        <section>
          <h2>🧠 Stay Aware, Stay Safe</h2>
          <p>
            With cyber threats increasing, being informed is your best defense. From phishing attempts to impersonation, our database grows daily to help you stay ahead.
          </p>
          <ul>
            <li>Think before clicking unknown links</li>
            <li>Never share sensitive info on suspicious calls or messages</li>
            <li>Use strong passwords and 2FA on every account</li>
          </ul>
        </section>

        <section>
          <h2>💀 Types of Online Threats</h2>
          <p>Here's what our system commonly detects:</p>
          <ul>
            <li><strong>Banking Fraud:</strong> Fake UPI requests, phishing portals, OTP theft</li>
            <li><strong>Identity Theft:</strong> Impersonation using leaked Aadhaar or PAN details</li>
            <li><strong>Emotional Scams:</strong> Romance-based blackmail, deepfake videos</li>
            <li><strong>Data Leaks:</strong> Unauthorized sharing of private photos/videos</li>
          </ul>
          <img
            src="/digital-threat.jpeg"
            alt="Digital Threats"
            className="help-image"
          />
        </section>

        <section>
          <h2>🌍 Help Others. Spread Awareness.</h2>
          <p>
            Reporting a scam is more than a personal action — it's a public service. When you report frauds or fake sites, you help others avoid them. Knowledge shared is danger reduced.
          </p>
          <p><strong>Let's build a secure internet together!</strong></p>
          <img
            src="/Secure.jpg"
            alt="Secure Internet"
            className="help-image"
          />
        </section>

      
      </div>
    </div>
  );
};

export default Help;
