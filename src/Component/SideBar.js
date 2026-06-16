// src/components/Sidebar.jsx
import React from 'react';
import {
  Home, Settings, LogOut, Bell, Zap, Shield, Lightbulb, Gauge, Camera, Grid2X2, Layers, DoorOpen
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import '../css/sidebar.css'; // make sure styles are defined here

function SidebarItem({ icon, label, to, isActive }) {
  return (
    <li className={`sidebar-item ${isActive ? 'active' : ''}`}>
      <Link to={to} style={{ display: 'flex', alignItems: 'center', padding: '10px', color: 'inherit', textDecoration: 'none' }}>
        <span style={{ marginRight: '10px' }}>{icon}</span>
        {label}
      </Link>
    </li>
  );
}

export default function SideBar() {
  const location = useLocation();

  const items = [
    { icon: <Home />, label: 'Dashboard', to: '/' },
    { icon: <Settings />, label: 'Device Control', to: '/device-control' },
    { icon: <Gauge />, label: 'Settings', to: '/settings' },
    { icon: <Layers />, label: 'Logs', to: '/logs' },
    { icon: <Camera />, label: 'Surveillance', to: '/surveillance' },
    { icon: <Zap />, label: 'Energy Overview', to: '/energy' },
    { icon: <Grid2X2 />, label: 'Automation', to: '/automation' },
    { icon: <Bell />, label: 'Notification', to: '/notification' },
    { icon: <Shield />, label: 'Summary', to: '/summary' },
    { icon: <DoorOpen />, label: 'Room Management', to: '/room' },
    { icon: <LogOut />, label: 'Sign Out', to: '/Signout' },
  ];

  return (
    <aside className="sidebar dashboardSidebar">
      <h1><Lightbulb size={20} style={{ marginRight: '8px' }} /> SMART AURA</h1>
      <ul>
        {items.map((item) => (
          <SidebarItem
            key={item.to}
            icon={item.icon}
            label={item.label}
            to={item.to}
            isActive={location.pathname === item.to || location.pathname.startsWith(item.to + '/')}
          />
        ))}
      </ul>
    </aside>
  );
}
