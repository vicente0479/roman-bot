export default function r2a(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") return res.status(200).end();

  const { roman } = req.query;

  const canonicalRomanRegex = /^(?=.*[IVXLCDM])(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;

  if (!roman || !canonicalRomanRegex.test(roman)) {
    return res.status(400).json({ error: "Parámetro inválido" });
  }

  const map = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
  const chars = roman.toUpperCase().split("");

  let total = 0;

  for (let i = 0; i < chars.length; i++) {
    const current = map[chars[i]];
    const next = map[chars[i+1]] || 0;

    
    total += current < next ? next - current : current;

    if (current < next) i++;
  }

  if (total <= 0) {
      return res.status(400).json({ error: "Parámetro inválido" });
  }

  res.status(200).json({ arabic: total });
}