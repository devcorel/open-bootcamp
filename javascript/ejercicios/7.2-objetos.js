const misDatosPersonales = {
   nombre: 'Israel',
   apelliod: 'Vazquez',
   edad: 31,
   isDeveloper: true,
};

console.log('misDatosPersonales', misDatosPersonales);

const miEdad = misDatosPersonales.edad;
console.log('miEdad', miEdad);

const datosPersonales_amigo1 = {
   nombre: 'Juan',
   apelliod: 'Perez',
   edad: 34,
   isDeveloper: false,
};

const datosPersonales_amigo2 = {
   nombre: 'Julia',
   apelliod: 'Rodriguez',
   edad: 28,
   isDeveloper: true,
};

const datosPersonalesArray = [
   misDatosPersonales,
   datosPersonales_amigo1,
   datosPersonales_amigo2,
];
console.log('datosPersonalesArray', datosPersonalesArray);

const datosOrdenados = [...datosPersonalesArray].sort(
   (a, b) => a.edad - b.edad
);
console.log('datosOrdenados', datosOrdenados);
