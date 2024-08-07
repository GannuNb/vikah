const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'https://vikahecotech.vercel.app/'  // Update this to your frontend URL after deployment
}));

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/send-email', (req, res) => {
  const { name, company, machinery, model, email, website, phone, address, city, country, message } = req.body;
  
  const pdfPath = path.join(__dirname, 'pdfs', `${model}.pdf`);

  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Details from Vikah Ecotech for Model No ${model}`,
    html: `
      <div style="text-align: justify;">
        <p><strong>Thanks for showing your interest in our machinery and services.</strong></p>
        <p>We consider you as our utmost priority and will get back to you as soon as possible.</p>
        <p>Please find the model details:</p>
        <p><strong>Model: ${model}</strong> (attachment included)</p>
      </div>
    `,
    attachments: [
      {
        filename: `${model}.pdf`,
        path: pdfPath
      }
    ]
  };

  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: 'nbyaswanth1818@gmail.com', 
    subject: `New Enquiry for model ${model}`,
    html: `
      <div style="text-align: justify;">
        <p><strong>A new enquiry form has been submitted with the following details:</strong></p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Machinery:</strong> ${machinery}</p>
        <p><strong>Model:</strong> ${model}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Message:</strong> ${message}</p>
      </div>
    `
  };

  transporter.sendMail(userMailOptions, (error, userMailInfo) => {
    if (error) {
      console.error('Error sending user email:', error);
      return res.status(500).send('Error sending user email: ' + error.toString());
    }
    
    transporter.sendMail(adminMailOptions, (error, adminMailInfo) => {
      if (error) {
        console.error('Error sending admin email:', error);
        return res.status(500).send('Error sending admin email: ' + error.toString());
      }
      
      console.log('User email sent:', userMailInfo.response);
      console.log('Admin email sent:', adminMailInfo.response);
      res.status(200).send('Thanks for sending enquiry one of our executive get back to you');
    });
  });
});

//hello gannu
// Export the app for Vercel app
module.exports = app;
