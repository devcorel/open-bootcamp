const persona = {
   nombre: 'Israel',
   edad: 31,
   isDeveloper: true,
   saludo: function () {
      console.log('hola');
   },
};

const persona_2 = {
   nombre: 'Miguel',
   edad: 15,
   isDeveloper: false,
   saludo: function () {
      console.log('hello');
   },
};

// console.log(persona);
persona.saludo();

persona_2.saludo();

// Factory Function
const crearPersona = (nombre, edad, isDeveloper) => {
   return {
      nombre,
      edad,
      isDeveloper,
      saludo: function () {
         console.log('hola mundo');
      },
   };
};

const persona_3 = crearPersona('Ramón', 32, true);
const persona_4 = crearPersona('Juan', 15, false);

console.log(persona_3);
persona_3.saludo();
persona_4.saludo();
