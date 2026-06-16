// src/Component/DeviceUsage.js

import React from "react";
import "../css/deviceusage.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const deviceData = [
  { day: "Mon", usage: 300 },
  { day: "Tue", usage: 240 },
  { day: "Wed", usage: 290 },
  { day: "Thu", usage: 230 },
  { day: "Fri", usage: 210 },
  { day: "Sat", usage: 170 },
  { day: "Sun", usage: 250 },
  { day: "Mon", usage: 300 },
  { day: "Tue", usage: 240 },
  { day: "Wed", usage: 280 },
];

const automationData = [
  { name: "Auto1", usage: 180 },
  { name: "Auto2", usage: 160 },
  { name: "Auto3", usage: 170 },
  { name: "Auto4", usage: 190 },
  { name: "Auto5", usage: 180 },
  { name: "Auto6", usage: 150 },
  { name: "Auto7", usage: 170 },
  { name: "Auto8", usage: 190 },
  { name: "Auto9", usage: 180 },
  { name: "Auto10", usage: 185 },
  { name: "Auto11", usage: 185 },
  { name: "Auto12", usage: 180 },
];

const incidents = [
  {
    date: "2024-06-01",
    issue: "Unauthorized Access",
    device: "Thermostat",
    status: "Investigating",
  },
  {
    date: "2024-05-28",
    issue: "Failed Login",
    device: "Smart Plug",
    status: "Investigating",
  },
  {
    date: "2024-05-25",
    issue: "Firmware Alert",
    device: "Light Panel",
    status: "Resolved",
  },
];

export default function DeviceUsage() {
  const navigate = useNavigate();

  return (
    <div className="device-usage-container">
      {/* Breadcrumb Header */}
      <div className="device-header">
        <div className="breadcrumb">
          <ChevronLeft size={16} />
          <span className="dashboard-link" onClick={() => navigate("/")}>
            Dashboard
          </span>
          <span>{">"}</span>
          <span onClick={() => navigate("/energy")} className="dashboard-link">
            Energy Overview
          </span>
          <span>{">"}</span>
          <span className="active">Device Usage</span>
        </div>
      </div>

      {/* Section: Device Usage Bar Chart */}
      <h3 className="section-title">Analytics Overview</h3>
      <p className="sub-title">Device Usage report</p>
      <div className="chart-box">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={deviceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="usage" fill="url(#gradient)" />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9333ea" stopOpacity={1} />
                <stop offset="100%" stopColor="#a855f7" stopOpacity={0.8} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Section: Security Incidents */}
      <h3 className="section-title">Security incidents</h3>
      <table className="incident-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Issue</th>
            <th>Device</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((item, idx) => (
            <tr key={idx}>
              <td>{item.date}</td>
              <td>{item.issue}</td>
              <td>{item.device}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Section: Automation Efficiency */}
      <h3 className="section-title">Automation Efficiency</h3>
      <div className="chart-box">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={automationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="usage" fill="url(#gradient)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Section: Export Buttons */}
      <div className="export-section">
        <h4>Export Reports</h4>
        <button className="export-btn pdf">Export PDF</button>
        <button className="export-btn csv">Export CSV</button>
      </div>
    </div>
  );
}
