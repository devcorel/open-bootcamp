// Trabajar con métodos más avanzados
// .map() .filter() .reduce()

const array = [
   'Lunes',
   'Martes',
   'Miércoles',
   'Jueves',
   'Viernes',
   'Sábado',
   'Domingo',
];

// .map() itera y es capaz de retornar un nuevo array con los valores que modifiquemos
const arrayDias = array.map((dia) => dia.toUpperCase());
console.log(arrayDias); // ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO", "DOMINGO"]

const arrayDias2 = array.map(
   (dia, indice) => `${++indice} - ${dia.toLowerCase()}`
);
console.log(arrayDias2); // ["1 - lunes", "2 - martes", "3 - miercoles", "4 - jueves", "5 - viernes", "6 - sabado", "7 - domingo"]

// .filter() itera y retorna un nuevo " array " con los valores que cumplan la condición
const listaObjetos = [
   { nombre: 'Leire', edad: 35 },
   { nombre: 'Gorka', edad: 15 },
   { nombre: 'Miguel', edad: 28 },
   { nombre: 'Lucia', edad: 10 },
   { nombre: 'Amaia', edad: 17 },
];

const encontrarMenores = listaObjetos.filter((objeto) => objeto.edad < 18);
console.log(encontrarMenores); // [{ nombre: 'Gorka', edad: 15 }, { nombre: 'Lucia', edad: 10 }, { nombre: 'Amaia', edad: 17 }]

const nuevaLista = listaObjetos.filter((obj) => obj.nombre !== 'Miguel');
console.log(nuevaLista); // [{ nombre: 'Leire', edad: 35 }, { nombre: 'Gorka', edad: 15 }, { nombre: 'Lucia', edad: 10 }, { nombre: 'Amaia', edad: 17 }]

// .reduce() itera y puede retornar un valor único o un array
// - .reduce( (valorAnterior, valorActual, indice, arrayOriginal), valorInicial )
// - valorAnerior, es un valor que se va a ir acumulando en cada iteración, tomará el valor de cada return de la función, su valor inicial es valorInicial
// - valorInicial, si no se establece, tomará el valor del primer elemento del array por default

const suma = listaObjetos.reduce(
   (valorAnterior, valorActual) => valorAnterior + valorActual.edad, // retornamos la suma y  valorAnterior de la siguiente iteración tomará el resultado retornado de ésta suma // ojo con la ","
   0 // establecemos el valorInicial y que será ocupado por valorAnterior en la primer iteración
);
console.log(suma); // 105 - tipo Number

const nombresMenores = listaObjetos.reduce(
   (valorAnterior, valorActual) => {
      if (valorActual.edad < 18) {
         valorAnterior.push(valorActual.nombre); // valorAnterior es un array porque lo definimos con [] al establecer el valorInicial más abajo...
      }
      return valorAnterior;
   },
   [] // establecemos el valorInicial, en este caso un array que también será ocupado por valorAnterior en la primer iteración
);
console.log(nombresMenores); // ["Leire", "Gorka", "Lucia", "Amaia"] - Array

// es preferible establecer el valor inicial para arrays con objetos
// para asi no tener que escribir lógica de más
const nombresMayoyes = listaObjetos.reduce(
   (valorAnterior, valorActual, index) => {
      if (isNaN(valorAnterior)) {
         valorAnterior = valorAnterior.edad;
      }

      return (valorAnterior += valorActual.edad);

      /*
         este ejemplo dará error porque valorAnterior es un objeto 
         valorAntreior = objeto (primer valor del array por default)
         if (valorActual.edad >= 18) {
            valorAnterior += valorActual.edad; // error porque valorAnterior es un objeto
         }
         return valorAnterior;
      */
   }
   //, [], dejaremos que tome el primer valor del array por default como valorInicial
);

console.log(nombresMayoyes); // 105

// Para arrays de valores, el valorInicial por default es más fácil de controlar
const arrayNumbers = [10, 10, 10, 10, 10];

const sumaArrayNumbers = arrayNumbers.reduce(
   (valorAnerior, valorActual) => (valorAnerior += valorActual)
);

console.log(sumaArrayNumbers); // 50
