class Estudiante {
   constructor(nombre, asignaturas) {
      this.nombre = nombre;
      this.asignaturas = asignaturas;
   }

   obtenerDatos() {
      return `${this.nombre} está estudiando ${this.asignaturas.join(', ')}`;
   }
}

const estudiante = new Estudiante('Israel', ['JavaScript', 'C#', 'Dart']);
console.log(estudiante.obtenerDatos());
