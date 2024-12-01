const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const path = require('path');
const port = 3019; // Use the desired port
const app = express();

// Body-parser middleware for JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Bean&Brews', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB", error);
});

// Mongoose Schema for Customer (adjusted to match the form fields)
const customerSchema = new mongoose.Schema({
  customerName: String,
  customerEmail: String,
  customerPhone: String,
  customerAddress: String,
  orderItem: String,
  quantity: Number,
});

const Customer = mongoose.model('Customer', customerSchema);

// POST route to handle order submission
app.post("/addCustomer", (req, res) => {
  console.log("Form data received:", req.body);
  
  const { customerName, customerEmail, customerPhone, customerAddress, orderItem, quantity } = req.body;

  // Create a new customer instance using the submitted data
  const newCustomer = new Customer({
    customerName,
    customerEmail,
    customerPhone,
    customerAddress,
    orderItem,
    quantity,
  });

  // Save the new customer to the database
  newCustomer.save()
    .then(() => {
      console.log("Order placed successfully!");
      // Send a JSON response indicating success
      res.status(200).json({ success: true, message: 'Order placed successfully' });
    })
    .catch((error) => {
      console.error("Error placing order:", error);
      res.status(500).json({ success: false, message: "There was an error placing your order." });
    });
});

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
