import React from 'react';
import './items.css';

const ItemTable = () => {

  const invoiceData = {
    partyName: "John Doe Enterprises",
    billingAddress: "19/3053A Bismi Complex, Ozhukkara, Calicut Medical College PO, Kozhikode-673008",
    phoneNo: "909395934",
    shippingAddress: "19/3053A Bismi Complex, Ozhukkara, Calicut Medical College PO, Kozhikode-673008",
    stateName: "Kerala",
    stateCode: "KL",
    gstNo: "32AXCPV5409P1Z0",
    dlNo: "KL-KKD-166278 KL-KKD-166279",
    invoiceNo: "INV-123456",
    date: "2024-08-12",
    orderNo: "PO-78910",
    poDate: "2024-08-10",
    transport: "",
    items: [
      { description: "Product 1", hsnSac: "1234", tax: "18%", batchNo: "B123", expiry: "2025-12", qty: "10", rate: "100", discount: "5%", amount: "950", cgst: "85.5", sgst: "85.5" },
      // Add more items as needed
    ],
    taxableValue: "1000",
    centralTax: "85.5",
    stateTax: "85.5",
    totalTaxAmount: "171",
    packageForwarding: "50",
    grandTotal: "1221",
    roundOff: "0",
    rupeesInWords: "One Thousand Two Hundred Twenty-One Only",
  };

  return (
   <div className='itemTableheader'>
    <div className='tableHead'><h>SL No</h></div>
   </div>
  );
};

export default ItemTable;
