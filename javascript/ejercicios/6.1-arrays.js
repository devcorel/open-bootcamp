const listaCompra = ['pan', 'leche', 'café', 'azucar', 'sal'];
console.log('listaCompra', listaCompra);
listaCompra.push('aceite de girasol');
console.log('listaCompra', listaCompra);
listaCompra.pop();
console.log('listaCompra', listaCompra);

const listaPelis = [
   { titulo: 'Gladiador', director: 'Ridley Scott', fecha: 2000 },
   {
      titulo: 'La Increible Vida De Wallter Mity',
      director: 'Ben Stiller',
      fecha: 2013,
   },
   { titulo: 'Fragmentado', director: 'M. Night Shyamalan', fecha: 2016 },
];
console.log('listaPelis', listaPelis);

const recentPelis = listaPelis.filter((peli) => peli.fecha > 2010);
console.log('recentPelis', recentPelis);

const directorPelis = listaPelis.map((peli) => peli.director);
console.log('directorPelis', directorPelis);

const titlePelis = listaPelis.map((peli) => peli.titulo);
console.log('titlePelis', titlePelis);

const directorAndTitlePelis = directorPelis.concat(titlePelis);
console.log('directorAndTitlePelis', directorAndTitlePelis);

const directorAndTitlePelis_pro = [...directorPelis, ...titlePelis];
console.log('directorAndTitlePelis_pro', directorAndTitlePelis_pro);
