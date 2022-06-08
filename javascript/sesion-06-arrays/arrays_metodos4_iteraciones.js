// Iterar los valores de una lista

const array = ['hola', 1, 2, 3, true, null, 'adios'];

// Forma antigua (poco eficiente)
for (let i = 0; i < array.length; i++) {
   console.log(array[i]);
} // hola 1 2 3 true null adios

// Forma nueva ES6 (más eficiente)
array.forEach(function (valor, indice, array) {
   console.log(valor);
}); // hola 1 2 3 true null adios

// Misma forma con una arrow function
array.forEach((valor) => console.log(valor)); // hola 1 2 3 true null adios

// Ejemplo
let suma = 0;
const arrayNums = [10, 22, 43, 54, 15];
arrayNums.forEach((valor, index) => {
   suma += valor;
   console.log(`${index} .- ${valor}`);
   // 0 .- 10
   // 1 .- 22
   // 2 .- 43
   // 3 .- 54
   // 4 .- 15
});
console.log(`La suma es ${suma}`); // La suma es 187

// Búsqueda  de un valor en un array .find()
// Devuelve el primer valor que cumpla la condición
const arraySearch = ['gato', 'perro', 'caballo', 'perro', 10];

// Encontrar el valor 'perro'
const found = arraySearch.find((valor) => valor === 'perro');
console.log(found); // perro - tipo String - porque el valor es un string

const listaObjetos = [
   { nombre: 'Leire', edad: 35 },
   { nombre: 'Gorka', edad: 34 },
   { nombre: 'Miguel', edad: 28 },
   { nombre: 'Lucia', edad: 3 },
   { nombre: 'Amaia', edad: 29 },
];

const encontrado = listaObjetos.find((objeto) => objeto.nombre === 'Miguel');
console.log(encontrado); // { nombre: 'Miguel', edad: 28 }

const encontrarMenores = listaObjetos.find((objeto) => objeto.edad < 18);
console.log(encontrarMenores); // { nombre: 'Lucia', edad: 3 }

// Deconstrucción de objetos
const { edad } = listaObjetos.find((objeto) => objeto.nombre === 'Miguel');
console.log(edad); // 28 - tipo Number - porque es el valor de la propiedad edad
