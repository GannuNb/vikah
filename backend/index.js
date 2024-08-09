const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

require('dotenv').config();

const app = express();
const port = 8000; // Set the port number to 8000

// Middleware
app.use(bodyParser.json());

// Allow CORS for everyone
app.use(cors());

// Handle preflight requests
app.options('*', cors()); 

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Log environment variables for debugging
console.log('Email User:', process.env.EMAIL_USER);
console.log('Email Pass:', process.env.EMAIL_PASS ? 'Loaded' : 'Not Loaded');

app.post('/send-email', (req, res) => {
  // Rest of the code...

});

app.get('/', (req, res) => {
  res.send('Hello Vikah!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
