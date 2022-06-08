const persona = {
   nombre: 'Gorka',
   edad: 34,
};

console.log(persona);

function obtenDobleEdad(edad) {
   return 2 * edad;
}

const dobleEdad = obtenDobleEdad(persona.edad);

console.log(dobleEdad);
