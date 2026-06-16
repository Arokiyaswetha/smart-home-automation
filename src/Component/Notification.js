import React, { useState } from 'react';
import '../css/notification.css';

const NotificationsPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [alertTab, setAlertTab] = useState('all');
  const [preferences, setPreferences] = useState({
    email: false,
    sms: false,
    push: false,
    criticalOnly: false,
  });

  const handleToggle = (key) => {
    setPreferences({ ...preferences, [key]: !preferences[key] });
  };

  const alertsData = [
    {
      type: 'update',
      icon: '✔️',
      title: 'System Update Applied',
      description: 'Energy settings updates successfully.',
    },
    {
      type: 'warning',
      icon: '🚫',
      title: 'Unauthorized Access Attempt',
      description: 'Guest access denied at 10:42 AM.',
    },
    {
      type: 'warning',
      icon: '📷',
      title: 'Device Offline',
      description: 'Living Room Camera disconnected.',
    },
    {
      type: 'update',
      icon: '➕',
      title: 'New Guest Added',
      description: 'Guest profile created by Homeowner.',
    },
    {
      type: 'alert',
      icon: '🚨',
      title: 'Security Alert',
      description: 'Multiple failed login attempts detected.',
    },
    {
      type: 'alert',
      icon: '🔥',
      title: 'Fire Detected',
      description: 'Smoke sensor triggered in kitchen.',
    },
    {
      type: 'alert',
      icon: '💧',
      title: 'Water Leak',
      description: 'Leak sensor activated in Basement.',
    },
    {
      type: 'alert',
      icon: '🔊',
      title: 'Glass Break',
      description: 'Living Room window sensor triggered.',
    },
    {
      type: 'update',
      icon: '💻',
      title: 'System Firmware Updated',
      description: 'Version 2.14 installed successfully.',
    },
    {
      type: 'update',
      icon: '🔐',
      title: 'New Device Added',
      description: 'Smart Lock connected in Main Entrance.',
    },
    {
      type: 'update',
      icon: '👤',
      title: 'User Access Changed',
      description: 'Guest access updated for Jane Doe.',
    },
  ];

  const filteredAlerts =
  alertTab === 'all'
    ? alertsData.filter((item) =>
        ['System Update Applied', 'Unauthorized Access Attempt', 'Device Offline', 'New Guest Added', 'Security Alert'].includes(item.title)
      )
    : alertsData.filter((item) => item.type === alertTab);

  return (
    <div className="notifications-page">
      <div className="breadcrumb">Dashboard &gt; Notifications</div>

      {/* Primary Tabs */}
      <div className="tabs">
        <button
          className={activeTab === 'all' ? 'active' : ''}
          onClick={() => setActiveTab('all')}
        >
          All Notifications
        </button>
        <button
          className={activeTab === 'alerts' ? 'active' : ''}
          onClick={() => setActiveTab('alerts')}
        >
          Alerts & Updates
        </button>
      </div>

      {/* All Notifications Tab */}
      {activeTab === 'all' && (
        <div className="tab-content">
          <h3>Active alerts</h3>
          <div className="notification-row">
            <span className="icon">🔄</span>
            <span className="title">Device Failure</span>
            <span className="device">Sensor A12</span>
            <span className="severity">Critical</span>
            <span className="time">2 min ago</span>
            <span className="arrow">→</span>
          </div>
          <div className="notification-row">
            <span className="icon">🛡️</span>
            <span className="title">Security Breach</span>
            <span className="device">Camera 3</span>
            <span className="severity">High</span>
            <span className="time">Just now</span>
            <span className="arrow">→</span>
          </div>
          <div className="notification-row">
            <span className="icon">⚠️</span>
            <span className="title">Unusual Activity</span>
            <span className="device">Door lock</span>
            <span className="severity">Medium</span>
            <span className="time">5min ago</span>
            <span className="arrow">→</span>
          </div>

          <h3>Upcoming notifications</h3>
          <div className="notification-row">
            <span className="icon">📅</span>
            <span className="title">Scheduled Maintenance</span>
            <span className="device">HVAC System</span>
            <span className="severity">Low</span>
            <span className="time">Tomorrow</span>
            <span className="arrow">→</span>
          </div>
          <div className="notification-row">
            <span className="icon">💾</span>
            <span className="title">Software Update</span>
            <span className="device">Gateway 2</span>
            <span className="severity">Info</span>
            <span className="time">2 days</span>
            <span className="arrow">→</span>
          </div>

          <h3>Alert Preferences</h3>
          <div className="preferences">
            {['email', 'sms', 'push', 'criticalOnly'].map((key) => (
              <div className="preference" key={key}>
                <span className="pref-icon">
                  {key === 'email'
                    ? '📧'
                    : key === 'sms'
                    ? '📱'
                    : key === 'push'
                    ? '📳'
                    : '❗'}
                </span>
                <div className="pref-text">
                  <strong>
                    {key === 'email'
                      ? 'Email Alerts'
                      : key === 'sms'
                      ? 'SMS Alerts'
                      : key === 'push'
                      ? 'Push Notifications'
                      : 'Critical only'}
                  </strong>
                  <p>
                    {key === 'email'
                      ? 'Receive alerts via email'
                      : key === 'sms'
                      ? 'Get SMS notifications'
                      : key === 'push'
                      ? 'Enable browser push alerts'
                      : 'Only receive critical alerts'}
                  </p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={preferences[key]}
                    onChange={() => handleToggle(key)}
                  />
                  <span className="slider" />
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Alerts & Updates Tab */}
      {activeTab === 'alerts' && (
        <div className="tab-content">
          <h2>Alerts & Updates</h2>
          <div className="sub-tabs">
            {['All', 'Warning', 'Alert', 'Update'].map((label) => (
              <button
                key={label}
                className={alertTab === label.toLowerCase() ? 'active' : ''}
                onClick={() => setAlertTab(label.toLowerCase())}
              >
                {label}
              </button>
            ))}
          </div>

          <h3>
            {alertTab === 'warning' && 'Active Warnings'}
            {alertTab === 'alert' && 'System Alerts'}
            {alertTab === 'update' && 'Recent Updates'}
            {alertTab === 'all' && 'All Notifications'}
          </h3>

          <div className="alert-list">
            {filteredAlerts.map((item, idx) => (
              <div key={idx} className="alert-item">
                <div className="alert-icon">{item.icon}</div>
                <div className="alert-text">
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;
