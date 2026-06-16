import React from 'react';
import '../css/signout.css';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SignOutModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear storage or auth (example)
    localStorage.clear();
    // Redirect to login
    navigate('/home');
  };

  return (
    <div className="modal-backdrop">
      <div className="signout-modal">
        <div className="modal-header">
          <button className="close-icon" onClick={onClose}>
            <X size={24} />
          </button>
          <h2>Sign Out</h2>
        </div>
        <p className="signout-message">
          Are you sure you want to sign out of your Homeowner account?
        </p>
        <div className="modal-actions">
          <button className="signout-btn" onClick={handleSignOut}>Sign Out</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SignOutModal;
