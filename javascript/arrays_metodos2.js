// Unir dos listas .concat(lista2);

const lista1 = ['hola', 2, false, null];
const lista2 = ['adios', 3, true, undefined];

// COncat no muta el array original creará y devolverá un nuevo array
const lista3 = lista1.concat(lista2);
console.log(lista3); // ["hola", 2, false, null, "adios", 3, true, undefined] - nuevo array
console.log(lista1); // ["hola", 2, false, null] - array original no se modifica

// Cómo unir dos listas con el factor de propagación
console.log(...lista3); // hola 2 false null adios 3 true undefined

const lista4 = [...lista1, ...lista2];
console.log(lista4); // ["hola", 2, false, null, "adios", 3, true, undefined] - nuevo array

const lista5 = [...lista1, 'propagación', ...lista2];
console.log(lista5); // ["hola", 2, false, null, "propagación", "adios", 3, true, undefined] - nuevo array

const lista6 = [lista1, lista2]; // sin el factor de propagación, creará 2 array dentro de 1;
console.log(lista6); // [["hola", 2, false, null], ["adios", 3, true, undefined]]
