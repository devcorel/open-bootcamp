let calcularFactorial = (numero) => {
   let resultado = numero;
   let proceso = `${numero}! = ${numero}`;

   if (numero == 0) return 'El número 0 no tiene factorial';

   for (--numero; numero >= 1; numero--) {
      resultado *= numero;
      proceso += 'x' + numero;
   }

   proceso += ' = ' + resultado;

   return proceso;
};

let numero = 10;
console.log(calcularFactorial(numero));
