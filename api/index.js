const express = require("express");
const { romanToInt, intToRoman } = require("../romanConverter");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/convert", (req, res) => {
  const { value } = req.query;

  if (!value) {
    return res.status(400).json({ error: "Debe proporcionar un valor." });
  }

  // Si el valor es un número → convertir a romano
  if (!isNaN(value)) {
    const num = parseInt(value);
    try {
      const roman = intToRoman(num);
      return res.json({
        input: num,
        roman,
        message: `El número ${num} en romano es ${roman}`
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Si el valor es texto → convertir de romano a número
  try {
    const integer = romanToInt(value);
    return res.json({
      input: value,
      integer,
      message: `El número romano ${value.toUpperCase()} equivale al entero ${integer}`
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

module.exports = app;
