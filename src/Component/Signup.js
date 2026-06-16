// src/Component/SignUp.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/signup.css';

export default function SignUp() {
  const [form, setForm] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    role: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registered:", form);
    navigate('/verify-mfa'); // Redirect to Sign In
  };

  return (
    <div className="signup-container">
      <form className="signup-card" onSubmit={handleSubmit}>
        <h2>Create your Account</h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter the Name"
          value={form.name}
          onChange={handleChange}
          required
        />

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

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Enter the Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <label>Role</label>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          required
        >
          <option value="">Select the role</option>
          <option value="admin">Admin</option>
          <option value="homeowner">Homeowner</option>
          <option value="guest">Guest</option>
        </select>

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
}
