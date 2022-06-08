class Persona {
   // Private -> declaración #variable, no se puede acceder desde fuera de la clase
   #nombre;
   #edad;

   // Protected -> declaración _variable...
   _editorIdes = ['VS Code', 'Atom', 'Sublime'];
   machine = 'MacBook Pro';

   constructor(nombre, edad, isDeveloper) {
      this.#nombre = nombre;
      this.#edad = edad;
      this.isDeveloper = isDeveloper;
      this.lenguajes = ['JavaScript', 'PHP', 'Python'];
   }

   saludo() {
      console.log(`Hola soy ${this.#nombre} y tengo ${this.#edad} años.`);
   }

   // Función getter -> Nos permite acceder (de forma controlada) a algún atributo protegido
   get nombre() {
      return this.#nombre;
   }

   // metodo protegido
   #obtenEdad() {
      return this.#edad;
   }

   get edad() {
      //return this.#edad;
      return this.#obtenEdad(); // Lo uso para probar el método protegido
   }

   set edad(edad) {
      this.#edad = edad;
   }

   comer(string) {
      console.log(`${this.#nombre} está comiendo ${string}`);
   }

   // Método estático
   // static saludo() {
   //    console.log('Hola mundo');
   // }
}

const persona = new Persona('Gorka', 32, true);
console.log(persona);
// console.log(persona.#nombre);
console.log(persona._editorIdes);
persona._editorIdes = [];
console.log(persona._editorIdes);
persona.saludo();

persona.nombre = 'Adios';
console.log(persona);
//console.log(persona.#obtenEdad());

// Getter -> métodos que nos permiten obtener atributos/métodos privados o protegidos
console.log(persona.nombre);

// Setter -> métodos que nos permiten modificar atributos/métodos privados o protegidos
persona.edad = 100;
console.log(persona.edad);

persona.comer('pizza');
persona.comer(2);
