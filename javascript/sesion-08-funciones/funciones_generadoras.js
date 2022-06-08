function* generarId() {
   let id = 0;
   while (true) {
      id++;
      if (id === 10) {
         return id; // Al retornar un valor, el valor done de yield pasa a true
      }
      yield id; // Mientras yield retorne el valor, el valor done de yield será false
   }
}

const gen = generarId();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: 5, done: false }
console.log(gen.next()); // { value: 6, done: false }
console.log(gen.next()); // { value: 7, done: false }
console.log(gen.next()); // { value: 8, done: false }
console.log(gen.next()); // { value: 9, done: false }
console.log(gen.next()); // { value: 10, done: true }
console.log(gen.next()); // { value: undefined, done: true }
