// Inheritance - Herencia
class Persona {
   #nombre;
   #edad;
   static consolas = ['Nintendo Switch', 'PlayStation 4', 'Xbox One'];
   constructor(nombre, edad) {
      this.#nombre = nombre;
      this.#edad = edad;
   }

   saludo() {
      console.log(`Hola soy ${this.#nombre} y tengo ${this.#edad} años.`);
   }

   get nombre() {
      return this.#nombre;
   }

   get edad() {
      return this.#edad;
   }
}

class Desarrollador extends Persona {
   constructor(nombre, edad, lenguajes) {
      super(nombre, edad);
      this.lenguajes = lenguajes;
   }

   // Override
   saludo() {
      super.saludo();
      console.log(`Y soy desarrollador.`);
   }
}

const nuevoDev = new Desarrollador('Gorka', 32, [
   'JavaScript',
   'PHP',
   'Python',
]);
nuevoDev.saludo();

console.log(Persona.consolas);
Persona.consolas = ['Nintendo Switch Oled'];
console.log(Desarrollador.consolas);
console.log(Persona.consolas);
