const $parrafos = document.querySelectorAll(".parrafo");
const $secciones = document.querySelectorAll(".seccion");
const $imgOnDragging = document.querySelector(".imagen-fantasma");

const $seccionBorrrar = document.querySelector(".seccion-borrar");

const dragStart = (e) => {
   e.dataTransfer.setData("id", e.target.id);
   e.target.classList.add("dragging");
   e.dataTransfer.setDragImage($imgOnDragging, 0, 0);
};

const dragEnd = (e) => {
   e.preventDefault();
   e.target.classList.remove("dragging");
};

$parrafos.forEach(($parrafo) => {
   $parrafo.addEventListener("dragstart", dragStart);
   $parrafo.addEventListener("dragend", dragEnd);
});

$secciones.forEach(($seccion) => {
   $seccion.addEventListener("dragover", (e) => {
      e.preventDefault(); // el comportamiento por defecto no deja usar el evento drop
      e.dataTransfer.dropEffect = "copy"; // por defecto
   });

   $seccion.addEventListener("drop", (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData("id");
      const $elemento = document.getElementById(id);
      $seccion.appendChild($elemento);
   });
});

$seccionBorrrar.addEventListener("dragover", (e) => {
   e.preventDefault(); // el comportamiento por defecto no deja usar el evento drop
   e.dataTransfer.dropEffect = "move"; // por defecto
});

$seccionBorrrar.addEventListener("drop", (e) => {
   e.preventDefault();
   const id = e.dataTransfer.getData("id");
   const $elemento = document.getElementById(id);
   $elemento.remove();
});
