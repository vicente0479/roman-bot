export default function a2r(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") return res.status(200).end();

  const { arabic } = req.query;

 
  if (!arabic || !/^\d+$/.test(arabic)) {
    return res.status(400).json({ error: "Parámetro inválido" });
  }

  const num = parseInt(arabic, 10);

 
  if (num <= 0 || num > 3999) {
    return res.status(400).json({ error: "Parámetro inválido" });
  }

  const map = [
    [1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],
    [100,'C'],[90,'XC'],[50,'L'],[40,'XL'],
    [10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']
  ];

  let result = '';
  let value = num;

  for (const [v, s] of map) {
    while (value >= v) {
      result += s;
      value -= v;
    }
  }

  res.status(200).json({ roman: result });
}