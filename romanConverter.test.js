const { romanToInt } = require('./romanConverter');

test('Convierte números romanos correctamente', () => {
  expect(romanToInt('I')).toBe(1);
  expect(romanToInt('III')).toBe(3);
  expect(romanToInt('IV')).toBe(4);
  expect(romanToInt('IX')).toBe(9);
  expect(romanToInt('LVIII')).toBe(58);
  expect(romanToInt('MCMXCIV')).toBe(1994);
});