import {
   nombre,
   suma,
   multiplica,
   eleva,
   factorial,
} from './modulos/matematicas.js';

import getAutor, { libro, libro2 } from './modulos/literatura.js';

/*
   // Otra forma de llamar a los módulos con ES6
   import * as moduloMatematicas from './modulos/matematicas.js';
   console.log(moduloMatematicas.suma(1, 2));

   */

console.log('Modulo de: ' + nombre);

const sum = suma(4, 22);
console.log('Suma: ' + sum);

console.log('Multiplica: ' + multiplica(4, 22));
console.log('Eleva: ' + eleva(4, 22));
console.log('Factorial: ' + factorial(4));

console.log('Autor: ' + getAutor());
console.log('Libro: ' + libro);
console.log('Libro de otro Autor: ' + libro2);
