const express = require('express'); // Import Express
const app = express(); // Create an Express app
const port = 3000; // Port number for the server

// Define a route that responds to GET requests at the root ("/") path
app.get('/', (req, res) => {
  res.send('Hello, World!'); // Send a response
});

// Make the server listen on port 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});