localStorage.setItem("nombre", "Juan");
// Guarda una variable en el localStorage persiste en el navegador y se elemina manualmente

sessionStorage.setItem("nombre", "Juan");
// Guarda una variable en el sessionStorage y se elimina al cerrar la pestaña del navegador

document.cookie = "nombre=Juan";
// Guarda una variable en la cookie y persiste pero "caduca" automáticamnete o manualmente
document.cookie = "nombre=Juan; expires=Thu, 18 Dec 2019 12:00:00 UTC";
document.cookie =
   "nombre_1=Juan; expires=" + new Date(2030, 1, 1).toUTCString();
document.cookie =
   "nombre_2=Julia; expires=" + new Date(2030, 1, 1).toUTCString();
