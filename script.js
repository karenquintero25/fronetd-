// Coordenadas aproximadas de Teusaquillo, Bogotá
const lat = 4.6433;
const lon = -74.0886;

// Inicializar el mapa
var map = L.map('mapas').setView([lat, lon], 14);

// Añadir el diseño del mapa (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Ejemplo: Añadir un marcador (Paradero)
const paradero = L.marker([4.645, -74.085]).bindPopup("Paradero SITP Ejemplo");

// Escuchar cambios en el SELECT
document.getElementById('capa').addEventListener('change', function(e) {
    if (e.target.value === "SITP") {
        paradero.addTo(map);
    } else {
        map.removeLayer(paradero);
    }
});