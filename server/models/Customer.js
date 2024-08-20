// models/Customer.js
const mongoose = require('mongoose');

// Define the schema for customer_regs
const customerSchema = new mongoose.Schema({
    party_name: {
    type: String,
    required: true,
  },
  billing_address: String,
  phone: String,
  gstin: String,
  dl_no: String,
  shipping_address: String,
  invoice_no: String,
  invoice_date: Date,
  po_number: String,
  po_date: Date,
  state: String,
  state_code: String,
  transport: String,
  // Add any additional fields you need
});

// Create and export the model based on the schema
module.exports = mongoose.model('Customer', customerSchema, 'customer_regs');
