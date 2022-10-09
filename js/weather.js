const API_KEY = "e64aca4b5bc2c7a3de040bfe095ccf02";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weather = document.querySelector("#weather span");
      weather.innerText = `${data.name} - ${data.weather[0].main} / ${data.main.temp}'C`;
    });
}

function onGeoError() {
  alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
