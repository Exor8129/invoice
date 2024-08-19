import React, { useState, useEffect } from "react";
import "./PopupForm.css";
import mockData from '../data/MOCK_DATA.json'; // Import mock data

const PopupForm = ({ isOpen, onClose, onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(mockData);

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

        {/* Optional submit button */}
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default PopupForm;
