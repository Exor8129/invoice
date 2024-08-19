import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Dashboard.css'; // Ensure you have appropriate styles

const Dashboard = () => {
  return (
    <div className="dashboard">
      <nav className="sidebar">
        <ul>
          <li><Link to="/dashboard/overview">Overview</Link></li>
          <li><Link to="/dashboard/reports">Reports</Link></li>
          <li><Link to="/dashboard/settings">Settings</Link></li>
          {/* Add more links as needed */}
        </ul>
      </nav>
      <div className="content">
        <Outlet /> {/* This will render the matched child routes */}
      </div>
    </div>
  );
};

export default Dashboard;
