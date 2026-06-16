import React, { useState } from 'react';
import '../css/deviceschedules.css';
import { Edit2, Trash2 } from 'lucide-react';

const initialSchedules = [
  {
    name: 'Morning Lights',
    location: 'Living Room',
    time: '06:30 AM',
    days: 'Mon-Fri',
    status: 'Active',
  },
  {
    name: 'Night lock',
    location: 'Front Door',
    time: '11:00 PM',
    days: 'Daily',
    status: 'Active',
  },
  {
    name: 'Garden Water',
    location: 'Backyard',
    time: '07:00 PM',
    days: 'Sat-Sun',
    status: 'Inactive',
  },
];

const DeviceSchedules = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [schedules, setSchedules] = useState(initialSchedules);

  const handleDelete = (index) => {
    const updated = [...schedules];
    updated.splice(index, 1);
    setSchedules(updated);
  };

  return (
    <div className="schedule-container">
      <div className="breadcrumb">
        <span>Dashboard</span> &gt; <span>Automation scenarios</span> &gt; <span className="active">Device schedules</span>
      </div>

      <h2 className="title">Device Schedules</h2>
      <p className="subtitle">Manage when devices operate automatically. Set, edit, or remove schedules for your connected devices.</p>

      <div className="tabs">
        <button
          className={activeTab === 'all' ? 'active' : ''}
          onClick={() => setActiveTab('all')}
        >
          All Schedules
        </button>
        <button
          className={activeTab === 'add' ? 'active' : ''}
          onClick={() => setActiveTab('add')}
        >
          Add Schedule
        </button>
      </div>

      {activeTab === 'all' && (
        <>
          <h3 className="section-title">Upcoming Schedules</h3>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Schedule</th>
                <th>Location</th>
                <th>Time</th>
                <th>Days</th>
                <th>Status</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule, idx) => (
                <tr key={idx}>
                  <td>{schedule.name}</td>
                  <td>{schedule.location}</td>
                  <td>{schedule.time}</td>
                  <td>{schedule.days}</td>
                  <td>{schedule.status}</td>
                  <td><Edit2 size={16} className="icon-btn" /></td>
                  <td><Trash2 size={16} className="icon-btn" onClick={() => handleDelete(idx)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {activeTab === 'add' && (
        <div className="form-placeholder">
          <p>This is where the form to add schedules will go.</p>
        </div>
      )}
    </div>
  );
};

export default DeviceSchedules;
