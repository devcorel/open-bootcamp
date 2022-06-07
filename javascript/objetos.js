// Trabajando con objetos

const obj = {
   id: 4,
   nombre: 'Juan',
   apellido: 'Perez',
   isDeveloper: true,
   librosFavoritos: ['El señor de los anillos', 'El principito', 'El hobbit'],
   '4-juegos': ['Mario', 'Zelda', 'Metroid', 'Castlevania'],
};

// Copiar objetos sin referencias
// const obj2 = Object.assign({}, obj)

const obj2 = { ...obj };
obj2.nombre = 'Israel';
console.log(obj2.nombre); // Israel
console.log(obj.nombre); // Juan

// Ordenar listas de objetos en función de una propiedad

const listaPelis = [
   { titulo: 'Lo que el viento se llevó', anyo: 1939 },
   { titulo: 'Titanic', anyo: 1997 },
   { titulo: 'Moana', anyo: 2016 },
   { titulo: 'El efecto mariposa', anyo: 2004 },
   { titulo: 'TED', anyo: 2012 },
];

// .sort() -> MUTA el valor de la lista original
listaPelis.sort((a, b) => a.anyo - b.anyo); // Ordena de menor a mayor
console.log(listaPelis);
/*
      [
         { titulo: 'Lo que el viento se llevó', anyo: 1939 },
         { titulo: 'Titanic', anyo: 1997 },
         { titulo: 'El efecto mariposa', anyo: 2004 },
         { titulo: 'TED', anyo: 2012 },
         { titulo: 'Moana', anyo: 2016 }
      ]
   */
