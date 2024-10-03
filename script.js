const apiKey = "35dde64f7679258a1bb44d53acd2fc61";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (!response.ok) {
      throw new Error("Invalid City Name");
    }

    const data = await response.json();

    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; 

    // Update weather icon based on weather condition
    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png"; // Fixed typo from "clods" to "clouds"
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main === "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main === "Haze"){
      weatherIcon.src = "images/haze.png";
    }
    document.querySelector(".weather").style.display = "block";

  } catch (error) {
    console.error(error);
    alert("An error occurred: " + error.message);
  }

  // document.querySelector(".weather").style.display = "block";
    

}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});




// const apiKey = "35dde64f7679258a1bb44d53acd2fc61";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");

// const searchBtn = document.querySelector(".search button");

// async function checkWeather(city){
//   const response = await fetch(apiUrl +city+ &appid=${apiKey});

//   var data = await response.json();

//   console.log(data);

//   document.querySelector(".city").innerHTML = data.name;
//   document.querySelector(".temp").innerHTML = math.round(data.main.temp)  + "°c";
//   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//   document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
// }

// searchBtn.addEventListener("click",()=>{
//   checkWeather(searchBox.value);
// })