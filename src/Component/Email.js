import React, { useState } from 'react';
import '../css/email.css';

export default function EmailSupport() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Support Email Submitted:', formData);
    alert('Your message has been sent to support.');
    // Optional: Reset form
    setFormData({ email: '', subject: '', message: '' });
  };

  return (
    <div className="email-support-container">
      <form className="email-support-card" onSubmit={handleSubmit}>
        <h2>Contact support</h2>
        <p className="email-subtitle">Describe your issue and our support team will respond via email</p>

        <label>Username or Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your username or email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Enter describe your issues"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          placeholder="How can we help you?"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="send-email-btn">Send Email</button>
      </form>
    </div>
  );
}
