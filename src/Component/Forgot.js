// src/Component/ForgotPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/forgot.css';

export default function ForgotPassword() {
  const [form, setForm] = useState({ username: '', newPassword: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log('Password reset for:', form.username);
    navigate('/signin');
  };

  return (
    <div className="forgot-container">
      <form className="forgot-card" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>

        <label>Username or Email</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your username or email"
          value={form.username}
          onChange={handleChange}
          required
        />

        <label>New Password</label>
        <input
          type="password"
          name="newPassword"
          placeholder="Enter the Password"
          value={form.newPassword}
          onChange={handleChange}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" className="reset-btn">Reset Password</button>
      </form>
    </div>
  );
}
