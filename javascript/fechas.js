// Trabajando con fechas

const fecha = new Date();
console.log(fecha); // 2022-06-07T08:33:25.229Z

//  los meses inicializan en 0, 0 = Enero y 11 = Diciembre
const fecha2 = new Date(1987, 5, 12);
console.log(fecha2); // 1987-06-12T06:00:00.000Z

const fecha3 = new Date(0); // milisegundos, pueden ser positivos o negativos
const fecha4 = new Date('October 13, 1979 11:13:00');

// Comparar fechas
console.log(fecha4 > fecha3);

const fecha5 = new Date(0);
console.log(fecha5 === fecha3); // false - ERROR: No se pueden comparar fechas de ésta manera

// Forma correcta de comprar fechas
console.log(fecha5.getTime() === fecha3.getTime()); // true
console.log(fecha4.getTime() > fecha3.getTime()); // true

// Obtener el día, el mes y el año de una fecha

// getDate() -> Devuelve el día del mes
console.log(fecha.getDate()); // 7

// getMonth() -> Devuelve el mes (0-11)
console.log(fecha.getMonth()); // 5

// getFullYear() -> Devuelve el año
console.log(fecha.getFullYear()); // 2022

// toLocaleDateString() -> Devuelve una cadena con el formato de fecha local
console.log(fecha.toLocaleDateString()); // 07/06/2022
console.log(fecha.toLocaleDateString('ko-KR')); // 2022. 6. 7.
