let calcularFactorial = (numero) => {
   let resultado = numero;
   let proceso = `${numero}! = ${numero}`;

   if (numero == 0) return 'El número 0 no tiene factorial';

   while (numero >= 1) {
      resultado *= numero;
      proceso += 'x' + numero;
      numero--;
   }

   proceso += ' = ' + resultado;

   return proceso;
};

let numero = 10;
console.log(calcularFactorial(numero));
