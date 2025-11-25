const cors = require("cors");

module.exports = (req, res) => {
  cors()(req, res, () => {
    const { roman } = req.query;

    // Validación
    if (!roman || !/^[IVXLCDM]+$/i.test(roman)) {
      return res.status(400).json({ error: "Parámetro inválido" });
    }

    const map = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
    const chars = roman.toUpperCase().split("");

    let total = 0;
    for (let i = 0; i < chars.length; i++) {
      const curr = map[chars[i]];
      const next = map[chars[i + 1]] || 0;

      total += curr < next ? next - curr : curr;

      if (curr < next) i++;
    }

    return res.status(200).json({ arabic: total });
  });
};
