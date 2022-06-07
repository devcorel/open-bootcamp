// Sets o conjuntos (en castellano)
// Set permite tener un conjunto de valores "únicos"

const array = [1, 2, 3, 'hola', 1, 'hola'];
console.log(array); // [ 1, 2, 3, "hola", 1, "hola" ]

const miSet = new Set(array);
console.log(miSet); // Set(4) { 1, 2, 3, "hola" }

// .add() - añade un elemento al set, si ya existe no lo añade
miSet.add(4);
console.log(miSet); // Set(5) { 1, 2, 3, "hola", 4 }
miSet.add('hola');
console.log(miSet); // Set(5) { 1, 2, 3, "hola", 4 }

// .delete() - elimina un elemento del set
miSet.delete(1);
console.log(miSet); // Set(4) { 2, 3, "hola", 4 }

// .clear() - elimina todos los elementos del set
// miSet.clear();
// console.log(miSet); // Set(0) {}

// .has() - devuelve true o false si existe un elemento en el set
console.log(miSet.has(1)); // false
console.log(miSet.has(4)); // true

// .size() - devuelve el número de elementos del set
console.log(miSet.size); // 4

// iterar sobre un set
let printSet = '';
miSet.forEach((valor) => (printSet += valor + ' '));
console.log(printSet); // 2 3 "hola" 4

// .keys() - devuelve un iterador con los elementos del set
const miKeys = miSet.keys();
console.log(miKeys); // Set Iterator { 1, 2, 3, "hola", 4 }

// .values() - devuelve un iterador con los valores del set
const miValues = miSet.values();
console.log(miValues); // Set Iterator { 2, 3, "hola", 4 }

// conviertir un set en un array
const miArray = Array.from(miSet);
console.log(miArray); // [ 2, 3, "hola", 4 ]
const miArray_pro = [...miSet];
console.log(miArray_pro); // [ 2, 3, "hola", 4 ]
