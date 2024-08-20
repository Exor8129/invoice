// import React, { useState, useEffect } from "react";
// import "./PopupForm.css";
// import mockData from '../../data/MOCK_DATA.json'; // Import mock data
// import NewCustomerForm from "./newcustomer"; // Import NewCustomerForm component

// const PopupForm = ({ isOpen, onClose, onSubmit }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredData, setFilteredData] = useState(mockData);
//   const [isNewCustomerOpen, setIsNewCustomerOpen] = useState(false); // State to control new customer popup

//   useEffect(() => {
//     // Filter data whenever the search term changes
//     const filtered = mockData.filter(party =>
//       party.party_name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(filtered);
//   }, [searchTerm]);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleAddNewCustomerClick = () => {
//     setIsNewCustomerOpen(true); // Open new customer popup
//   };

//   const handleNewCustomerSubmit = (newCustomerData) => {
//     // Handle new customer submission (e.g., add to database, update state, etc.)
//     console.log("New Customer Data:", newCustomerData);
//     setIsNewCustomerOpen(false); // Close new customer popup after submission
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="popup-container">
//       <div className="popup-content">
//         <span className="close-button" onClick={onClose}>
//           &times;
//         </span>
//         <h2>Select Party</h2>

//         {/* Search Bar */}
//         <div className="form-group">
//           <label>Search Party:</label>
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             placeholder="Search by party name..."
//           />
//         </div>

//         {/* Listbox */}
//         <ul className="party-list">
//           {filteredData.length > 0 ? (
//             filteredData.map(party => (
//               <li key={party.id} className="party-item">
//                 {party.party_name}
//               </li>
//             ))
//           ) : (
//             <li className="no-result">No party found</li>
//           )}
//         </ul>

//         {/* Buttons */}
//         <button onClick={onSubmit}>Submit</button>
//         <button onClick={handleAddNewCustomerClick}>Add New Customer</button>

//         {/* New Customer Form Popup */}
//         <NewCustomerForm
//           isOpen={isNewCustomerOpen}
//           onClose={() => setIsNewCustomerOpen(false)} // Close the popup
//           onSubmit={handleNewCustomerSubmit} // Handle form submission
//         />
//       </div>
//     </div>
//   );
// };

// export default PopupForm;


// import React, { useState, useEffect } from "react";
// import "./PopupForm.css";
// import axios from 'axios'; 
// import NewCustomerForm from "./newcustomer";

// const PopupForm = ({ isOpen, onClose, onSubmit }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [data, setData] = useState([]); 
//   const [filteredData, setFilteredData] = useState([]); 
//   const [isNewCustomerOpen, setIsNewCustomerOpen] = useState(false);

//   useEffect(() => {
//     // Fetch data from the API when the component mounts
//     const fetchData = async () => {
//       try {
//         console.log('Attempting to fetch data...'); // Debugging line
//         const response = await axios.get('/api/customers');
//         console.log('Data fetched:', response.data); // Debugging line
//         setData(response.data);
//         setFilteredData(response.data); 
//       } catch (error) {
//         console.error('Error fetching customer data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const filtered = data.filter(party =>
//       party.party_name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(filtered);
//   }, [searchTerm, data]);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleAddNewCustomerClick = () => {
//     setIsNewCustomerOpen(true);
//   };

//   const handleNewCustomerSubmit = (newCustomerData) => {
//     console.log("New Customer Data:", newCustomerData);
//     setIsNewCustomerOpen(false);
//     setData(prevData => [...prevData, newCustomerData]); 
//     setFilteredData(prevData => [...prevData, newCustomerData]); 
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="popup-container">
//       <div className="popup-content">
//         <span className="close-button" onClick={onClose}>
//           &times;
//         </span>
//         <h2>Select Party</h2>

//         {/* Search Bar */}
//         <div className="form-group">
//           <label>Search Party:</label>
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             placeholder="Search by party name..."
//           />
//         </div>

//         {/* Listbox */}
//         <ul className="party-list">
//           {filteredData.length > 0 ? (
//             filteredData.map(party => (
//               <li key={party._id} className="party-item">
//                 {party.party_name}
//               </li>
//             ))
//           ) : (
//             <li className="no-result">No party found</li>
//           )}
//         </ul>

//         {/* Buttons */}
//         <button onClick={onSubmit}>Submit</button>
//         <button onClick={handleAddNewCustomerClick}>Add New Customer</button>

//         {/* New Customer Form Popup */}
//         <NewCustomerForm
//           isOpen={isNewCustomerOpen}
//           onClose={() => setIsNewCustomerOpen(false)}
//           onSubmit={handleNewCustomerSubmit}
//         />
//       </div>
//     </div>
//   );
// };

// export default PopupForm;




import React, { useState, useEffect } from "react";
import "./PopupForm.css";
import axios from 'axios'; // Import axios
import NewCustomerForm from "./newcustomer";

const PopupForm = ({ isOpen, onClose, onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isNewCustomerOpen, setIsNewCustomerOpen] = useState(false);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/customers');
        setFilteredData(response.data);
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter data whenever the search term changes
    const filtered = filteredData.filter(party =>
      party.party_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, filteredData]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddNewCustomerClick = () => {
    setIsNewCustomerOpen(true);
  };

  const handleNewCustomerSubmit = async (newCustomerData) => {
    try {
      const response = await axios.post('/api/customers', newCustomerData);
      console.log('Customer saved:', response.data);

      // Clear form data and show success message
      alert('Customer saved successfully!');
      setIsNewCustomerOpen(false);

      // Optionally, refetch data to include the new customer
      const fetchData = async () => {
        try {
          const response = await axios.get('/api/customers');
          setFilteredData(response.data);
        } catch (error) {
          console.error('Error fetching customer data:', error);
        }
      };

      fetchData();

    } catch (error) {
      console.error('Error saving customer:', error);
      alert('Failed to save data. Please try again.');
    }
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
              <li key={party._id} className="party-item">
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
          onClose={() => setIsNewCustomerOpen(false)}
          onSubmit={handleNewCustomerSubmit}
        />
      </div>
    </div>
  );
};

export default PopupForm;
