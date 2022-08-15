import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from './api'
import Forecast from "./components/forecast/forecast";
import {useState} from "react";
import Time from "./components/timedisplay/time";


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");


  const currentWeatherFetch = fetch(
    `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  );
  const forecastFetch = fetch(
    `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  );

  Promise.all([currentWeatherFetch, forecastFetch])
  .then(async (response) => {
    const weatherResponse = await response[0].json();
    const forecastResponse = await response[1].json();

    setCurrentWeather({ city: searchData.label, ...weatherResponse });
    setForecast({ city: searchData.label, ...forecastResponse });
  })
  .catch((err) => console.log(err))
}

console.log(currentWeather);
console.log(forecast);

  return (
    <div className="container">
      <h1>Detailed Weather Info and Forecast</h1>
      <span className="time"><Time /></span>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      <footer>Developed by <a href="https://greenojegwo.netlify.app">www.greenojegwo.com</a></footer>
    </div>
  );
}

export default App;
