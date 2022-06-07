// .sort() -> MODICIA el array

const array = [2, 5, 9, 15, 1, 2, 0, 4, 3];

array.sort((a, b) => {
   if (a < b) {
      return -1; // -1 establecer el indice de a menor que el indice de b
   } else if (a > b) {
      return +1; // +1 establecer el indice de a mayor que el indice de b
   } else {
      // a === b
      return 0; // 0 no modificar el índice
   }
});

console.log(array); // [0, 1, 2, 2, 3, 4, 5, 9, 15]

// Ordenar únicamente arrays númericos
const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546];
arrayNumerico.sort((a, b) => a - b); // para ordenar de menor a Mayor
console.log(arrayNumerico); // [1, 1, 1, 3, 3, 4, 7, 56, 546]
arrayNumerico.sort((a, b) => b - a); // para ordenar de Mayor a menor
console.log(arrayNumerico); // [546, 56, 7, 4, 3, 1, 1, 1]

// Interesante en arrays de objetos
const listaObjetos = [
   { nombre: 'Leire', edad: 35 },
   { nombre: 'Gorka', edad: 15 },
   { nombre: 'Miguel', edad: 28 },
   { nombre: 'Lucia', edad: 10 },
   { nombre: 'Amaia', edad: 17 },
];

// Versión larga
/*
listaObjetos.sort((a, b) => {
   if (a.edad < b.edad) {
      return -1;
   } else if (a.edad > b.edad) {
      return +1;
   } else {
      return 0;
   }
});*/

// Versión corta
listaObjetos.sort((a, b) => a.edad - b.edad);

console.log(listaObjetos); // [ { nombre: 'Lucia', edad: 10 }, { nombre: 'Amaia', edad: 17 }, { nombre: 'Gorka', edad: 15 }, { nombre: 'Miguel', edad: 28 }, { nombre: 'Leire', edad: 35 } ]
