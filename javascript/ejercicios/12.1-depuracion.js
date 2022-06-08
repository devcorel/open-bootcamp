function listaFibonacci(num) {
   let fibonacci = [0, 1];
   for (let i = 2; i <= num; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
   }
   return fibonacci;
}

console.log(listaFibonacci(10));
