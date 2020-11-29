
//create map
const map = L.map('mapid').setView([-3.7546567,-38.6081697], 15)


//create and add titlelayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "/image/gameteam.png",
    iconSize: [95,100],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})


function addMarker({id, name, lat, lng}) {


    //create popup overlay
    const popup = L.popup({
        closeButton: false,
        className:'map-popup',
        minWidth: 180,
        minHeight: 240
}).setContent(`${name} <a href="/gamerhouse?id=${id}"> <img src="/image/Arrows-Right-Round-icon.png" width=34/> </a>`)
    

//create and add marker

    L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

const bestplacesSpan = document.querySelectorAll('.bestplaces span')

bestplacesSpan.forEach(  span => {
    const bestplace = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    
    addMarker(bestplace)
})

  