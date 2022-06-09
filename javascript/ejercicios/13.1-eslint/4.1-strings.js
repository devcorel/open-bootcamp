let nombre = "Israel";
let apellido = "Vazquez";

let estudiante = `           ${nombre} ${apellido}         `;

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLocaleLowerCase();

let estudianteCharacters = estudiante.length;

let nombreFirstLetter = nombre.charAt(0);
let apelidoLastLetter = apellido.charAt(apellido.length - 1);

let estudianteTrimmed = estudiante.trim();
let estudianteTrimmedCharacters = estudianteTrimmed.length;
let isNombreInEstudiante = estudiante.includes(nombre);

console.log("estudiante: ", estudiante);
console.log("estudianteMayus: ", estudianteMayus);
console.log("estudianteMinus: ", estudianteMinus);
console.log("estudianteCharacters: ", estudianteCharacters);
console.log("nombreFirstLetter: ", nombreFirstLetter);
console.log("apelidoLastLetter: ", apelidoLastLetter);
console.log("estudianteTrimmed: ", estudianteTrimmed);
console.log("estudianteTrimmedCharacters: ", estudianteTrimmedCharacters);
console.log("isNombreInEstudiante: ", isNombreInEstudiante);
