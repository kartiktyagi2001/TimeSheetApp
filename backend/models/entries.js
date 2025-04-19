// Schema for entries
const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  employee: String,
  projectId: String,
  projectName: String,
  hours: {
    mon: { type: Number, default: 0 },
    tue: { type: Number, default: 0 },
    wed: { type: Number, default: 0 },
    thu: { type: Number, default: 0 },
    fri: { type: Number, default: 0 },
    sat: { type: Number, default: 0 },
    sun: { type: Number, default: 0 }
  },
  remarks: String,
  total: Number
}, { timestamps: true });

module.exports = mongoose.model('Entry', entrySchema);
