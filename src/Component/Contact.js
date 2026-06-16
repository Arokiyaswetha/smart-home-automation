import React from 'react';
import { Link } from 'react-router-dom';
import '../css/contact.css';

export default function SupportPage() {
  return (
    <div className="support-container">
      <h2 className="support-title">Need assistance</h2>
      <p className="support-subtext">
        We’re here to help you with your Smart Aura. Choose an option below or contact support
      </p>

      <div className="support-card">
        <h3>Contact Support</h3>
        <p>Email our support team for help with your account or technical issues</p>
        <Link to="/email-support" className="support-button">
          Email Support
        </Link>
      </div>

      <div className="support-card">
        <h3>FAQ</h3>
        <p>Find answers to common questions about Smart Home Features and security</p>
        <Link to="/faq-support" className="support-button">
          View FAQ
        </Link>
      </div>
    </div>
  );
}
