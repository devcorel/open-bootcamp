let map;
let marker;

const lugaresFavoritos = [
   {
      marker: null,
      position: { lat: 25.90118824607186, lng: -100.27848309271666 },
      title: "Quinta las Hadas",
   },
   {
      marker: null,
      position: { lat: 25.9047124825292, lng: -100.28352837384853 },
      title: "Quinta Los Dos Cachorros",
   },
   {
      marker: null,
      position: { lat: 25.908993802750658, lng: -100.27774093933935 },
      title: "Quinta Los Pinos",
   },
];

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

   lugaresFavoritos.forEach((lugar) => {
      lugar.marker = addMarker(lugar.position, lugar.title);
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

function addMarker(position, title) {
   const marker = new google.maps.Marker({
      position: position,
      map: map,
      titile: title,
   });
   return marker;
}

window.initMap = initMap;
