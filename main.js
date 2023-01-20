
const map = L.map('map').setView([50.5, 30.5], 1);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const redMarker = L.icon({
    iconUrl: './icons/red-marker.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],

});





const markerGamma = L.marker([51.5, -0.09], {
    icon : redMarker
}).addTo(map);

const getData = (url) => {
    return fetch(url)
        .then(res => res.json())

}

// getData('https://data.nasa.gov/resource/gh4g-9sfh.json')
// .then(res => {
//     const realRes = res.filter((e,i)=> {
//         if(Object.hasOwn(e, 'geolocation')){
//             return e
//         }
//     })
//     console.log(realRes);
//     realRes.forEach(e=> {
//         L.marker([e.geolocation.latitude, e.geolocation.longitude]).addTo(map);
//     })
// })
getData('https://api.metro.net/LACMTA/vehicle_positions/all?geojson=true')
.then(res => {
    res.features.forEach(e=> {
        L.marker([e.properties.position.latitude, e.properties.position.longitude]).addTo(map);
    })
})




// const user = {
//     name : 'millard',
//     movies:{
//         first: 'batman',
//         second: 'spiderman'
//     }
// }



// if(Object.hasOwn(user.movies, 'first')){
//     console.log('si');
// }else{
// console.log('no');
// }


