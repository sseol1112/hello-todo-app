//navigator 함수 사용
const API_KEY = '13bf317c9e1d29478a080a4873e38f2e';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in",lat,lon)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

  fetch(url)
    .then( (response) => response.json() )
    .then( (data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.name;
      city.innerText = `@ ${data.weather[0].main}`;
    });
    
}
function onGeoError() {
  alert("당신이 원하는 지역의 날씨를 찾을수 없습니다.")
}

// 브라우저에서 위치정보를 호출해줌 (WIfi, gps)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)