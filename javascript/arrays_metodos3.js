// Obtener una lista a partir de otra .slice(indiceInicial, indiceFinal)

const array = ['hola', 1, 2, 3, true, null, 'adios'];

// El método slice no modifica el array original, si no que crea y retorna un nuevo array
const lista1 = array.slice(1, 4); // extraer del indice 1 al 4
console.log(lista1); // [1, 2, 4]

// Con valores negativos se cuenta desde el final
const lista2 = array.slice(2, -2); // extraer del indice 2 al -2 (-1 = "adios", -2 = "null")
console.log(lista2); // [2, 3, true]
