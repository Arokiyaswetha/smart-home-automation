import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/deviceControl.css';
import { ChevronLeft, Lightbulb, Thermometer } from 'lucide-react';
import AdjustDevices from './AdjustDevice';
import EnergySaver from './EnergySaver';

export default function DeviceControl() {
  const [activeTab, setActiveTab] = useState('devices');
  const navigate = useNavigate();
  const tabLabelMap = {
    devices: 'Devices',
    adjust: 'Adjust Device',
    energy: 'Energy Saver',
  };
  // Initial device list with states
  const initialDevices = [
    {
      id: 1,
      icon: <Lightbulb color="#3f0071" size={24} />,
      name: 'Living Room Light',
      status: 'Online',
      room: 'Living Room',
      type: 'Light',
      isOn: true,
    },
    {
      id: 2,
      icon: <Thermometer color="#3f0071" size={24} />,
      name: 'Kitchen Thermostat',
      status: 'Idle',
      room: 'Kitchen',
      type: 'Thermostat',
      isOn: false,
    },
  ];

  const [devices, setDevices] = useState(initialDevices);

  // Toggle action button state (on/off)
  const toggleDeviceState = (id) => {
    const updatedDevices = devices.map((device) =>
      device.id === id ? { ...device, isOn: !device.isOn } : device
    );
    setDevices(updatedDevices);
  };

  return (
    <div className="device-control-container">
      {/* Header */}
      <div className="device-header">
        <div className="breadcrumb">
          <ChevronLeft size={16} />
          <span className="dashboard-link" onClick={() => navigate('/')}>Dashboard</span>
          <span>{'>'}</span>
          <span
            className="dashboard-link"
            onClick={() => setActiveTab('devices')}
            style={{ cursor: 'pointer' }}
          >
            Device Control
          </span>

          {/* Active tab label */}
          {activeTab && (
            <>
              <span>{'>'}</span>
              <span className="active">{tabLabelMap[activeTab]}</span>
            </>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className={activeTab === 'devices' ? 'active' : ''} onClick={() => setActiveTab('devices')}>Devices</button>
        <button className={activeTab === 'adjust' ? 'active' : ''} onClick={() => setActiveTab('adjust')}>Adjust Device</button>
        <button className={activeTab === 'energy' ? 'active' : ''} onClick={() => setActiveTab('energy')}>Energy Saver</button>
      </div>

      {/* Devices Tab */}
      {activeTab === 'devices' && (
        <>
          <div className="device-grid">
            {devices.map((device) => (
              <div key={device.id} className="device-card">
                <div>{device.icon}</div>
                <h4>{device.name}</h4>
                <p>Status: {device.status}</p>
                <p>Room: {device.room}</p>
                <p>Type: {device.type}</p>
                <div className="buttons">
                  <button
                    className="action-btn"
                    onClick={() => toggleDeviceState(device.id)}
                  >
                    {device.isOn ? 'Turn off' : 'Turn on'}
                  </button>
                  <button
                    className="settings-btn"
                    onClick={() => navigate('/settings')}
                  >
                    Settings
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Device Button */}
          <div className="add-section">
            <h3>Add New Device</h3>
            <button onClick={() => navigate('/add-device')}>Add device</button>
          </div>


        </>
      )}

      {/* Other Tabs */}
      {activeTab === 'adjust' && <AdjustDevices />}
      {activeTab === 'energy' && <EnergySaver />}
    </div>
  );
}
