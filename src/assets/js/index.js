console.log("test");


function initMap() {
  new google.maps.Map(document.querySelector(".contact__map"), {
    mapId: "8e0a97af9386fef",
    center: { lat: 48.85, lng: 2.35 },
    zoom: 12,
  });
}

// window.initMap = initMap;