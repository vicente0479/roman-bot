const { romanToInt } = require('../romanConverter');

module.exports = async (req, res) => {
  const { roman } = req.query;

  if (!roman) {
    return res.status(400).send({ error: 'Falta el parámetro "roman"' });
  }

  try {
    const result = romanToInt(roman);
    res.send({ roman: roman.toUpperCase(), value: result });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};