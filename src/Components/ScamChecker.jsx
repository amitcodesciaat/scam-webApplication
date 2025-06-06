import React, { useState } from 'react';
import './ScamChecker.css';

const ScamChecker = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckScam = async () => {
    if (!input.trim()) {
      setError('Please enter a URL or data to check.');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('http://localhost:8080/api/checkWebsite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: input }),
      });

      if (!response.ok) {
        throw new Error('API call failed');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to fetch scam status. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="quick-check-container">
      <div>
        <h2>Quick check for scams</h2>
        <input
          type="text"
          placeholder="Enter website, URL, crypto address..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input-field url-input"
        />
        <p className="example-text">Example: https://example.com or 0xABC1234DEF5678</p>

        <button
          onClick={handleCheckScam}
          disabled={loading}
          className="check-button"
        >
          {loading ? 'Checking...' : 'Check Scam'}
        </button>

        {error && <p className="error-message">{error}</p>}

        {result && (
          <div className="result-dashboard">
            <h3>Result Dashboard</h3>
            <p><strong>Checked URL:</strong> {result.checkedUrl}</p>
            <p><strong>Message:</strong> {result.message}</p>
            <p><strong>Status:</strong> <span className={`status ${result.status === 'Scam' ? 'scam' : 'safe'}`}>{result.status}</span></p>

            {/* WHOIS Info */}
            {result.whoisInfo && (
              <div className="whois-info">
                <h4>WHOIS Information</h4>
                <p><strong>Owner Name:</strong> {result.whoisInfo["Owner Name"]}</p>
                <p><strong>Owner Organization:</strong> {result.whoisInfo["Owner Organization"]}</p>
                <p><strong>Owner Country:</strong> {result.whoisInfo["Owner Country"]}</p>
                <p><strong>Owner State:</strong> {result.whoisInfo["Owner State"]}</p>
                <p><strong>Owner City:</strong> {result.whoisInfo["Owner City"]}</p>
                <p><strong>Registrar:</strong> {result.whoisInfo["Registrar"]}</p>
                <p><strong>Created:</strong> {result.whoisInfo["Created"]}</p>
                <p><strong>Updated:</strong> {result.whoisInfo["Updated"]}</p>
              </div>
            )}

            {/* Reviews */}
            {result.reviews && result.reviews.length > 0 && (
              <div className="reviews-section">
                <h4>User Reviews</h4>
                <ul>
                  {result.reviews.map((review, index) => (
                    <li key={index}>
                      <strong>{review.user}</strong> ({review.rating}★): {review.comment}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="report-section">
        <h3>Report scams to help others</h3>
        <a href="/Report" className="report-button">Report</a>
      </div>
    </section>
  );
};

export default ScamChecker;
