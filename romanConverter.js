
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

// Exportar la función para usar en otros archivos o tests
module.exports = { romanToInt };