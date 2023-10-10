var sorteio = Math.floor(Math.random() * 2);
var vendedor
var num

if(sorteio==0){
    num = "5584981053495"
}
else if(sorteio==1){
    num = "5584981053495"
}

document.getElementById("link").href = "https://wa.me/" + num + "?text=Olá";

let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -5.808470626824163, lng:  -35.21643543981361};
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();