import { useEffect, useState } from "react";
import axios from "axios";

function Weather({ country }) {
  const [getCordinates, setGetCordinates] = useState({});
  const [weather, setWeather] = useState({});
  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  //fetch coordinates from openweathermap/geo api
  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${country.capital},${country.countryCode}&appid=${apiKey}`
      )
      .then((res) => {
        setGetCordinates({
          name: res.data[0].name,
          lat: res.data[0].lat,
          lon: res.data[0].lon,
        });
      });
  }, [apiKey, country.capital, country.countryCode]);

  // // if we getCordinates have some data, fetch weather data from openweathermap api
  useEffect(() => {
    if (getCordinates.name) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${getCordinates.lat}&lon=${getCordinates.lon}&appid=${apiKey}&units=metric`
        )
        .then((res) => {
          setWeather({
            temperature: res.data.main.temp,
            wind: res.data.wind.speed,
            icon: res.data.weather[0].icon,
          });
        });
    }
  }, [apiKey, getCordinates]);

  return (
    <div>
      <h3>Weather in {getCordinates.name}</h3>
      <p>
        <strong>temperature:</strong> {weather.temperature} Celcius
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt="weather icon"
      />
      <p>
        <strong>wind:</strong> {((weather.wind * 18) / 5).toFixed(2)} m/s
      </p>
    </div>
  );
}
export default Weather;
