import React from 'react';
import './InvoiceCard.css';

const InvoiceCard = () => {
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

  console.log(invoiceData); // Check if data is being received

  return (
    <div className="InvoiceTable">
      {/* Header Information */}
      <table>
        <tbody>
          <tr>
          <td colSpan={1} rowSpan={4} className="party-billing-column">
              
              <strong>Party Name:</strong> {invoiceData.partyName}<br />
              <strong>Billing Address:</strong> {invoiceData.billingAddress}<br />
              <strong>Phone NO:</strong> {invoiceData.phoneNo}
            </td>
            <td colSpan={2} className='shipping'>
              <strong>Shipping Address:</strong> {invoiceData.shippingAddress}
            </td>
            <td>
              <strong>Invoice No:</strong> {invoiceData.invoiceNo}
            </td>
            <td>
              <strong>Date:</strong> {invoiceData.date}
            </td>
            
          </tr>
          <tr>
            <td>
              <strong>State Name:</strong> {invoiceData.stateName}
            </td>
            <td>
              <strong>State Code:</strong> {invoiceData.stateCode}
            </td>
             <td colSpan={2}>
              <strong>P. Order No.:</strong> {invoiceData.orderNo}
            </td>
          </tr>
          <tr>
            
            <td colSpan={2}>
              <strong>DL NO:</strong> {invoiceData.dlNo}
            </td>
            <td colSpan={2}>
              <strong>PO Date:</strong> {invoiceData.poDate}
            </td>
            
           
          </tr>
          
          <tr>
           
            <td colSpan={2}>
              <strong>GST NO:</strong> {invoiceData.gstNo}
            </td>
           
            <td colSpan={2}>
              <strong>Transport:</strong> {invoiceData.transport}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Detailed List of Items */}
      <table className="ItemTable">
        <thead>
          <tr>
            <th>No</th>
            <th>DESCRIPTION OF GOODS</th>
            <th>HSN/SAC</th>
            <th>TAX</th>
            <th>Batch No.</th>
            <th>Exp.</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Disc</th>
            <th>Amount</th>
            <th>CGST</th>
            <th>SGST</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.description}</td>
              <td>{item.hsnSac}</td>
              <td>{item.tax}</td>
              <td>{item.batchNo}</td>
              <td>{item.expiry}</td>
              <td>{item.qty}</td>
              <td>{item.rate}</td>
              <td>{item.discount}</td>
              <td>{item.amount}</td>
              <td>{item.cgst}</td>
              <td>{item.sgst}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Summary Information */}
      <table className="SummaryTable">
        <tbody>
          <tr>
            <td>
              <strong>Taxable Value:</strong> {invoiceData.taxableValue}
            </td>
            <td>
              <strong>Central Tax:</strong> {invoiceData.centralTax}
            </td>
            <td>
              <strong>State Tax:</strong> {invoiceData.stateTax}
            </td>
            <td>
              <strong>Total Tax Amount:</strong> {invoiceData.totalTaxAmount}
            </td>
            <td>
              <strong>Package & Forwarding:</strong> {invoiceData.packageForwarding}
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <strong>Grand Total:</strong> {invoiceData.grandTotal}
            </td>
            <td colSpan={2}>
              <strong>Round Off:</strong> {invoiceData.roundOff}
            </td>
          </tr>
          <tr>
            <td colSpan={5}>
              <strong>Rupees in word:</strong> {invoiceData.rupeesInWords}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Footer Information */}
      <div className="Footer">
        <div>For Exor Medical Systems</div>
        <div>Authorized Signatory</div>
        <div className="Declaration">
          Declaration: We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.
        </div>
      </div>
    </div>
  );
};

export default InvoiceCard;
