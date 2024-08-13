import React from 'react';
import './App.css';
import InvoiceCard from './InvoiceCard';
import Temp from './temp';

function App() {
  const invoiceData = {
    invoiceNumber: 'INV-123456',
    partyName: 'John Doe Enterprises',
    gstNo: '32AXCPV5409P1Z0',
    dlNo: 'KL-KKD-166278, KL-KKD-166279',
    stateName: 'Kerala',
    stateCode: 'KL',
    shippingAddress: 'Same as billing address',
    billingAddress: '19/3053A, Bismi Complex, Ozhukkara, Calicut Medical College PO, Kozhikode-673008',
    date: '2024-08-12',
    orderNo: 'PO-78910',
    poDate: '2024-08-10'
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
          <InvoiceCard invoiceData={invoiceData} />
          {/* <Temp/> */}

          
        </header>
      </div>
    </div>
  );
}

export default App;
