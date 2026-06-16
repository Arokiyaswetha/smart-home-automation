import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { AlertTriangle, Zap, Monitor, Info } from 'lucide-react';
import '../css/summary.css'; // Make sure the path is correct

const energyData = [
  { day: 'Mon', usage: 2.4 },
  { day: 'Tue', usage: 2.1 },
  { day: 'Wed', usage: 2.9 },
  { day: 'Thu', usage: 2.7 },
  { day: 'Fri', usage: 2.5 },
  { day: 'Sat', usage: 1.9 },
  { day: 'Sun', usage: 2.2 },
  { day: 'Mon', usage: 2.6 },
  { day: 'Tue', usage: 2.8 },
  { day: 'Wed', usage: 3.0 },
  { day: 'Fri', usage: 2.1 },
  { day: 'Thu', usage: 2.4 },
];

export default function Summary() {
  return (
    <div className="summary-container">
      <h2 className="summary-breadcrumb">
        Dashboard &gt; <span className="text-purple-600">Summary</span>
      </h2>

      <h3 className="summary-title">Home Status</h3>

      <div className="status-cards">
        <div className="status-card">
          <Monitor />
          <p>Active Devices</p>
          <h4>7 Devices</h4>
          <span>All Systems Online</span>
        </div>
        <div className="status-card">
          <Zap />
          <p>Energy Usage</p>
          <h4>2.8 kWh</h4>
          <span>Today's Consumption</span>
        </div>
        <div className="status-card">
          <AlertTriangle />
          <p>Alerts</p>
          <h4>1 Alert</h4>
          <span>Front door left open</span>
        </div>
      </div>

      <h3 className="usage-title">Energy Usage Trend</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={energyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="usage" fill="url(#colorUv)" />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9333ea" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#c084fc" stopOpacity={0.8} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>

      <div className="recent-alerts">
        <h3 className="alerts-title">Recent Alerts</h3>
        <table className="alerts-table">
          <thead>
            <tr>
              <th>Device</th>
              <th>Status</th>
              <th>Time</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="icon-cell"><AlertTriangle className="text-red-500 w-4 h-4" /> Front door</td>
              <td>Open</td>
              <td>2 min ago</td>
              <td>Living Room</td>
            </tr>
            <tr>
              <td className="icon-cell"><Info className="text-gray-500 w-4 h-4" /> Garage</td>
              <td>Closed</td>
              <td>10 min ago</td>
              <td>Garage</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
