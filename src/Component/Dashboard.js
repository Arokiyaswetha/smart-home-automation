import React from 'react';
import '../css/dashboard.css';

export default function Dashboard() {
  return (
    <>
      {/* Main content */}
      <div className="dashboard-body">
        <h2>Dashboard</h2>
        <h3 className="welcome italic">Welcome back</h3>
        <p className="subtitle">Your smart home overview</p>

        {/* Overview Cards */}
        <div className="overview">
          <DashboardCard title="Devices" value="12 Connected" description="All devices are online" />
          <DashboardCard title="Security" value="No Alerts" description="Your home is secure" />
          <DashboardCard title="Energy" value="Low Usage" description="Energy consumption" />
        </div>

        {/* Activity */}
        <div className="activity">
          <h3>Recent Activity</h3>
          <table>
            <tbody>
              <ActivityRow device="Front Door" status="Unlocked" time="2 min ago" />
              <ActivityRow device="Thermostat" status="Set to 72 °F" time="5 min ago" />
              <ActivityRow device="Living Room Lights" status="Turned off" time="10 min ago" />
            </tbody>
          </table>
        </div>

        {/* Performance Bar Section */}
        <div className="performance">
          <h3>Performance Overview</h3>
          <PerformanceMetric label="Automation Success Rate" value={90} />
          <PerformanceMetric label="Device Health" value={75} />
          <PerformanceMetric label="Energy Efficiency" value={60} />
        </div>
      </div>
    </>
  );
}

function DashboardCard({ title, value, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <strong>{value}</strong>
      <p>{description}</p>
    </div>
  );
}

function ActivityRow({ device, status, time }) {
  return (
    <tr>
      <td>{device}</td>
      <td>{status}</td>
      <td>{time}</td>
    </tr>
  );
}

function PerformanceMetric({ label, value }) {
  return (
    <div className="performance-bar">
      <div className="performance-label">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="bar-wrapper">
        <div
          className="bar-fill"
          style={{ width: `${value}%`, backgroundColor: value > 80 ? '#16a34a' : value > 60 ? '#facc15' : '#ef4444' }}
        />
      </div>
    </div>
  );
}
