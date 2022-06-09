const $f = document.getElementById("formulario");
console.log($f);

$f.addEventListener("submit", (e) => {
   console.log(e);
   e.preventDefault();
});
