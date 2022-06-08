let a = 2;
let b = new Number(3); // casting

console.log(a); //2
console.log(b); // Number 3 {}
console.log(a + b); // 5, por detras el interprete está sumando: a.valueOf() + b.valueOf()

console.log(b.valueOf()); // 3

let str = new String('Hola mundo'); // se ha castreado como un Iterator
console.log(str); // String "Hola mundo" { [Iterator] { 0: 'H', 1: 'o', 2: 'l', ...} }
console.log(str.valueOf()); // "Hola mundo"

// NaN (Not a Number) - Infinity
let n = Number('adios');
console.log(n); // NaN
console.log(isNaN(n)); // true, porque n no es un número (isNotANumber? = isNaN)

let numerador = 19;
let divisor = 0;
let resultado = numerador / divisor;
console.log(numerador / divisor); // Infinity (infinito)
let divisor_2 = null;
console.log(numerador / divisor_2); // Infinity (infinito)
console.log(isFinite(resultado)); // false, porque resultado es infinito (isFinite?)

// Cómo convertir strings a valores numérricos (Number, parseInt, parseFloat)
console.log(typeof n); // string
console.log(typeof parseInt(n)); // number
let numero = '5.89';
let num2 = 5;
console.log(num2 + numero); // 55.89, "concatena" 5 + 5.89 = 55.89 porque numero es un string
console.log(num2 + parseInt(numero)); // 10, porque convierte a entero(int) sin decimales
console.log(num2 + parseFloat(numero)); // 10.89, porque convierte a decimal(float) con decimales

console.log(num2 + Number(numero)); // 10.89, porque convierte a un número como está tal cual en el string

// Números hexadecimales (base 16)
let hex = 0xff;
let hex2 = '0xff';
console.log(hex); // 255
console.log(parseInt(hex2)); // 255
console.log(parseInt(hex2, 16)); // 255
console.log(parseInt(hex2, 8)); // 0 porque le estamos dando la base Octal (8)

// Números octales (base 8)
let oct = 0o7;
let oct2 = '0o7';
console.log(oct); // 7
console.log(parseInt(oct2)); // 0 porque parseInt por defecto calcula hexadecimal o decimal
console.log(parseInt(oct2, 8)); // 0 ???

// Max y min
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log('min_precision: ', min_precision); // 2.220446049250313e-16
console.log('min_valor_JS: ', min_valor_JS); // 5e-324
console.log('max_valor_JS: ', max_valor_JS); // 1.7976931348623157e+308
console.log(2 ** 1024); // Infinity porque supera el valor máximo (1.7976931348623157e+308)
