const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const entryRoutes = require('./routes/entryRoute');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/entries', entryRoutes);

//debugging log

console.log('DB connection check')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => console.error('MongoDB connection error:', err));

//debugging log

console.log('DB connection check') //mongodb connection issue persists(not solved)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
