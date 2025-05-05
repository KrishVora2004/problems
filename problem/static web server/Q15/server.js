const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve product data as API
app.get('/api/products', (req, res) => {
  fs.readFile('./products.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Could not load product data' });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
