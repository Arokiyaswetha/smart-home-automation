import React, { useState } from "react";
import '../css/surveillance.css';

const Surveillance = () => {
  const [isDoorLocked, setIsDoorLocked] = useState(true);

  const motionLogs = [
    { time: "2024-06-12 21:14", zone: "Front Door" },
    { time: "2024-06-12 20:45", zone: "Garage" },
  ];

  const accessLogs = [
    { time: "2024-06-12 21:10", action: "Door Unlocked", user: "Homeowner" },
    { time: "2024-06-12 19:00", action: "Door Unlocked", user: "Homeowner" },
  ];

  const handleDoorToggle = () => {
    setIsDoorLocked((prev) => {
      const newState = !prev;
      alert(`Door ${newState ? "locked" : "unlocked"} successfully!`);
      return newState;
    });
  };

  return (
    <div className="surveillance-wrapper">
      <h2 className="surveillance-title">Live Camera Feed</h2>

      <div className="camera-feed">
        <h4>Garage Camera</h4>
        <video
          src="/videos/garage.mp4.mp4"
          controls
          autoPlay
          muted
          loop
          playsInline
          className="camera-video"
        />
      </div>

      <section className="section">
        <h3 className="section-title">Motion Detection</h3>
        <label className="checkbox-label">
          <input type="checkbox" />
          <span>Enable Alerts</span>
        </label>

        <h4 className="subheading">Recent Activity</h4>
        <ul className="log-list">
          {motionLogs.map((log, i) => (
            <li key={i} className="log-item">
              <span>{log.time}</span>
              <span>Motion detected</span>
              <span>Zone: {log.zone}</span>
              <span className="alert-icon">⚠️</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h3 className="section-title">Remote Door Control</h3>
        <div className="button-group">
          <button
            className={`button ${isDoorLocked ? "lock-btn" : "unlock-btn"}`}
            onClick={handleDoorToggle}
          >
            {isDoorLocked ? "Lock Door" : "Unlock Door"}
          </button>
        </div>

        <h4 className="subheading">Access Logs</h4>
        <ul className="log-list">
          {accessLogs.map((log, i) => (
            <li key={i} className="log-item">
              <span>{log.time}</span>
              <span>{log.action}</span>
              <span>User: {log.user}</span>
              <span className="alert-icon">⚠️</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Surveillance;
