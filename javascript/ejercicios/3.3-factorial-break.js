let calcularFactorial = (numero, limite) => {
   let resultado = numero;
   let proceso = `${numero}! = ${numero}`;

   if (numero == 0) return 'El número 0 no tiene factorial';

   while (numero >= 1) {
      resultado *= numero;

      if (resultado >= limite) {
         break;
      }

      proceso += 'x' + numero;
      numero--;
   }

   proceso += ' = ' + resultado;

   return proceso;
};

let numero = 10;
let limite = 5000;
console.log(calcularFactorial(numero, limite));
