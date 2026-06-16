import React, { useState } from 'react';
import { ChevronLeft, Tv2, Lightbulb, Package } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import '../css/energysaver.css';

const EnergySaver = () => {
  const [isActive, setIsActive] = useState(true);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  const activeDevices = [
    {
      name: 'Living Room Light',
      mode: 'Energy Saver',
      type: 'Light',
      setting: 'Auto',
      usage: '60W',
      icon: <Lightbulb className="icon blue-light" />,
    },
    {
      name: 'Kitchen Fridge',
      mode: 'Energy Saver',
      type: 'Fridge',
      setting: 'Auto',
      usage: '100W',
      icon: <Package className="icon blue-fridge" />,
    },
    {
      name: 'Family Room TV',
      mode: 'Energy Saver',
      type: 'TV',
      setting: 'Manual',
      usage: '45W',
      icon: <Tv2 className="icon blue-tv" />,
    },
  ];

  const energyData = [
    { name: 'Mon', usage: 80 },
    { name: 'Tue', usage: 75 },
    { name: 'Wed', usage: 60 },
    { name: 'Thu', usage: 58 },
    { name: 'Fri', usage: 55 },
    { name: 'Sat', usage: 35 },
    { name: 'Sun', usage: 30 },
    { name: 'Prev', usage: 95 },
    { name: 'Now', usage: 60 },
    { name: 'Avg', usage: 60 },
    { name: 'Peak', usage: 98 },
    { name: 'Low', usage: 22 },
  ];

  return (
    <div className="page-container">
      {/* Active Devices Table */}
      <h2 className="section-title">Active Devices</h2>
      <div className="table-container">
        <table className="device-table">
          <thead>
            <tr>
              <th>Device</th>
              <th>Mode</th>
              <th>Type</th>
              <th>Setting</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            {activeDevices.map((device, index) => (
              <tr key={index}>
                <td className="device-info">
                  {device.icon}
                  {device.name}
                </td>
                <td>{device.mode}</td>
                <td>{device.type}</td>
                <td>{device.setting}</td>
                <td>{device.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Energy Saver Mode Info */}
      <div className="info-block">
        <h3 className="section-subtitle">Energy Saver Mode</h3>
        <p className="section-description">
          {isActive
            ? 'Energy Saver is now active. All compatible appliances are running in low-power mode.'
            : 'Energy Saver is turned off. Devices are running in normal mode.'}
        </p>
      </div>

      {/* Energy Usage Chart */}
      <div className="chart-container">
        <h3 className="section-subtitle">Energy Usage</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={energyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="usage" fill="#9333ea" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Toggle Button */}
      <div className="button-container">
        <button className="deactivate-button" onClick={handleToggle}>
          {isActive ? 'Deactivate' : 'Activate'}
        </button>
      </div>
    </div>
  );
};

export default EnergySaver;
