import React from "react";
import "./items.css";

const ItemTable = () => {
  const invoiceData = {
    partyName: "John Doe Enterprises",
    billingAddress:
      "19/3053A Bismi Complex, Ozhukkara, Calicut Medical College PO, Kozhikode-673008",
    phoneNo: "909395934",
    shippingAddress:
      "19/3053A Bismi Complex, Ozhukkara, Calicut Medical College PO, Kozhikode-673008",
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
      {
        description: "Product 1",
        hsnSac: "1234",
        tax: "18%",
        batchNo: "B123",
        expiry: "2025-12",
        qty: "10",
        rate: "100",
        discount: "5%",
        amount: "950",
        cgst: "85.5",
        sgst: "85.5",
      },
      {
        description: "Ventilator Circuit Plain Adult Proximal Line MSI Ventilator Circuit Plain Adult Proximal Line MSI",
        hsnSac: "56782322",
        tax: "18%",
        batchNo: "B124",
        expiry: "2025-11",
        qty: "5",
        rate: "200",
        discount: "10%",
        amount: "900",
        cgst: "81",
        sgst: "81",
      },
      {
        description: "Product 3",
        hsnSac: "9101",
        tax: "18%",
        batchNo: "B125",
        expiry: "2025-10",
        qty: "20",
        rate: "50",
        discount: "8%",
        amount: "920",
        cgst: "82.8",
        sgst: "82.8",
      },
      {
        description: "Product 4",
        hsnSac: "1121",
        tax: "12%",
        batchNo: "B126",
        expiry: "2026-01",
        qty: "15",
        rate: "150",
        discount: "12%",
        amount: "1980",
        cgst: "118.8",
        sgst: "118.8",
      },
      {
        description: "Product 5",
        hsnSac: "3141",
        tax: "5%",
        batchNo: "B127",
        expiry: "2025-09",
        qty: "7",
        rate: "300",
        discount: "5%",
        amount: "1995",
        cgst: "49.88",
        sgst: "49.88",
      },
      {
        description: "Product 6",
        hsnSac: "3141",
        tax: "5%",
        batchNo: "B127",
        expiry: "2025-09",
        qty: "7",
        rate: "300",
        discount: "5%",
        amount: "1995",
        cgst: "49.88",
        sgst: "49.88",
      },
      {
        description: "Product 6",
        hsnSac: "3141",
        tax: "5%",
        batchNo: "B127",
        expiry: "2025-09",
        qty: "7",
        rate: "300",
        discount: "5%",
        amount: "1995",
        cgst: "49.88",
        sgst: "49.88",
      },
      {
        description: "Product 6",
        hsnSac: "3141",
        tax: "5%",
        batchNo: "B127",
        expiry: "2025-09",
        qty: "7",
        rate: "300",
        discount: "5%",
        amount: "1995",
        cgst: "49.88",
        sgst: "49.88",
      },
      {
        description: "Product 6",
        hsnSac: "3141",
        tax: "5%",
        batchNo: "B127",
        expiry: "2025-09",
        qty: "7",
        rate: "300",
        discount: "5%",
        amount: "1995",
        cgst: "49.88",
        sgst: "49.88",
      },
      {
        description: "Product 6",
        hsnSac: "3141",
        tax: "5%",
        batchNo: "B127",
        expiry: "2025-09",
        qty: "7",
        rate: "300",
        discount: "5%",
        amount: "1995",
        cgst: "49.88",
        sgst: "49.88",
      },
      
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
    <div className="itemTableheader">
      <div className="tableHead">
        <table>
          <thead>
            <tr>
              <th className="sl">Sl No</th>
              <th>Item Description</th>
              <th className="sl">HSN Code</th>
              <th className="sl">Tax</th>
              <th className="sl">Batch No</th>
              <th className="sl">Expiry</th>
              <th>Qty</th>
              <th>Rate</th>
              <th>Disc</th>
              <th>CGST</th>
              <th>SGST</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody className="item-table-body">
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
                <td>{item.cgst}</td>
                <td>{item.sgst}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemTable;