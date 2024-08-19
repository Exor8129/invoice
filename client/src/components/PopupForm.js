import React, { useState, useEffect } from "react";
import "./PopupForm.css";
import mockData from '../data/MOCK_DATA.json'; // Import mock data
import NewCustomerForm from "./newcustomer"; // Import NewCustomerForm component

const PopupForm = ({ isOpen, onClose, onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(mockData);
  const [isNewCustomerOpen, setIsNewCustomerOpen] = useState(false); // State to control new customer popup

  useEffect(() => {
    // Filter data whenever the search term changes
    const filtered = mockData.filter(party =>
      party.party_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddNewCustomerClick = () => {
    setIsNewCustomerOpen(true); // Open new customer popup
  };

  const handleNewCustomerSubmit = (newCustomerData) => {
    // Handle new customer submission (e.g., add to database, update state, etc.)
    console.log("New Customer Data:", newCustomerData);
    setIsNewCustomerOpen(false); // Close new customer popup after submission
  };

  if (!isOpen) return null;

  return (
    <div className="popup-container">
      <div className="popup-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Select Party</h2>

        {/* Search Bar */}
        <div className="form-group">
          <label>Search Party:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by party name..."
          />
        </div>

        {/* Listbox */}
        <ul className="party-list">
          {filteredData.length > 0 ? (
            filteredData.map(party => (
              <li key={party.id} className="party-item">
                {party.party_name}
              </li>
            ))
          ) : (
            <li className="no-result">No party found</li>
          )}
        </ul>

        {/* Buttons */}
        <button onClick={onSubmit}>Submit</button>
        <button onClick={handleAddNewCustomerClick}>Add New Customer</button>

        {/* New Customer Form Popup */}
        <NewCustomerForm
          isOpen={isNewCustomerOpen}
          onClose={() => setIsNewCustomerOpen(false)} // Close the popup
          onSubmit={handleNewCustomerSubmit} // Handle form submission
        />
      </div>
    </div>
  );
};

export default PopupForm;
