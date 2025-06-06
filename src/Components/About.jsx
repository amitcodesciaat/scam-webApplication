import React from 'react';
import './About.css'; // Link your styles

const About = () => {
  return (
    <div className="about-container">
      <header className="about-hero">
        <h1>About ScamDetector</h1>
        <p>Your Shield Against Online Deception</p>
      </header>

      <section className="about-intro">
        <h2>Why Scam Detection Matters in 2025</h2>
        <p>
          In a world where over <strong>6 million scam websites</strong> are lurking online, the need for real-time scam detection has never been more critical. From phishing pages to fake e-commerce stores, scammers are constantly evolving their tactics. <strong>ScamDetector</strong> was born to combat this rising threat and protect users like you from becoming victims.
        </p>
      </section>

      <section className="real-world-scam">
        <h2>Real-World Scam Example</h2>
        <p>
          Earlier this year, a popular fake investment platform promised users up to 300% returns in crypto. Thousands of people invested—only to find the site gone overnight. This type of scam has caused billions in losses. ScamDetector helps identify such fraudulent patterns and flags them before users fall into the trap.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          ScamDetector was created in 2025 by passionate developers learning modern technologies like <strong>React</strong> and <strong>Spring Boot</strong>. Integrated with <strong>Firebase</strong> for real-time data and user authentication, this project is more than just a technical experiment—it's a tool built with heart to help millions stay safe online.
        </p>
      </section>

      <section className="about-how-it-works">
        <h2>How ScamDetector Works</h2>
        <ul>
          <li>✅ Analyze domain age, reputation, and SSL status.</li>
          <li>✅ Leverage AI & rules to detect suspicious behavior.</li>
          <li>✅ Store and retrieve scam data using Firebase.</li>
          <li>✅ Let users check or report scams with ease.</li>
        </ul>
      </section>

      <section className="tech-stack">
        <h2>Built With ❤️ & Tech</h2>
        <p>This platform is proudly built with the following technologies:</p>
        <div className="tech-icons">
          <span>⚛️ React</span>
          <span>☕ Spring Boot</span>
          <span>🔥 Firebase</span>
          <span>📡 REST APIs</span>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Be Scam Aware. Stay Informed.</h2>
        <p>
          Use ScamDetector to check unknown sites, report suspicious links, and subscribe to weekly scam alerts. Help us build a safer digital world—one check at a time.
        </p>
        <button className="cta-button">Explore ScamDetector</button>
      </section>
    </div>
  );
};

export default About;
