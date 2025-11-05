
function romanToInt(roman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let total = 0;
  let prev = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const current = romanNumerals[roman[i].toUpperCase()];
    if (!current) throw new Error(`Símbolo romano inválido: ${roman[i]}`);

    if (current < prev) total -= current;
    else total += current;

    prev = current;
  }

  return total;
}
function intToRoman(num) {
  if (num <=0 || num > 3999) throw new Error("numero fuera de rango (1-3999)");
  const romanMap = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];
  
     let result = "";
  for (const { value, symbol } of romanMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}
  


// Exportar la función para usar en otros archivos o tests
module.exports = { romanToInt,intToRoman};