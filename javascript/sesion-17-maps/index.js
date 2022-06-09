let map;
let marker;

function initMap() {
   const position = { lat: -34.397, lng: 150.644 };

   map = new google.maps.Map(document.getElementById("map"), {
      center: position,
      zoom: 8,
   });

   marker = new google.maps.Marker({
      position: position,
      map: map,
      titile: "Posición Inicial",
   });

   // Obtener la posición actual del usuario (geolocalización)
   // marker.setPosition({lat, lng});
   geoPosition();
}

function geoPosition() {
   if (navigator.geolocation) {
      const geoLoc = navigator.geolocation;
      const options = { timeout: 60000 };
      const watchPos = geoLoc.watchPosition(centrarMapa, onError, options);
   } else {
      alert("Geolocalización no soportada");
   }
}

function centrarMapa(position) {
   const nuevaPos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
   };
   marker.setPosition(nuevaPos);
   map.setCenter(nuevaPos);
}

function onError(error) {
   console.log("Se ha producido un error y lo hemos gestionado.");
   console.log(error);
}

window.initMap = initMap;
