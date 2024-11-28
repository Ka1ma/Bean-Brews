const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = 3019
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(__dirname))

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
