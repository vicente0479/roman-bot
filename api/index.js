const express = require('express');
const { romanToInt } = require('../romanConverter.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint GET /convert/:roman
app.get('/convert/:roman', (req, res) => {
  const { roman } = req.params;

  try {
    const result = romanToInt(roman);
    res.json({
      romano: roman.toUpperCase(),
      entero: result
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});