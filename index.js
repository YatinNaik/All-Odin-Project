import {
    Temperature,
    TemperatureMax,
    TemperatureMin,
    FellsLike,
    Pressure,
    Humidity,
  } from "./temperature";
  import { Weather, WeatherIcon } from "./weather.js";
  
  let form = document.getElementById("form");
  let dataName, dataTemperature, dataWeather;

  form.addEventListener("submit", function (event) {
    console.log("enter")
    event.preventDefault();
    let search = form.elements["search"].value;
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        search +
        "&appid=27498aefb60e29be93db8f28bc8e7bbd&units=metric"
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        dataName = response.name;
        dataTemperature = { ...response.main };
        dataWeather = { ...response.weather };
        console.log(response.main["temp"]);
        ViewName(dataName);
        Temperature(dataTemperature);
        TemperatureMax(dataTemperature);
        TemperatureMin(dataTemperature);
        FellsLike(dataTemperature);
        Pressure(dataTemperature);
        Humidity(dataTemperature);
        Weather(dataWeather);
        WeatherIcon(dataWeather);
      });
  });
  
  function ViewName(name) {
    const locationName = name;
    const nameID = document.getElementById("name");
    nameID.innerHTML = locationName;
  }