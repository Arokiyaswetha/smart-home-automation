import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/mfa.css';

export default function VerifyMFA() {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('MFA Code:', code);
    // TODO: Add validation logic for code if needed
    navigate('/'); // ✅ Navigate to dashboard after verification
  };

  return (
    <div className="verify-mfa-container">
      <form className="verify-mfa-card" onSubmit={handleSubmit}>
        <h2>Multi-factor Authentication</h2>
        <p className="instruction">Enter the 6-digit code sent to your device</p>

        <label>MFA-code</label>
        <input
          type="text"
          placeholder="Enter the Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          maxLength={6}
          required
        />

        <button type="submit" className="verify-btn">Verify</button>

        <p className="support-text">
          Having Trouble?{' '}
          <Link to="/support" className="support-link">Contact Support</Link>
        </p>
      </form>
    </div>
  );
}
