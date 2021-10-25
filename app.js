const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'a2dca2ae8627c4b6f2a6279ec283e710';

let city = document.getElementById("city");
let temp = document.getElementById("temp");
let desc = document.getElementById("desc");
let feelsLike = document.getElementById("feelsLike");
let minmax = document.getElementById("minmax");
let humidity = document.getElementById("humidity");
let load = document.getElementById("load");

const serachInput = document.getElementById("serachInput");

const control = (e) => {
    if(e.keyCode == "13"){
        getResult(serachInput.value);
        serachInput.value = "";
    }
}
// Girilen Şehir İsmine Göre Sonuçları Getiren Foknsiyon
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    load.style = 'display:none';

    // Girilen Şehir
    city.innerText = `${result.name}, ${result.sys.country}`;

    // Sıcaklık Değeri
    temp.innerText = `${Math.round(result.main.temp)}°C`;

    // Hava Durumu Açıklama
    desc.innerText = result.weather[0].description;

    // Hissedilen Sıcaklık Değeri
    feelsLike.innerText = `Hissedilen Sıcaklık : ${Math.round(result.main.feels_like)}°C`

    // Min/Max Sıcaklık Değeri
    minmax.innerText = `Min : ${Math.round(result.main.temp_min)}°C / Max : ${Math.round(result.main.temp_max)}°C`
    
    // Nem Oranı
    humidity.innerText = `Nem Oranı : ${Math.round(result.main.humidity)}%`
}

serachInput.addEventListener("keypress", control);