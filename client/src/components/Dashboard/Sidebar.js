import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/dashboard/overview">Overview</Link></li>
        <li><Link to="/dashboard/reports">Reports</Link></li>
        <li><Link to="/dashboard/settings">Settings</Link></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
