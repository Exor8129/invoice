// routes/customers.js
const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer'); // Import the Customer model

// Get all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
