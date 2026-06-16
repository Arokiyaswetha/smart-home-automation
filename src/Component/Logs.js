import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import '../css/logs.css';

const users = [
  {
    name: 'Alex Morgan',
    role: 'Admin',
    email: 'alex@smarthome.com',
    status: 'Active',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Jamie Lee',
    role: 'Homeowner',
    email: 'jamie@smarthome.com',
    status: 'Active',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Morgan Yu',
    role: 'Guest',
    email: 'morgan@smarthome.com',
    status: 'Pending',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    name: 'Taylor Kim',
    role: 'Admin',
    email: 'taylor@smarthome.com',
    status: 'Suspended',
    avatar: 'https://randomuser.me/api/portraits/women/66.jpg',
  },
];

export default function UserLogs() {
  return (
    <div className="userlogs-container">
      {/* Breadcrumb */}
      <div className="userlogs-breadcrumb">
        <div className="breadcrumb-path">
          <span>Dashboard</span>
          <span>&gt;</span>
          <span className="breadcrumb-current">Logs</span>
        </div>
        {/* <div className="breadcrumb-user">
          <span className="user-name">Alex Morgan</span>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User Avatar"
            className="user-avatar"
          />
        </div> */}
      </div>

      {/* User List */}
      <h2 className="userlogs-title">User List</h2>
      <div className="table-wrapper">
        <table className="userlogs-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="userlogs-row">
                <td className="name-cell">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="user-avatar-small"
                  />
                  {user.name}
                </td>
                <td>{user.role}</td>
                <td>{user.email}</td>
                <td>
                  <span
                    className={`status-tag ${
                      user.status.toLowerCase() // active, pending, suspended
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>
                  <div className="action-icons">
                    <Pencil className="icon" />
                    <Trash2 className="icon" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
