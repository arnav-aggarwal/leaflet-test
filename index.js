const mymap = L.map('map').setView([32.7, -117.1], 13);
// const accessToken = 'pk.eyJ1IjoiYXJuYXYtYWdnYXJ3YWwiLCJhIjoiY2pmbjF4Z3VvMTNsYTJxbmF5YnlwdzJ2OCJ9.E4ecfm2nMeMJQrPODOXR4w';
// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + accessToken, {
// 	attribution:
// 		'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
// 	maxZoom: 18,
// 	id: 'mapbox.streets',
// 	accessToken: 'your.mapbox.access.token',
// }).addTo(mymap);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

const marker = L.marker([32.7, -117.1]).addTo(mymap);
const circle = L.circle([32.73, -117.13], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 1000,
}).addTo(mymap);

const polygon = L.polygon([[32.709, -117.18], [32.703, -117.16], [32.71, -117.147]]).addTo(mymap);

marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
circle.bindPopup('I am a circle.');
polygon.bindPopup('I am a polygon.');

const popup = L.popup();
mymap.on('click', e =>
	popup
		.setLatLng(e.latlng)
		.setContent('You clicked the map at ' + e.latlng.toString())
		.openOn(mymap)
);
