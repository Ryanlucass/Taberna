const options ={
    dragging: false,
    touchZoom: false,
    doubleCliczoom: false,
    scrollWheelZoom:false,
    zoomControl: false
}

// get velues from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng


//create map
const map = L.map('mapid', options).setView([lat,lng], 15)


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

//create and add marker


L.marker([lat,lng], { icon })
.addTo(map)

// image galery

function selectImage(event){
    const button = event.currentTarget

    console.log(button.children)
    

    //remove todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")

    }
    //selecionar a image clicada 
    const image = button.children[0] 
    const imageContainer = document.querySelector(".gamerhouse-details > img")
   
    //atualizar o container de image
    imageContainer.src = image.src

    //adicionar a classe .active para esse botão
    button.classList.add('active')  
}