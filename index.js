var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app = express();

// Body-parser middleware for JSON
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB", error);
});

// Simple route
app.get("/", (req, res) => {
  res.send("Server connection is successful");
});

// Start the server
app.listen(3000, () => {
  console.log("Listening on port 3000");
});


