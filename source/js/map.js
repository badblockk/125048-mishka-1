function initMap() {
  var mishka = {lat: 59.938750, lng: 30.323178};
  var mishka_fake = {lat: 59.936319, lng: 30.321681};
  var map = new google.maps.Map(document.getElementById("map"), {
    center: mishka_fake,
    scrollwheel: false,
    zoom: 16,
    disableDefaultUI: true
  });
  var image = "img/icon-map-pin.svg";
  var marker = new google.maps.Marker({
    position: mishka_fake,
    map: map,
    icon: image
  });

  var defaultMap = document.querySelector(".contacts__map");
  if(defaultMap) {
    defaultMap.classList.remove("contacts__map--nojs");
  }
}
