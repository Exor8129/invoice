// import React, { useState } from "react";
// import "./newcustomer.css";

// const NewCustomerForm = ({ isOpen, onClose, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     party_name: "",
//     party_address: "",
//     gst_number: "",
//     contact_number: "",
//     dl_number: "",
//     state: "",
//     state_code: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     // Handle form submission
//     onSubmit(formData);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="new-customer-popup-container">
//       <div className="new-customer-popup-content">
//         <span className="close-button" onClick={onClose}>
//           &times;
//         </span>
//         <h2>Add New Customer</h2>

//         <div className="form-group">
//           <label>Party Name:</label>
//           <input
//             type="text"
//             name="party_name"
//             value={formData.party_name}
//             onChange={handleChange}
//             placeholder="Enter party name"
//           />
//         </div>

//         <div className="form-group">
//           <label>Party Address:</label>
//           <input
//             type="text"
//             name="party_address"
//             value={formData.party_address}
//             onChange={handleChange}
//             placeholder="Enter party address"
//           />
//         </div>

//         <div className="form-group">
//           <label>GST Number:</label>
//           <input
//             type="text"
//             name="gst_number"
//             value={formData.gst_number}
//             onChange={handleChange}
//             placeholder="Enter GST number"
//           />
//         </div>

//         <div className="form-group">
//           <label>Contact Number:</label>
//           <input
//             type="text"
//             name="contact_number"
//             value={formData.contact_number}
//             onChange={handleChange}
//             placeholder="Enter contact number"
//           />
//         </div>

//         <div className="form-group">
//           <label>DL Number:</label>
//           <input
//             type="text"
//             name="dl_number"
//             value={formData.dl_number}
//             onChange={handleChange}
//             placeholder="Enter DL number"
//           />
//         </div>

//         <div className="form-group">
//           <label>State:</label>
//           <input
//             type="text"
//             name="state"
//             value={formData.state}
//             onChange={handleChange}
//             placeholder="Enter state"
//           />
//         </div>

//         <div className="form-group">
//           <label>State Code:</label>
//           <input
//             type="text"
//             name="state_code"
//             value={formData.state_code}
//             onChange={handleChange}
//             placeholder="Enter state code"
//           />
//         </div>

//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default NewCustomerForm;




// import React, { useState } from "react";
// import "./newcustomer.css";
// import axios from 'axios';

// const NewCustomerForm = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     party_name: "",
//     party_address: "",
//     gst_number: "",
//     contact_number: "",
//     dl_number: "",
//     state: "",
//     state_code: "",
//   });

//   const [message, setMessage] = useState(""); // State to hold the success message

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//       // Send data to the server
//       await axios.post('/api/customers', formData);
      
//       // Display success message
//       setMessage("Data saved successfully!");

//       // Clear the form fields
//       setFormData({
//         party_name: "",
//         party_address: "",
//         gst_number: "",
//         contact_number: "",
//         dl_number: "",
//         state: "",
//         state_code: "",
//       });

//       // Hide the message after 3 seconds
//       setTimeout(() => setMessage(""), 3000);

//     } catch (error) {
//       console.error("Error adding new customer:", error);
//       setMessage("Failed to save data. Please try again.");
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="new-customer-popup-container">
//       <div className="new-customer-popup-content">
//         <span className="close-button" onClick={onClose}>
//           &times;
//         </span>
//         <h2>Add New Customer</h2>

//         {message && <div className="success-message">{message}</div>} {/* Display the message */}

//         <div className="form-group">
//           <label>Party Name:</label>
//           <input
//             type="text"
//             name="party_name"
//             value={formData.party_name}
//             onChange={handleChange}
//             placeholder="Enter party name"
//           />
//         </div>

//         <div className="form-group">
//           <label>Party Address:</label>
//           <input
//             type="text"
//             name="party_address"
//             value={formData.party_address}
//             onChange={handleChange}
//             placeholder="Enter party address"
//           />
//         </div>

//         <div className="form-group">
//           <label>GST Number:</label>
//           <input
//             type="text"
//             name="gst_number"
//             value={formData.gst_number}
//             onChange={handleChange}
//             placeholder="Enter GST number"
//           />
//         </div>

//         <div className="form-group">
//           <label>Contact Number:</label>
//           <input
//             type="text"
//             name="contact_number"
//             value={formData.contact_number}
//             onChange={handleChange}
//             placeholder="Enter contact number"
//           />
//         </div>

//         <div className="form-group">
//           <label>DL Number:</label>
//           <input
//             type="text"
//             name="dl_number"
//             value={formData.dl_number}
//             onChange={handleChange}
//             placeholder="Enter DL number"
//           />
//         </div>

//         <div className="form-group">
//           <label>State:</label>
//           <input
//             type="text"
//             name="state"
//             value={formData.state}
//             onChange={handleChange}
//             placeholder="Enter state"
//           />
//         </div>

//         <div className="form-group">
//           <label>State Code:</label>
//           <input
//             type="text"
//             name="state_code"
//             value={formData.state_code}
//             onChange={handleChange}
//             placeholder="Enter state code"
//           />
//         </div>

//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default NewCustomerForm;







import React, { useState } from "react";
import "./newcustomer.css";

const NewCustomerForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    party_name: "",
    party_address: "",
    gst_number: "",
    contact_number: "",
    dl_number: "",
    state: "",
    state_code: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Handle form submission
    onSubmit(formData);

    // Clear form data after submission
    setFormData({
      party_name: "",
      party_address: "",
      gst_number: "",
      contact_number: "",
      dl_number: "",
      state: "",
      state_code: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="new-customer-popup-container">
      <div className="new-customer-popup-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Add New Customer</h2>

        <div className="form-group">
          <label>Party Name:</label>
          <input
            type="text"
            name="party_name"
            value={formData.party_name}
            onChange={handleChange}
            placeholder="Enter party name"
          />
        </div>

        <div className="form-group">
          <label>Party Address:</label>
          <input
            type="text"
            name="party_address"
            value={formData.party_address}
            onChange={handleChange}
            placeholder="Enter party address"
          />
        </div>

        <div className="form-group">
          <label>GST Number:</label>
          <input
            type="text"
            name="gst_number"
            value={formData.gst_number}
            onChange={handleChange}
            placeholder="Enter GST number"
          />
        </div>

        <div className="form-group">
          <label>Contact Number:</label>
          <input
            type="text"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            placeholder="Enter contact number"
          />
        </div>

        <div className="form-group">
          <label>DL Number:</label>
          <input
            type="text"
            name="dl_number"
            value={formData.dl_number}
            onChange={handleChange}
            placeholder="Enter DL number"
          />
        </div>

        <div className="form-group">
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter state"
          />
        </div>

        <div className="form-group">
          <label>State Code:</label>
          <input
            type="text"
            name="state_code"
            value={formData.state_code}
            onChange={handleChange}
            placeholder="Enter state code"
          />
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default NewCustomerForm;
