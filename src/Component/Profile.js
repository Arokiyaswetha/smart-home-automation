import React, { useState } from 'react';
import '../css/profile.css';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  // Profile Fields
  const [name, setName] = useState('Alex Morgan');
  const [email, setEmail] = useState('alex.morgan@email.com');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  // Voice Assistant State
  const [connectedVA, setConnectedVA] = useState({
    "Amazon Alexa": false,
    "Google Assistant": false,
    "Apple Siri": false,
  });

  // Integration Connection State
  const [integrations, setIntegrations] = useState({
    googleHome: false,
    homekit: false,
    energyProvider: false,
  });

  // Toggle Integration
  const toggleIntegration = (platform) => {
    setIntegrations((prev) => {
      const isConnected = !prev[platform];
      alert(`${isConnected ? 'Connected to' : 'Disconnected from'} ${formatPlatformName(platform)} successfully!`);
      return { ...prev, [platform]: isConnected };
    });
  };

  const formatPlatformName = (platform) => {
    switch (platform) {
      case 'googleHome': return 'Google Home';
      case 'homekit': return 'Apple HomeKit';
      case 'energyProvider': return 'Energy Provider';
      default: return platform;
    }
  };

  // Voice Assistant toggle
  const toggleVAConnection = (name) => {
    setConnectedVA((prev) => {
      const isConnected = !prev[name];
      alert(`${isConnected ? "Connected to" : "Disconnected from"} ${name}!`);
      return { ...prev, [name]: isConnected };
    });
  };

  const viewApiDocs = () => {
    window.open("https://example.com/api-docs", "_blank");
  };

  const generateApiKey = () => {
    const apiKey = "KEY-" + Math.random().toString(36).substr(2, 12).toUpperCase();
    alert("Generated API Key:\n" + apiKey);
  };

  const viewEnergyApiInfo = () => {
    window.open("https://example.com/energy-api-info", "_blank");
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Profile':
        return (
          <div className="profile-settings">
            <h3>Profile Settings</h3>

            <label>Full Name</label>
            <input
              type="text"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter full name"
            />

            <label>Email</label>
            <input
              type="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />

            <label>Phone Number</label>
            <input
              type="tel"
              className="input-field"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
            />

            <button className="save-btn" onClick={() => alert("Profile changes saved!")}>
              Save Changes
            </button>
          </div>
        );

      case 'Security':
        return (
          <div className="profile-settings">
            <h3>Change Password</h3>
            <label>Current Password</label>
            <input type="password" className="input-field" placeholder="Enter current password" />
            <label>New Password</label>
            <input type="password" className="input-field" placeholder="Enter new password" />
            <label>Confirm new Password</label>
            <input type="password" className="input-field" placeholder="Re-enter new password" />
            <button className="save-btn">Update password</button>
          </div>
        );

      case 'Access Control':
        return (
          <div className="profile-settings">
            <h3>Role Permissions</h3>
            <p className="subheading">Assign and manage permissions for each member role.</p>
            <table className="access-table">
              <tbody>
                <tr><td>Admin</td><td>Full Access</td></tr>
                <tr><td>Homeowner</td><td>Limited Access</td></tr>
                <tr><td>Guest Support</td><td>Restricted</td></tr>
              </tbody>
            </table>

            <h3 style={{ marginTop: '2rem' }}>Add Member Access</h3>
            <label>Name</label>
            <input type="text" className="input-field" placeholder="Enter your name" />
            <label>Member Email</label>
            <input type="email" className="input-field" placeholder="Enter email address" />
            <label>Enter Role</label>
            <input type="text" className="input-field" placeholder="Enter a role" />
            <button className="save-btn">Save</button>
          </div>
        );

      case 'Voice Assistant':
        return (
          <div className="profile-settings">
            <h3>Voice Assistant Integration</h3>
            <p className="subheading">
              Connect your Smart home with Alexa, Google Assistant or Siri to control devices and automate routines using voice commands
            </p>

            <div className="voice-assist-cards">
              {[
                { name: "Amazon Alexa", description: "Enable Alexa to control Device and run automations", icon: "🗣️" },
                { name: "Google Assistant", description: "Link Google Assistant for hands-free device control", icon: "🎤" },
                { name: "Apple Siri", description: "Integrate with Siri for voice-activated routines", icon: "💬" }
              ].map((assistant, index) => (
                <div key={index} className="va-card">
                  <div className="va-icon">{assistant.icon}</div>
                  <h4>{assistant.name}</h4>
                  <p>{assistant.description}</p>
                  <div className="va-buttons">
                    <button
                      className="connect-btn"
                      onClick={() => toggleVAConnection(assistant.name)}
                    >
                      {connectedVA[assistant.name] ? "Disconnect" : "Connect"}
                    </button>
                    <button className="learn-btn">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Integration':
        return (
          <div className="profile-settings">
            <h3>Third-party Integrations</h3>
            <p className="subheading">
              Connect your account to smart home platforms, security systems, and energy providers for seamless automation and monitoring.
            </p>

            <h4 className="section-title">Smart Home platforms</h4>
            <div className="integration-cards">
              <div className="integration-card">
                <h5>Google Home</h5>
                <strong>Connect Google Home</strong>
                <p>Enable device control and automation via Google Home ecosystem.</p>
                <div className="integration-buttons">
                  <button className="connect-btn" onClick={() => toggleIntegration('googleHome')}>
                    {integrations.googleHome ? "Disconnect" : "Connect"}
                  </button>
                </div>
              </div>

              <div className="integration-card">
                <h5>Apple HomeKit</h5>
                <strong>Connect HomeKit</strong>
                <p>Integrate with Apple HomeKit for secure smart home management.</p>
                <div className="integration-buttons">
                  <button className="connect-btn" onClick={() => toggleIntegration('homekit')}>
                    {integrations.homekit ? "Disconnect" : "Connect"}
                  </button>
                </div>
              </div>
            </div>

            <h4 className="section-title">Security Systems</h4>
            <div className="integration-card">
              <h5>External Security</h5>
              <strong>API Integration</strong>
              <p>Connect to third-party security systems for real-time monitoring.</p>
              <div className="integration-buttons">
                <button className="connect-btn" onClick={viewApiDocs}>View API Docs</button>
                <button className="connect-btn" onClick={generateApiKey}>Generate Key</button>
              </div>
            </div>

            <h4 className="section-title">Energy Providers</h4>
            <div className="integration-card">
              <h5>Provide API</h5>
              <strong>Connect Energy Provider</strong>
              <p>Sync usage data and automate billing with your energy provider</p>
              <div className="integration-buttons">
                <button className="connect-btn" onClick={() => toggleIntegration('energyProvider')}>
                  {integrations.energyProvider ? "Disconnect" : "Connect"}
                </button>
                <button className="connect-btn" onClick={viewEnergyApiInfo}>API Info</button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };
  const tabLabelMap = {
    'Profile': 'Profile',
    'Security': 'Security',
    'Access Control': 'Access Control',
    'Voice Assistant': 'Voice Assistant',
    'Integration': 'Integration'
  };
  return (
    <div className="profile-container">
      <div className="device-header">
      <div className="breadcrumb">
      <ChevronLeft size={16} />
        <span className="breadcrumb-link" onClick={() => navigate('/')}>Dashboard</span>
        <span> &gt; </span>
        <span className="breadcrumb-link" onClick={() => setActiveTab('Profile')} style={{ cursor: 'pointer' }}>Settings</span>
        {activeTab && activeTab !== 'Profile' && (
          <>
            <span> &gt; </span>
            <span className="active">{tabLabelMap[activeTab]}</span>
          </>
        )}
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {['Profile', 'Security', 'Access Control', 'Voice Assistant', 'Integration'].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {renderTabContent()}
    </div>
    // </div>
  );
};

export default Profile;
