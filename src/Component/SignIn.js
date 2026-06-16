import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/signin.css';

export default function SignIn() {
  const [form, setForm] = useState({ username: '', password: '', role: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', form);
    navigate('/verify-mfa');
  };

  return (
    <div className="signin-container">
      <form className="signin-card" onSubmit={handleSubmit}>
        <h2>Welcome to Smart Aura</h2>

        <label>Username or Email</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your username or email"
          value={form.username}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter the Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <label>Role</label>
        <select name="role" value={form.role} onChange={handleChange} required>
          <option value="">Select the role</option>
          <option value="admin">Admin</option>
          <option value="homeowner">Homeowner</option>
          <option value="guest">Guest</option>
        </select>

        <button type="submit" className="signin-btn">Sign In</button>

        <div className="signin-links">
          <Link to="/forgot-password" className="forgot-link">Forgot Password ?</Link>
          <Link to="/support" className="help-link">Help</Link> {/* Made Help a working route */}
        </div>

        <p className="signup-link">
          Don’t have an account ?{' '}
          <Link to="/signup" className="signup-anchor">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
