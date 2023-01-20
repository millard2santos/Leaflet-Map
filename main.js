

const map = L.map('map')
map.locate({setView:true,maxZoom:16})
console.log(map.locate({setView:true,maxZoom:16}));


// console.log(map);
let mapUpdates = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// const redMarker = L.icon({
//     iconUrl: './icons/red-marker.png',
//     iconSize: [38, 95],
//     iconAnchor: [22, 94],
//     popupAnchor: [-3, -76],
// });


// const positions = []


// const gammaMarker= L.marker([51.5, -0.09])
// gammaMarker.addTo(map)

// console.log(gammaMarker);

const getData = (url) => {
    return fetch(url)
    .then(res => res.json())
}

// document.querySelector('#spain').addEventListener('click', () => {
//     gammaMarker.setLatLng([40,5])
// })


// setInterval(() => {
   
    // getData('https://api.metro.net/LACMTA/vehicle_positions/all?geojson=true')
    //     .then(res => {
    //         res.features.forEach((e,i) => {
    //             const marker = L.marker([e.properties.position.latitude, e.properties.position.longitude])
    //             if(positions.length < res.features.length){
    //                 positions.push(marker)
    //                 marker.addTo(map)
    //             }else{
    //                 positions[i].setLatLng([e.properties.position.latitude, e.properties.position.longitude])
    //             }


    //         })
    //     })
    
    
// },5000)






getData('https://data.nasa.gov/resource/gh4g-9sfh.json')
    .then(res => {
        const realRes = res.filter((e, i) => {
            if (Object.hasOwn(e, 'geolocation')) {
                return e
            }
        })
        console.log(realRes);
        realRes.forEach(e => {
            L.marker([e.geolocation.latitude, e.geolocation.longitude],{
                draggable:true
            }).addTo(map);
        })
    })












