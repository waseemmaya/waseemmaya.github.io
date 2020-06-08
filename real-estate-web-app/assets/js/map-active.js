var map;

function initMap(lat, long) {
  var myLatLng = { lat: lat, lng: long };
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: long },
    zoom: 18,
    marker: true
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Hello World!"
  });
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function runMap() {
  // navigator.geolocation.getCurrentPosition(pos => {
  //   var crd = pos.coords;
  // console.log(`Latitude : ${crd.latitude}`);
  // console.log(`Longitude: ${crd.longitude}`);

  initMap(24.851559, 67.032707);
  // });
}
