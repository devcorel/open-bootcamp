// .some() devuelve true o false si ALGUNOS elementos cumplen una condición

const arr = [1, 2, 3, 4, 55, 67, 773, -908, 9, -410];

let res = arr.some((valor) => valor > 0);
console.log(res); // true (alguno de los elementos es mayor que 0)

res = arr.some((valor) => valor < -500);
console.log(res); // false (no hay ningún elemento que sea menor que -500)

const existe = arr.some((valor) => valor === 773);
console.log(existe); // true (existe un elemento que es 773)

const listaObjetos = [
   { nombre: 'Leire', edad: 35 },
   { nombre: 'Gorka', edad: 15 },
   { nombre: 'Miguel', edad: 28 },
   { nombre: 'Lucia', edad: 10 },
   { nombre: 'Amaia', edad: 17 },
];

const existeMiguel = listaObjetos.some(
   (persona) => persona.nombre === 'Miguel'
);
console.log(existeMiguel); // true (existe un elemento con nombre Miguel)

// Obtener una lista a partir de un objeto iterable
const str = 'Hola';
console.log(str[0]); // H - es iterable porque podemos acceder a sus elementos con un indice

const arr_str = Array.from(str);
console.log(arr_str); // [ 'H', 'o', 'l', 'a' ]

const set = new Set(['Hola', 'Mundo', 'Nodejs']);
console.log(set); // Set(3) { 'Hola', 'Mundo', 'Nodejs' }
const arr_set = Array.from(set);
console.log(arr_set); // [ 'Hola', 'Mundo', 'Nodejs' ]

const keys = arr.keys();
console.log(keys); // Object [Arrat Iterator] {}

const arr_keys = Array.from(keys);
console.log(arr_keys); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] -> los indices
