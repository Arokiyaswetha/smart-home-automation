import React, { useState } from 'react';
import '../css/adjustdevices.css';
import { FaLightbulb, FaFan, FaTv, FaSnowflake } from 'react-icons/fa';

const deviceConfig = [
  {
    category: 'Lighting',
    devices: [
      { name: 'Living Room', icon: <FaLightbulb />, secondaryOff: 'Dim', secondaryOn: 'Brighten' },
      { name: 'Bed Room', icon: <FaLightbulb />, secondaryOff: 'Dim', secondaryOn: 'Brighten' },
    ],
  },
  {
    category: 'Fans',
    devices: [
      { name: 'Living Room Fan', icon: <FaFan />, secondaryOff: 'Slower', secondaryOn: 'Faster' },
      { name: 'Bed Room Fan', icon: <FaFan />, secondaryOff: 'Slower', secondaryOn: 'Faster' },
    ],
  },
  {
    category: 'Other Devices',
    devices: [
      { name: 'Smart TV', icon: <FaTv />, secondaryOff: 'Power Save', secondaryOn: 'Normal Mode' },
      { name: 'AC', icon: <FaSnowflake />, secondaryOff: 'Eco Boost', secondaryOn: 'Cool Mode' },
    ],
  },
];

const AdjustDevices = () => {
  const [deviceStates, setDeviceStates] = useState({});

  const toggleDevice = (deviceName) => {
    setDeviceStates((prev) => ({
      ...prev,
      [deviceName]: {
        ...prev[deviceName],
        isOn: !prev[deviceName]?.isOn,
      },
    }));
  };

  const toggleSecondary = (deviceName) => {
    setDeviceStates((prev) => ({
      ...prev,
      [deviceName]: {
        ...prev[deviceName],
        secondary: !prev[deviceName]?.secondary,
      },
    }));
  };

  return (
    <div className="adjust-devices-container">
      

      <h1>Adjust Devices</h1>

      {deviceConfig.map((group, groupIndex) => (
        <div key={groupIndex}>
          <h2>{group.category}</h2>
          <div className="device-grid">
            {group.devices.map((device, idx) => {
              const deviceState = deviceStates[device.name] || {};
              const isOn = deviceState.isOn ?? true;
              const secondary = deviceState.secondary ?? false;

              return (
                <div key={idx} className="device-card">
                  {device.icon}
                  <div className="device-name">{device.name}</div>
                  <div className="device-actions">
                    <button
                      className="action-button secondary"
                      onClick={() => toggleSecondary(device.name)}
                    >
                      {secondary ? device.secondaryOn : device.secondaryOff}
                    </button>
                    <button
                      className="action-button"
                      onClick={() => toggleDevice(device.name)}
                    >
                      {isOn ? 'Turn off' : 'Turn on'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdjustDevices;
