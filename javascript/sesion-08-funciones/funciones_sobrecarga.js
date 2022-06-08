// Carga y sobrecarga de funciones

function saludar() {
   hola();
}

function hola() {
   console.log('Hola, soy la función hola()');
}

saludar();

// function recursivo() {
//    recursivo();
// }

// recursivo(); // Error: RecursionError: recursion limit exceeded
