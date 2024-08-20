import React from 'react';
import './temp.css';

const Temp = ({ openPopup }) => {  // Receive openPopup as a prop
  return (
    <div className='container'>
      <div className='section1'>
        <div className='partyNamehead' onClick={openPopup}> {/* Trigger popup on click */}
          <strong>Party Name</strong>
          <h className="partyName">Gracemed</h>
        </div>
        <div className='partyAddresshead'>
          <strong>Billing Address</strong>
          <h className="partyAddress">19/3053A Bismi Complex, Ozhukkara, Calicut Medical College PO, Kozhikode-673008</h>
          <div className='phone'>
            <strong>Ph:</strong>
            <h>+91 8129008181</h>
          </div>
        </div>
      </div>

      <div className='section2'>
        <div className='gst'>
          <strong>GSTIN</strong>
          <h className="gstno">32AXCPV5409P1Z0</h>
        </div>
        <div className='dlno'>
          <strong>DL No</strong>
          <h className="dl">KL-KKD-166278 KL-KKD-166279</h>
        </div>
        <div className='ship'>
          <strong>Shipping Address</strong>
          <h className="shipadd">19/3053A Bismi Complex, Ozhukkara, Calicut Medical College PO, Kozhikode-673008</h>
        </div>
      </div>

      <div className='section3'>
        <div className='invcNum'>
          <div className='invoiceNumber'>
            <strong>Invoice No.</strong>
            <h className="txttoppad">2463/24-25</h>
          </div>
          <div className='invoiceDate'>
            <strong>Date</strong>
            <h className="txttoppad">14/08/2024</h>
          </div>
        </div>

        <div className='poNum'>
          <div className='poNumber'>
            <strong>P. Order No.</strong>
            <h className="txttoppad">PO-78910</h>
          </div>
          <div className='poDate'>
            <strong>PO Date</strong>
            <h className="txttoppad">14/08/2024</h>
          </div>
        </div>

        <div className='state'>
          <div className='stateName'>
            <strong>State</strong>
            <h className="statename">Kerala</h>
          </div>
          <div className='stateCode'>
            <strong>Code</strong>
            <h className="code">32</h>
          </div>
        </div>

        <div className='trans'>
          <strong>Transport</strong>
          <h className="courier">Speed and Safe</h>
        </div>
      </div>
    </div>
  );
};

export default Temp;


