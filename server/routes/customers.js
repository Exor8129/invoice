const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer'); // Import the Customer model

// Create a new customer
router.post('/', async (req, res) => {
  const newCustomer = new Customer({
    party_name: req.body.party_name,
    billing_address: req.body.party_address,
    gstin: req.body.gst_number,
    phone: req.body.contact_number,
    dl_no: req.body.dl_number,
    state: req.body.state,
    state_code: req.body.state_code
  });

  try {
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (err) {
    console.error('Error saving customer:', err);  // Log the error
    res.status(500).json({ message: 'Failed to save data. Please try again.' });
  }
});

module.exports = router;
