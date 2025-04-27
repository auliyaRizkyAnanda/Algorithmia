const express = require('express');
const app = express();

// Ini route default
app.get('/', (req, res) => {
  res.send('Halo, ini aplikasi Express di Vercel!');
});

// Export handler ke Vercel
module.exports = app;
