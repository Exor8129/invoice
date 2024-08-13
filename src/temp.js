import React from 'react';
import './temp.css';

const Temp = () => {
  const tempData = {
    partyName: "John Doe Enterprises",
    billingAddress: "19/3053A Bismi Complex, Ozhukkara, Calicut Medical College PO, Kozhikode-673008",
    phoneNo: "909395934",
  };

  return (
    <div className='container'>
      <div className="partyDetails">
        <strong>Party Name:</strong> {tempData.partyName}<br />
        <strong>Billing Address:</strong> {tempData.billingAddress}<br />
        <strong>Phone NO:</strong> {tempData.phoneNo}
      </div>

      <div className="partyDetails2">
        <strong>Party Name:</strong> {tempData.partyName}<br />
        <strong>Phone NO:</strong> {tempData.phoneNo}
      </div>

      <div className="partyDetails3">
        <strong>Party Name:</strong> {tempData.partyName}
      </div>
    </div>
  );
};

export default Temp;
