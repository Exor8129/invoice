import React, { useState } from 'react';
import './Dashboard.css';

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleMenuClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const menuItems = [
    { 
      name: 'Dashboard', 
      icon: '🏠',
      subItems: [] 
    },
    { 
      name: 'Accounting Vouchers', 
      icon: '💼',
      subItems: ['Sale', 'Receipt', 'Ledger', 'Credit Note'] 
    },
    { 
      name: 'Entry', 
      icon: '📝',
      subItems: ['Sale Entry', 'Purchase Entry', 'Sale Return Entry', 'Customer Entry', 'Item Entry'] 
    },
    { 
      name: 'Reports', 
      icon: '📊',
      subItems: ['Sale Report', 'Purchase Report', 'Sale Return Report', 'Report for Accountant'] 
    },
    { 
      name: 'Settings', 
      icon: '⚙️',
      subItems: ['Item1', 'Item2', 'Item3', 'Item4'] 
    },
  ];

  return (
    <div className="dashboard">
      <nav className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="toggle-container" onClick={handleToggle}>
          <img 
            src={isCollapsed ? "/menu_open_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" : "/menu_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png"} 
            alt="Toggle Menu" 
            className="toggle-icon" 
          />
        </div>
        <img src="/ExorLogo_PNG.png" alt="Exor Logo" className="App-logo" />
        <div className="profile">
          <h1>I am here</h1>
        </div>
        <div className="icon_container">
          <h1>Icons here</h1>
        </div>
        <div className="menu_container">
          <h1>Menu</h1>
          <ul className="menu_list">
            {menuItems.map((item, index) => (
              <li key={index}>
                <div 
                  className="menu_item" 
                  onClick={() => handleMenuClick(index)}
                >
                  <span className="menu_icon">{item.icon}</span>
                  <span className="menu_name">{item.name}</span>
                  <span className={`menu_arrow ${activeIndex === index ? 'rotate' : ''}`}>&gt;</span>
                </div>
                {activeIndex === index && item.subItems.length > 0 && (
                  <ul className="sub_menu_list">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="sub_menu_item">
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="content">
        {/* Main content goes here */}
      </div>
    </div>
  );
};

export default Menu;
