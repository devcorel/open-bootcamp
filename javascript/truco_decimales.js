let a = 0.1;
let b = 0.2;

console.log(a + b);

// Truco para calcular el resultado con decimales (suma y resta solamente)
let fixedDecimlas_suma = Math.round((a + b) * 100) / 100;
let fixedDecimlas_resta = Math.round((a - b) * 100) / 100;
//let fixedDecimlas_multiplicacion = Math.round(a * b * 100) / 100;
//let fixedDecimlas_division = Math.round((a / b) * 100) / 100;

console.log('fixedDecimlas_suma: ', fixedDecimlas_suma);
console.log('fixedDecimlas_resta: ', fixedDecimlas_resta);
//console.log('fixedDecimlas_multiplicacion: ', fixedDecimlas_multiplicacion);
//console.log('fixedDecimlas_division: ', fixedDecimlas_division);
