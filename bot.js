const readline = require('readline');
const { romanToInt } = require('./romanConverter');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🤖 Bienvenido al bot conversor de números romanos!');
rl.question('Ingresá un número romano: ', (roman) => {
  try {
    const result = romanToInt(roman);
    console.log(`✅ ${roman.toUpperCase()} equivale a ${result}`);
  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
  } finally {
    rl.close();
  }
});