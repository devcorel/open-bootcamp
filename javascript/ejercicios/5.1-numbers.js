let alturaCm = 178;
let alturaM = 1.78;
let pesoKm = 70.5;
let alturaCeil = Math.ceil(alturaM);
let pesoFloor = Math.floor(pesoKm);

console.log('alturaCm: ', alturaCm);
console.log('alturaM: ', alturaM);
console.log('pesoKm: ', pesoKm);
console.log('alturaCeil: ', alturaCeil);
console.log('pesoFloor: ', pesoFloor);

console.log(Number.MAX_VALUE === Number.MAX_VALUE); // true
console.log(parseInt(Number.MAX_VALUE) === parseInt(Number.MAX_VALUE)); // true
console.log(Number(Number.MAX_VALUE) === Number(Number.MAX_VALUE)); // true

console.log(Number.MAX_VALUE + 1 === Number.MAX_VALUE); // true ???
console.log(parseInt(Number.MAX_VALUE) + 1 === parseInt(Number.MAX_VALUE)); // false

console.log(parseFloat(Number.MAX_VALUE) + 1 === parseFloat(Number.MAX_VALUE)); // true ???
console.log(Number(Number.MAX_VALUE) + 1 === Number(Number.MAX_VALUE)); // true ???
