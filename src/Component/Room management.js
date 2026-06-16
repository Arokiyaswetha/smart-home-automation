import React from 'react';
import { BedDouble, ShowerHead, Plug, Lamp, Sofa, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../css/room.css';

const rooms = [
  { name: 'Living Room', devices: 5, icon: <Sofa /> },
  { name: 'Bedroom', devices: 3, icon: <BedDouble /> },
  { name: 'Kitchen', devices: 2, icon: <Plug /> },
  { name: 'Bathroom', devices: 1, icon: <ShowerHead /> }
];

const unassignedDevices = [
  { name: 'Small Plug', status: 'Online', icon: <Plug /> },
  { name: 'Ceiling Light', status: 'Online', icon: <Lamp /> }
];

export default function RoomManagement() {
  const navigate = useNavigate();

  return (
    <div className="room-container">
      {/* Breadcrumb Header */}
      <div className="room-header">
        <div className="breadcrumb">
          <span className="breadcrumb-link" onClick={() => navigate('/')}>
            <ChevronLeft size={16} style={{ marginRight: '4px' }} />
            Dashboard
          </span>
          <span> &gt; </span>
          <span className="breadcrumb-active">Room Management</span>
        </div>
      </div>

      <h2 className="room-header">Organize Devices</h2>
      <p className="room-subheader">
        Group and manage devices by room or zone for easier control
      </p>

      {/* Add Room Button */}
      <button
        className="room-add-button"
        onClick={() => navigate('/room-management/add')}
      >
        Add Room
      </button>

      {/* Room Cards */}
      <div className="room-grid">
        {rooms.map((room, index) => (
          <div key={index} className="room-card">
            <div className="room-card-icon">{room.icon}</div>
            <h4 className="room-card-title">{room.name}</h4>
            <p className="room-card-subtext">
              {room.devices} device{room.devices > 1 ? 's' : ''} assigned
            </p>
          </div>
        ))}
      </div>

      {/* Unassigned Devices */}
      <h3 className="unassigned-section-title">Unassigned Devices</h3>
      <div className="unassigned-container">
        {unassignedDevices.map((device, index) => (
          <div key={index} className="unassigned-row">
            <div className="unassigned-info">
              <div>{device.icon}</div>
              <span>{device.name}</span>
            </div>
            <div className="unassigned-status">Not assigned</div>
            <div className="unassigned-online">{device.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
