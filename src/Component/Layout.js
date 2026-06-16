// src/components/Layout.jsx
import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import { Outlet, useLocation } from 'react-router-dom';

import '../css/dashboard.css';
import '../App.css';
import '../css/surveillance.css';
import '../css/logs.css';

export default function Layout() {
  const location = useLocation();

  // Define paths that should NOT show Header/Sidebar
  const noLayoutPaths = ['/home', '/signin','/signup','/forgot-password','/verify-mfa','/support','/email-support','/faq-support'];

  // Check if current path should hide layout
  const hideLayout = noLayoutPaths.includes(location.pathname);

  if (hideLayout) {
    // Just show the page without layout
    return (
      <div className="pageRender">
        <Outlet />
      </div>
    );
  }

  // Default layout with Header and Sidebar
  return (
    <>
      <Header />
      <div className="container dashboardContainer">
        <Sidebar />
        <main className="main dashboardMain">
          <div className="pageRender">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
