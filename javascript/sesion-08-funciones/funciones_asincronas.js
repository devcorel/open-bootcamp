const miPromesa = new Promise((resolve, reject) => {
   const i = Math.floor(Math.random() * 2);
   setTimeout(() => {
      if (i !== 0) {
         resolve();
      } else {
         reject();
      }
   }, 1000);
});

console.log('Antes de la promesa');

miPromesa
   .then(() => console.log('Todo bien'))
   .catch(() => console.log('Algo malo'))
   .finally(() => console.log('Promesa ejecutada'));

console.log('Después de la promesa');
