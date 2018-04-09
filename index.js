const mapboxToken = 'pk.eyJ1IjoiYXJuYXYtYWdnYXJ3YWwiLCJhIjoiY2pmbjF4Z3VvMTNsYTJxbmF5YnlwdzJ2OCJ9.E4ecfm2nMeMJQrPODOXR4w';
const port = 32773;
const tileLayers = {
	mapbox: L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxToken, {
		attribution:
			'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: 'your.mapbox.access.token',
	}),
	osmOnline: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	}),
	osmLocal: L.tileLayer(`http://localhost:${port}/styles/klokantech-basic/{z}/{x}/{y}.png`),
};

const map = L.map('map').setView([32.7, -117.1], 13);
tileLayers.osmLocal.addTo(map);

const marker = L.marker([32.7, -117.1]).addTo(map);
const polygon = L.polygon([[32.709, -117.18], [32.703, -117.16], [32.71, -117.147]]).addTo(map);
const circle = L.circle([32.73, -117.13], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.4,
	radius: 1000,
}).addTo(map);

marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
polygon.bindPopup('I am a polygon.');
circle.bindPopup('I am a circle.');

const popup = L.popup();
map.on('click', e =>
	popup
		.setLatLng(e.latlng)
		.setContent('You clicked the map at ' + e.latlng.toString())
		.openOn(map)
);
