// Comparar listas

const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40];

// .every() devuelve true o false si TODOS los elementos cumplen una condición

const resultado = array.every((valor) => {
   if (valor > 0) {
      return true;
   } else {
      return false;
   }
});

console.log(resultado); // false (no todos los elementos son mayores que 0)

// Comprar igualdad de listas
const ar1 = [1, 2, 3, 4, 5];
const ar2 = [1, 2, 3, 4, 5];

console.log(ar1 === ar2); // false (no son el mismo objeto)

const compararArrays = (ar1, ar2) => {
   if (ar1.length !== ar2.length) return false;
   const res = ar1.every((valor, indice) => valor === ar2[indice]);
   return res;
};

console.log(compararArrays(ar1, ar2)); // true (tienen los mismos elementos y valores)
