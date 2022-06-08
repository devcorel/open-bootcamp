const miFuncion = (val) => {
   if (typeof val === 'number') {
      return val * 2;
   }

   throw new Error('El valor no es un número');
};

try {
   // Código que puede fallar
   console.log('Está ejecutándose de manera correcta');
   const doble = miFuncion(numero);
   console.log(doble);
} catch (e) {
   // Código que puede fallar
   console.log('Está ejecutándose de manera incorrecta');
   console.log(e);
}

console.log('Fin del programa');
