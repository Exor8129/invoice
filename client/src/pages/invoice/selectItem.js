// selectItem.js
import React, { useState } from "react";
import "./selectItem.css"; // Ensure correct path

const SelectItem = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5"
  ]); // Replace with your actual data

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="popup">
      <div className="popup-content">
        <button onClick={onClose} className="close-button">Close</button>
        <h2>Select Item</h2>
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <ul className="item-list">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          ) : (
            <li className="no-result">No results found</li>
          )}
        </ul>
        <button className="close-btn" onClick={onClose}>Add Item</button>
      </div>
    </div>
  );
};

export default SelectItem;
