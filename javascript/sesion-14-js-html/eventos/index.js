const $p = document.getElementById("p-texto");

$p.addEventListener("cambioTexto", (e) => {
   // console.log(e.detail);
   $p.innerText = e.detail.texto;
   $p.style.color = e.detail.color;
});

function cambioTexto(nuevoTexto, color) {
   const evento = new CustomEvent("cambioTexto", {
      detail: {
         texto: nuevoTexto,
         color,
      },
   });
   $p.dispatchEvent(evento);
}

document.getElementById("btn-rojo").addEventListener("click", () => {
   cambioTexto("Hola", "brown");
});

document.getElementById("btn-azul").addEventListener("click", () => {
   cambioTexto("Mundo", "blue");
});
