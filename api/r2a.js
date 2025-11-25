export default function handler(req, res) {
  const { roman } = req.query;

  if (!roman || !/^[IVXLCDM]+$/i.test(roman)) {
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

  res.status(200).json({ arabic: total });
}
