const apiKey = "at_ovm8qolz9gi279lgc31pQSSGMzBLs"
const baseURL =
	"https://geo.ipify.org/api/v1?apiKey=at_ovm8qolz9gi279lgc31pQSSGMzBLs"

const form = document.querySelector("form")
const result = document.getElementById('result')
const ip = document.getElementById('ip')
const city = document.getElementById('city')
const tz = document.getElementById('tz')
const isp = document.getElementById('isp')

const defaultLatlng = L.latLng(48.853450342427564, 2.348776314097173)
const mymap = L.map("mapid", {
	center: defaultLatlng,
  zoom: 15,
  zoomControl: false
})
const myIcon = L.icon({
  iconUrl: "./images/icon-location.svg",
  iconSize: [46, 56],
  iconAnchor: [23, 56],
})
// L.control({position: 'bottomleft'})

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap)

const findLoc = async query => {
	const loc = await fetch(baseURL + query)
  const data = await loc.json()
  const position = L.latLng(data.location.lat, data.location.lng)
  
  mymap.panTo(position)
  L.marker(position, { icon: myIcon }).addTo(mymap)

  ip.innerText = data.ip 
  city.innerText = data.location.city 
  tz.innerText = 'UTC ' + data.location.timezone 
  isp.innerText = data.isp 
}

form.onsubmit = e => {
	let query = ""
	e.preventDefault()
	query = "&domain=" + e.target[0].value + "&ipAddress=" + e.target[0].value
	findLoc(query)
}

window.onload = findLoc("")

// const ipPattern = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g
// if(ipPattern.test(e.target[0].value)) {
//   console.log("c'est une adresse IP")
//   query = "&ipAddress=" + e.target[0].value
// }
// else {
//   console.log("pas une adresse IP, donc ça doit être un nom de domaine")
//   query = "&domain=" + e.target[0].value
// }