$(() => {
   const $btnEvento = document.getElementById("btn-evento");

   $btnEvento.addEventListener("click", (e) => {
      alert("click en el botón");
   });

   $("#btn-evento").click(() => {
      console.log("click en el botón");
   });
});
