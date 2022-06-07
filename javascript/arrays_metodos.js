let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//.pop() - Elimina el último elemento del array
arrayNumber.pop();
console.log(arrayNumber); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//.push() - Añade un elemento al final del array
arrayNumber.push(11);
console.log(arrayNumber); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]

//.shift() - Elimina el primer elemento del array
arrayNumber.shift();
console.log(arrayNumber); // [2, 3, 4, 5, 6, 7, 8, 9, 11]

//.unshift() - Añade un elemento al principio del array
arrayNumber.unshift(1);
console.log(arrayNumber); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]

//.splice() - Elimina, modifica y añade elementos del array

// Elimina valores .splice(indice, numValoresA_eliminar)
arrayNumber.splice(3, 1); // elimina el elemento del indice 3 (en este caso quitará el 4)
console.log(arrayNumber); // [1, 2, 3, 5, 6, 7, 8, 9, 11]

arrayNumber.splice(4, 3); // elimina los elementos del indice 4 (en este caso quitará el 6, 7 y 8)
console.log(arrayNumber); // [1, 2, 3, 5, 9, 11]

// Añadir valores .splice(indice, 0, valor1, valor2, ...)
arrayNumber.splice(4, 0, 'a', 'b', 'c'); // añade los valores a, b y c al indice 4
console.log(arrayNumber); // [1, 2, 3, 5, "a", "b", "c", 9, 11]

// Remplazar valores .splice(indice, numValoresA_eliminar, valor1, valor2, ...)
arrayNumber.splice(4, 1, 'arbol'); // remplaza el valor del indice 4 (a) por arbol
console.log(arrayNumber); // [1, 2, 3, 5, "arbol", "b", "c", 9, 11]

arrayNumber.splice(5, 1, 'barco', 'borregos'); // remplaza el valor del indice 5 (b) por barco y borregos
console.log(arrayNumber); // [1, 2, 3, 5, "arbol", "barco", "borregos", "c", 9, 11]

arrayNumber.splice(1, 8, 'caballo', 'caballeros'); // se pociciona en el indice 1, elimina 8 elementos a partir de ahí y añade caballo y caballeros
console.log(arrayNumber); // [1, "caballo", "caballeros", 11]

// Copiado de arrays:

//.slice() - Devuelve una copia del array
let arrayNumber2 = arrayNumber.slice(0, 3); // copia los elementos del indice 0 al 3
console.log(arrayNumber2); // [1, "caballo", "caballeros"]

arrayNumber.splice(0, 3); // elimina los elementos del indice 0 al 2 en el array original
console.log(arrayNumber); // [11]
console.log(arrayNumber2); // [1, "caballo", "caballeros"] // el array copiado no se modifica
