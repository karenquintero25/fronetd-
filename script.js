const map = L.map("map").setView([4.6486, -74.0836], 11);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

let rutasLayer;

document.getElementById("select-location").onchange = function() {
    const val = this.value;
    if (val === "-1") return;

    // Si es coordenada (ej. Teusaquillo)
    if (val.includes(",")) {
        const coords = val.split(",").map(Number);
        map.flyTo(coords, 14);
        L.marker(coords).addTo(map).bindPopup("Ubicación seleccionada").openPopup();
    }

    // Si es SITP
    if (val === "sitp") {
        fetch("paradero_zonal.geojson")
            .then(res => res.json())
            .then(data => {
                if (rutasLayer) map.removeLayer(rutasLayer);
                rutasLayer = L.geoJSON(data, { style: { color: "blue", weight: 2 } }).addTo(map);
                map.fitBounds(rutasLayer.getBounds());
            })
            .catch(err => console.error("Error:", err));
    }
};