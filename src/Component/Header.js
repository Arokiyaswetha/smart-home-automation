// src/components/Header.jsx
import React from 'react';
import smart from '../images/image.png'; // Replace with your actual logo path
import '../css/header.css';


export default function Header() {
  return (
    <header className="dashboard-header">
      <div className="logo-section">
        <img src={smart} alt="Smart Aura Logo" className="logo" />
        <h1 className="brand">SMART AURA</h1>
      </div>

      <div className="user-profile">
        <span className="user-name">Alex Morgan</span>
        <img
         src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="avatar"
        />
      </div>
    </header>
  );
}
