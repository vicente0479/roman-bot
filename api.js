const express = require('express');
const { romanToInt } = require('./romanConverter');
const app = express();

app.get('/', (req, res) => {
  const { roman } = req.query;
  if (!roman) return res.status(400).send('Falta el parámetro "roman"');

  try {
    const result = romanToInt(roman);
    res.send({ roman: roman.toUpperCase(), value: result });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));