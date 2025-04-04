let form = document.forms.weatherForm;
let cityInput = document.querySelector('.cityinput');
let searchBtn = document.querySelector('.search-btn');
let weatherResult = document.querySelector('.weather-result');
let weatherCondition = document.querySelector('.weather-condition');
let weatherTemperature = document.querySelector('.weather-temperature');
let weatherHumidity = document.querySelector('.weather-humidity');
let weatherPlace = document.querySelector('.weather-place');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let getinputVal = formData.get('weather-humidity')

    !getinputVal
        ? (weatherResult.textContent = 'Please enter city name')
        : (weatherResult.textContent = '', getweatherData(getinputVal), form.reset())
})

async function getweatherData(city) {
    const apiKey = "9f7e45667f6fa53952d963a92834e0dd";
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


    try {
        let response = await fetch(apiurl);
        // console.log(response);
        let data = await response.json();

        if (data.cod === 200) {
            // console.log(data.weather[0].description);
            // console.log(data.main.temp);
            // console.log(data.main.humidity);
            weatherPlace.textContent = `${city}`;
            weatherCondition.textContent = data.weather[0].description;
            weatherTemperature.textContent = `${data.main.temp}°C`;
            weatherHumidity.textContent = `${data.main.humidity}%`;

        } else {
            console.log("city not found");
            weatherResult.textContent = "city not found";
        }

    } catch (error) {
        console.log(error);
        weatherResult.textContent = "Unable to fetch weather";
    }
}