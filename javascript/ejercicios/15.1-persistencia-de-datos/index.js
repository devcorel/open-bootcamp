const nombre = "Jack";
const apellido = "Sparrow";

const persona = { nombre, apellido };
const hoy = new Date();

const cookieVariable = `persona=${JSON.stringify(persona)};`;
const cookieExpires = `expires=${new Date(
   hoy.getTime() + 2 * 60 * 60 * 1000
).toUTCString()};`;

// localStorage.setItem("persona", JSON.stringify(persona));
// sessionStorage.setItem("persona", JSON.stringify(persona));
// document.cookie = `${cookieVariable} ${cookieExpires}`;
