function verdadero() {
   return true;
}

console.log('verdadero()', verdadero());

const saludarPromesa = new Promise((res, rej) => {
   setTimeout(() => {
      res('Hola soy una promesa');
   }, 5000);
});

saludarPromesa.then((r) => console.log(r));

function* pares() {
   let i = 0;
   while (true) {
      i = i + 2;
      yield i;
   }
}

const paresGenerador = pares();
console.log('paresGenerador.next()', paresGenerador.next());
console.log('paresGenerador.next()', paresGenerador.next());
console.log('paresGenerador.next()', paresGenerador.next());
console.log('paresGenerador.next()', paresGenerador.next());
console.log('paresGenerador.next()', paresGenerador.next());
