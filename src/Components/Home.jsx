import React from 'react';
import './Home.css';
import ScamChecker from './ScamChecker.jsx';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h2>Welcome to the Scam Detection Tool!</h2>
        <p>Your safety is our priority. With our tool, you can easily check if a website is a scam.</p>
      </header>

      {/* Main Scam Checker */}
      <ScamChecker />

      <section className="home-content">
        <h3>How it Works</h3>
        <p>
          Our application analyzes various factors of websites to determine if they might be fraudulent. 
          Simply enter the URL of the website you want to check, and we'll provide you with instant feedback.
        </p>

        <h3>Why Choose Us?</h3>
        <ul>
          <li>Fast and reliable analysis.</li>
          <li>Comprehensive reporting.</li>
          <li>User-friendly interface.</li>
          <li>Regular updates to ensure accuracy.</li>
        </ul>

        <h3>Get Started</h3>
        <p>
          Please visit our <a href="/login" className="link">Login</a> or <a href="/register" className="link">Register</a> page to start using our tool!
        </p>
      </section>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <h1>Your Anti-Scam Partner, Keeping You Safe!</h1>
          <p>Quick check for scams, and report scams with a single click to help protect others.</p>
          <button className="btn-primary btn-animate">Get Started</button>
        </section>

        {/* Learn About Scams */}
        <section className="learn-scams">
          {['Online Shopping', 'Financial Sites', 'Adult & Dating Sites', 'Gambling & Betting', 'Employment Sites', 'Entertainment Sites', 'All Reliable Sites'].map(title => (
            <div className="card" key={title}>{title}</div>
          ))}
        </section>

        {/* Scam Database */}
        <section className="database">
          {[
            { label: 'Sites in Database', value: '60,000,000' },
            { label: 'Scam Websites', value: '6,234,851' },
            { label: 'Visitors Last Day', value: '346,359' },
            { label: 'Sites Scanned Today', value: '230,000' },
            { label: 'Scams Reported Today', value: '9,228' },
          ].map(item => (
            <div className="stat-box" key={item.label}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </section>

        {/* Scam Alerts and Trends */}
        <section className="alerts-trends">
          <div className="alert">Someone Threatening to Leak Your Nudes?</div>
          <div className="trend">Scam Trends: Website checkers, fake PayPal scams, etc.</div>
          <div className="alert">Scam Alerts: Latest domains reported</div>
        </section>

        {/* Help and Popular Stories */}
        <section className="help-popular">
          <div className="help">
            <ul>
              <li>Scam Alerts</li>
              <li>Learn about scams</li>
              <li>Reliable sites</li>
              <li>Advice for companies</li>
              <li>Research & Reports</li>
              <li>Global Scam Country Guide</li>
            </ul>
          </div>
          <div className="popular">
            <h3>How to Recognize a Scam Website</h3>
            <p>Tips to identify suspicious online stores...</p>
            <h3>How Do I Get Money Back From a Scammer?</h3>
            <p>Practical steps to recover your funds...</p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mission">
          <div className="text">
            <p>ScamDetector’s mission is to protect consumers by providing reliable scam detection.</p>
            <a href="/About" className="">
              <button className="btn-secondary btn-animate">About ScamDetector</button>
            </a>
          </div>
          <div className="visual"></div>
        </section>

        {/* Press Mentions */}
        <section className="press">
          <h3>ScamDetector in the Press</h3>
          <div className="logos">
            {['TIME', 'Yahoo Finance', 'WTR', 'The Paypers', 'Global Cyber Alliance', 'About-Fraud'].map(name => (
              <div className="logo" key={name}>{name}</div>
            ))}
          </div>
        </section>

        {/* ScamDetector Data Services */}
        <section className="data-services">
          <p>ScamDetector offers services to help networks, agencies, and consumers...</p>
          <a href="/About" className="">
            <button className="btn-primary btn-animate">Read More</button>
          </a>
        </section>

        {/* Download App Section */}
        <section className="download-app">
          <div className="app-info">
            <h3>Download the ScamDetector App</h3>
            <p>Secure mobile browsing from scams</p>
          </div>
          <div className="app-links">
            <button className="btn-primary btn-animate">Google Play</button>
            <button className="btn-primary btn-animate">App Store</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
