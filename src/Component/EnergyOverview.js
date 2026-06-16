import React, { useState } from "react";
import "../css/EnergyOverview.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Papa from "papaparse";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const energyData = [
  { day: "Mon", usage: 300 },
  { day: "Tue", usage: 280 },
  { day: "Wed", usage: 220 },
  { day: "Thu", usage: 210 },
  { day: "Fri", usage: 150 },
  { day: "Sat", usage: 140 },
  { day: "Sun", usage: 400 },
  { day: "Mon", usage: 240 },
  { day: "Tue", usage: 240 },
  { day: "Wed", usage: 100 },
];

const tips = [
  {
    icon: "🎯",
    title: "Reduce Peak Usage",
    subtitle: "Cost Saving",
    description: "Shift heavy appliance use to off-peak hours to lower your bill.",
    action: "View Report",
  },
  {
    icon: "🏠",
    title: "Optimize AC Settings",
    subtitle: "Efficiency",
    description: "Set your AC to 24 degree C for optimal energy efficiency.",
    action: "Apply Setting",
  },
  {
    icon: "💡",
    title: "Upgrade Lighting",
    subtitle: "Recommendation",
    description: "Switch LED bulbs to save up to 80% on lighting costs",
    action: "Setting",
  },
];

const EnergyOverview = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleAction = (action) => {
    switch (action) {
      case "View Report":
        alert("Opening detailed energy usage report...");
        break;
      case "Apply Setting":
        alert("AC setting applied: 24°C");
        break;
      case "Setting":
        alert("Lighting optimization applied: LED mode activated");
        break;
      default:
        alert("Action not recognized.");
    }
  };

  // ✅ Export Device Usage as PDF
  const handleExportPDF = () => {
    const usageTab = document.querySelector(".device-usage-tab");
    if (!usageTab) return;

    html2canvas(usageTab).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("device-usage-report.pdf");
    });
  };

  // ✅ Export Security Incidents as CSV
  const handleExportCSV = () => {
    const data = [
      ["Date", "Issue", "Device", "Status"],
      ["2024-06-01", "Unauthorized Access", "Thermostat", "Investigating"],
      ["2024-05-28", "Failed Login", "Smart Plug", "Investigating"],
      ["2024-05-25", "Firmware Alert", "Light Panel", "Resolved"]
    ];
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "security-incidents.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="energy-overview">
      <div className="device-header">
        <div className="breadcrumb">
          <span className="dashboard-link">Dashboard</span>
          <span>{'>'}</span>
          <span className="dashboard-link">Energy Overview</span>
        </div>
      </div>

      <div className="tabs">
        <button
          className={activeTab === "all" ? "active" : ""}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={activeTab === "usage" ? "active" : ""}
          onClick={() => setActiveTab("usage")}
        >
          Device Usage
        </button>
      </div>

      {activeTab === "all" && (
        <>
          <h2 className="energy-title">Energy Overview</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={energyData}>
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

          <div className="tips-grid">
            {tips.map((tip, idx) => (
              <div key={idx} className="tip-card">
                <div>
                  <div className="tip-icon">{tip.icon}</div>
                  <p className="tip-subtitle">{tip.subtitle}</p>
                  <h3 className="tip-title">{tip.title}</h3>
                  <p className="tip-description">{tip.description}</p>
                </div>
                <button className="tip-button" onClick={() => handleAction(tip.action)}>
                  {tip.action}
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === "usage" && (
        <div className="device-usage-tab">
          <h2 className="energy-title">Analytics Overview</h2>
          <h3 className="section-subtitle">Device Usage report</h3>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={[
                { day: "Mon", usage: 300 },
                { day: "Tue", usage: 250 },
                { day: "Wed", usage: 280 },
                { day: "Thu", usage: 220 },
                { day: "Fri", usage: 260 },
                { day: "Sat", usage: 180 },
                { day: "Sun", usage: 150 },
                { day: "Mon", usage: 270 },
                { day: "Tue", usage: 230 },
                { day: "Wed", usage: 290 },
                { day: "Thu", usage: 240 },
                { day: "Fri", usage: 250 },
              ]}>
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

          <h3 className="section-subtitle">Security incidents</h3>
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
              <tr><td>2024-06-01</td><td>Unauthorized Access</td><td>Thermostat</td><td>Investigating</td></tr>
              <tr><td>2024-05-28</td><td>Failed Login</td><td>Smart Plug</td><td>Investigating</td></tr>
              <tr><td>2024-05-25</td><td>Firmware Alert</td><td>Light Panel</td><td>Resolved</td></tr>
            </tbody>
          </table>

          <h3 className="section-subtitle">Automation Efficiency</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={[
                { name: 'Auto1', usage: 220 },
                { name: 'Auto2', usage: 200 },
                { name: 'Auto3', usage: 230 },
                { name: 'Auto4', usage: 210 },
                { name: 'Auto5', usage: 240 },
                { name: 'Auto6', usage: 190 },
                { name: 'Auto7', usage: 215 },
                { name: 'Auto8', usage: 230 },
                { name: 'Auto9', usage: 250 },
                { name: 'Auto10', usage: 245 },
                { name: 'Auto11', usage: 255 },
                { name: 'Auto12', usage: 260 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="usage" fill="url(#gradient)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <h3 className="section-subtitle">Export Reports</h3>
          <div className="export-buttons">
            <button className="action-btn" onClick={handleExportPDF}>Export PDF</button>
            <button className="settings-btn" onClick={handleExportCSV}>Export CSV</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnergyOverview;
