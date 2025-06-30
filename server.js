const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the front page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'FrontPage.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});