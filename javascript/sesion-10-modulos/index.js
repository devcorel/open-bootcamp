// Formas de importar / exportar módulos
// 1. CommonJS -> require
// 2. ES6 -> Import / Export

//console.log(module);

// Formas de llamar a los módulos
const moduloMatematicas = require('./modulos/matematicas');
const { factorial, suma, multiplica } = require('./modulos/matematicas');

//console.log(moduloMatematicas);

// Formas de llamar a las funciones o variables de un módulo
// const factorial = moduloMatematicas.factorial;
// const { suma, multiplica } = moduloMatematicas;

console.log('Factorial de 5: ' + factorial(5));

const sumaDeNumeros = suma(5, 5);
console.log('Suma de 5 + 5: ' + sumaDeNumeros);

console.log('Multiplicación de 5 * 5: ' + multiplica(5, 5));
console.log('Potencia de 5 ** 5: ' + moduloMatematicas.eleva(5, 5));
