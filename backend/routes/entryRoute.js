// Route for handeling entries (saving and retrieving entries in the database)


const express = require('express');
const router = express.Router();
const Entry = require('../models/entries');

// creating new eentry
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    // total hours logic
    data.total = Object.values(data.hours).reduce((sum, value) => sum + Number(value || 0), 0); //gpt logic
    const newEntry = new Entry(data);
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// fetching all entries
router.get('/', async (req, res) => {
  try {
    const entries = await Entry.find();
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
