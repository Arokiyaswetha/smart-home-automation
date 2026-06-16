import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/scenerio.css';

const initialRules = [
  {
    type: 'Rule',
    name: 'Turn off Lights',
    description: 'When no motion is detected for 10 min in Living Room, turn off all lights.',
  },
  {
    type: 'Schedule',
    name: 'AC On at 7PM',
    description: 'Turn on AC in Bedroom every day at 7.00 PM.',
  },
  {
    type: 'Voice Command',
    name: 'Good Night Routine',
    description: 'When ‘Good night’ is said, turn off all lights and lock doors.',
  },
];

const initialSchedules = [
  {
    id: 1,
    device: 'Living Room Lights',
    action: 'Turn On',
    time: '06:30 AM',
    days: 'Mon-Fri',
    status: 'Active',
  },
  {
    id: 2,
    device: 'Front Door Lock',
    action: 'Lock',
    time: '11:00 PM',
    days: 'Daily',
    status: 'Active',
  },
];

const Scenerio = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('rules');
  const [rules] = useState(initialRules);
  const [schedules, setSchedules] = useState(initialSchedules);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [newSchedule, setNewSchedule] = useState({
    device: '',
    action: '',
    time: '',
    days: '',
    status: 'Active',
  });

  const handleCreateRule = () => {
    navigate('/create-rule');
  };

  const handleDelete = (id) => {
    setSchedules(schedules.filter((item) => item.id !== id));
  };

  const handleEdit = (schedule) => {
    setEditingId(schedule.id);
    setEditData(schedule);
  };

  const handleEditChange = (field, value) => {
    setEditData({ ...editData, [field]: value });
  };

  const handleSave = () => {
    setSchedules(schedules.map((item) => (item.id === editData.id ? editData : item)));
    setEditingId(null);
  };

  const handleAddSchedule = (e) => {
    e.preventDefault();
    if (!newSchedule.device || !newSchedule.time) return;
    const newId = schedules.length ? schedules[schedules.length - 1].id + 1 : 1;
    setSchedules([...schedules, { id: newId, ...newSchedule }]);
    setNewSchedule({ device: '', action: '', time: '', days: '', status: 'Active' });
    setActiveTab('schedule');
  };

  return (
    <div className="automation-container">
      <h2 className="automation-title">Automation Scenarios</h2>

      {/* Tabs */}
      <div className="automation-tabs-header">
        <button className={`tab-button ${activeTab === 'rules' ? 'active' : ''}`} onClick={() => setActiveTab('rules')}>All Rules</button>
        <button className={`tab-button ${activeTab === 'schedule' ? 'active' : ''}`} onClick={() => setActiveTab('schedule')}>Device Schedule</button>
        <button className={`tab-button ${activeTab === 'addSchedule' ? 'active' : ''}`} onClick={() => setActiveTab('addSchedule')}>Add Schedule</button>
      </div>

      {/* All Rules Tab */}
      {activeTab === 'rules' && (
        <>
          <div className="automation-scenario-list">
            {rules.map((rule, idx) => (
              <div key={idx} className="automation-scenario-card purple-card">
                <h4 className={`rule-type ${rule.type.toLowerCase().replace(' ', '-')}`}>{rule.type}</h4>
                <h3 className="rule-name">{rule.name}</h3>
                <p className="rule-description">{rule.description}</p>
                <div className="rule-actions">
                  <button className="edit-btn purple-btn">Edit</button>
                  <button className="disable-btn purple-btn">Disable</button>
                </div>
              </div>
            ))}
          </div>

          <div className="automation-form purple-form">
            <h3>Add New Automation</h3>
            <div className="form-actions">
              <button className="create-btn purple-btn" onClick={handleCreateRule}>Create Rule</button>
            </div>
          </div>
        </>
      )}

      {/* Device Schedule Tab */}
      {activeTab === 'schedule' && (
        <div className="device-schedule-table">
          <h3 className="section-title">Upcoming Schedules</h3>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Device Name</th>
                <th>Action</th>
                <th>Time</th>
                <th>Days</th>
                <th>Status</th>
                <th colSpan="2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((item) => (
                <tr key={item.id}>
                  {editingId === item.id ? (
                    <>
                      <td><input value={editData.device} onChange={(e) => handleEditChange('device', e.target.value)} /></td>
                      <td><input value={editData.action} onChange={(e) => handleEditChange('action', e.target.value)} /></td>
                      <td><input value={editData.time} onChange={(e) => handleEditChange('time', e.target.value)} /></td>
                      <td><input value={editData.days} onChange={(e) => handleEditChange('days', e.target.value)} /></td>
                      <td>
                        <select value={editData.status} onChange={(e) => handleEditChange('status', e.target.value)}>
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                        </select>
                      </td>
                      <td colSpan="2"><button className="icon-btn" onClick={handleSave}>💾</button></td>
                    </>
                  ) : (
                    <>
                      <td>{item.device}</td>
                      <td>{item.action}</td>
                      <td>{item.time}</td>
                      <td>{item.days}</td>
                      <td>{item.status}</td>
                      <td><button className="icon-btn" onClick={() => handleEdit(item)}>✏️</button></td>
                      <td><button className="icon-btn" onClick={() => handleDelete(item.id)}>🗑️</button></td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add Schedule Tab */}
      {activeTab === 'addSchedule' && (
        <div className="automation-form purple-form">
          <h3>Add New Schedule</h3>
          <form onSubmit={handleAddSchedule}>
            <div className="form-row">
              <label>Device Name</label>
              <input value={newSchedule.device} onChange={(e) => setNewSchedule({ ...newSchedule, device: e.target.value })} required />
            </div>
            <div className="form-row">
              <label>Action</label>
              <input value={newSchedule.action} onChange={(e) => setNewSchedule({ ...newSchedule, action: e.target.value })} />
            </div>
            <div className="form-row">
              <label>Time</label>
              <input type="time" value={newSchedule.time} onChange={(e) => setNewSchedule({ ...newSchedule, time: e.target.value })} required />
            </div>
            <div className="form-row">
              <label>Days</label>
              <input value={newSchedule.days} onChange={(e) => setNewSchedule({ ...newSchedule, days: e.target.value })} />
            </div>
            <div className="form-row">
              <label>Status</label>
              <select value={newSchedule.status} onChange={(e) => setNewSchedule({ ...newSchedule, status: e.target.value })}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="form-actions">
              <button type="submit" className="save-btn purple-btn">Add Schedule</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Scenerio;
