import React from 'react';
import './Report.css';

const Report = () => {
  return (
    <div className="report-container">
      <header className="report-hero">
        <h1>Report a Scam</h1>
        <p>Stand up against online fraud and protect yourself and others.</p>
      </header>

      <section className="report-intro">
        <img
          src="/Report.jpg"
          alt="Scam Alert"
          className="report-image"
        />
        <p>
          If you've been scammed, threatened, or have information about a fraudulent website, it's important to take immediate action. This page will guide you on how to report such incidents to the right authorities.
        </p>
      </section>

      <section className="report-types">
        <h2>Scams You Should Report</h2>
        <ul>
          <li>💳 Unauthorized bank transactions or money deducted from your account.</li>
          <li>📸 Leaked private photos or videos without your consent.</li>
          <li>🆔 Identity theft or misuse of your Aadhaar, PAN, or personal documents.</li>
          <li>🌐 Fraudulent websites asking for payments or personal information.</li>
          <li>📞 Threats or blackmail through phone, WhatsApp, email, or social media.</li>
        </ul>
      </section>

      <section className="govt-links">
        <h2>Government Websites for Reporting Scams</h2>
        <p>You can lodge complaints and check the status using the following official portals:</p>
        <div className="govt-sites">
          <div className="govt-card">
            <h3>Cyber Crime Portal (India)</h3>
            <p><strong>Website:</strong> <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">cybercrime.gov.in</a></p>
            <p><strong>Helpline Number:</strong> 1930</p>
            <p>Report cyber crimes including online fraud, sextortion, fake profiles, etc.</p>
          </div>
          <div className="govt-card">
            <h3>National Consumer Helpline</h3>
            <p><strong>Website:</strong> <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer">consumerhelpline.gov.in</a></p>
            <p><strong>Helpline Number:</strong> 1800-11-4000</p>
            <p>For complaints related to e-commerce fraud and product/service issues.</p>
          </div>
        </div>
      </section>

      <section className="check-status">
        <h2>Check Complaint Status</h2>
        <p>
          After filing a complaint, you can track its progress at <a href="https://cybercrime.gov.in/Webform/CrimeStatus.aspx" target="_blank" rel="noopener noreferrer">cybercrime.gov.in/Webform/CrimeStatus.aspx</a>.
        </p>
      </section>

      <section className="report-reminder">
        <h2>Don’t Stay Silent</h2>
        <p>
          Reporting scams not only helps you recover from fraud but also protects others from falling victim. Your voice can stop cybercriminals in their tracks.
        </p>
        <button className="cta-button">Report a Scam Now</button>
      </section>
    </div>
  );
};

export default Report;
