const fechaActual = new Date();
console.log('fecha actual', fechaActual.toLocaleDateString());

const fechaNacimiento = new Date(1991, 2, 29, 5, 0, 0, 0);
console.log('fecha nacimiento', fechaNacimiento.toLocaleDateString());

const isLate = fechaActual.getHours() > fechaNacimiento.getHours();
console.log('isLate', isLate);

const miDiaNacimiento = fechaNacimiento.getDate();
console.log('miDiaNacimiento', miDiaNacimiento);

const miMesNaacimiento = fechaNacimiento.getMonth();
console.log('miMesNaacimiento', miMesNaacimiento);

const miAnyoNacimiento = fechaNacimiento.getFullYear();
console.log('miAnyoNacimiento', miAnyoNacimiento);
