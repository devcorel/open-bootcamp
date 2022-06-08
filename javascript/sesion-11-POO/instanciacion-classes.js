class Persona {
   // Cuando son variables públicas no hace falta declararlas
   // nombre;
   // edad;
   // isDeveloper;

   constructor(nombre, edad, isDeveloper) {
      this.nombre = nombre;
      this.edad = edad;
      this.isDeveloper = isDeveloper;
      this.lenguajes = ['JavaScript', 'PHP', 'Python'];
   }

   saludo() {
      console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años.`);
   }
}

const nueva_persona = new Persona('Israel', 31, true);
console.log(nueva_persona);
nueva_persona.saludo();

let numero = 60; // inicialiar
console.log(typeof numero); // tipo number
let persona_2 = new Persona('María', 34, false); // instanciar
// instanceof -> similiar a typeof pero para clases
console.log(persona_2 instanceof Persona); // true
