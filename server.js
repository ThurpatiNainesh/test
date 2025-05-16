require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const exampleRoutes = require('./routes/routes');

const app = express();

require('./config/db')();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.use('/api', exampleRoutes);

app.use((req, res, next) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => { // Store server in a variable
  console.log(`Server running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});

// Handle SIGTERM for graceful shutdown
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
  });
});