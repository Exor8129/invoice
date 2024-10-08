import React, { useState } from 'react';
import './App.css';
import Temp from './temp';
import ItemTable from './pages/invoice/items';
import FooterTable from './pages/invoice/footerTable';

import PopupForm from './pages/invoice/PopupForm'; // Import the PopupForm

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    closePopup();
  };

  return (
    <div className="App-outer">
      <div className="App">
        <header className="App-header">
          <img src="/ExorLogo_PNG.png" alt="Exor Logo" className="App-logo" />
          <div className="App-address">
            19/3053A, Bismi Complex, Ozhukkara,<br />
            Calicut Medical College PO, Kozhikode-673008
          </div>
          <img src="/invoice_tag.png" alt="Invoice Tag" className="App-invoice-tag" />
          <Temp openPopup={openPopup} /> {/* Pass openPopup to Temp */}
          <ItemTable />
          <FooterTable />
          
        </header>
        <PopupForm isOpen={isPopupOpen} onClose={closePopup} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;




// /////////Dashboard Test Code/////////

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard/Dashboard';
// import OverviewPage from './pages/overview/OverviewPage'; // Ensure paths are correct
// import ReportsPage from './pages/Reports/ReportsPage';
// import SettingsPage from './pages/settings/SettingsPage';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<div>Home Page or Redirect</div>} />
//         <Route path="/dashboard" element={<Dashboard />}>
//           <Route path="overview" element={<OverviewPage />} />
//           <Route path="reports" element={<ReportsPage />} />
//           <Route path="settings" element={<SettingsPage />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;


