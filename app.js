const apiKey = "at_ovm8qolz9gi279lgc31pQSSGMzBLs"
const baseURL = "https://geo.ipify.org/api/v1?apiKey=at_ovm8qolz9gi279lgc31pQSSGMzBLs"

const defaultLatlng = L.latLng(50.5, 10.5)
const mymap = L.map("mapid", {
  center: defaultLatlng,
  zoom: 15,
})

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap)

window.onload = async () => {
  const localIP =  await fetch(baseURL)
  console.log('localIP', localIP)

  // navigator.geolocation.getCurrentPosition(
  //   pos => {
  //     const localPosition = L.latLng(pos.coords.latitude, pos.coords.longitude)
  //     console.log('localPosition', localPosition)
  //     mymap.panTo(localPosition)
  //   },
  //   err => console.log(err)
  // )
}