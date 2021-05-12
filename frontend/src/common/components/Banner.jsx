import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {

  const [weather, setWeather] = useState();

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Quebec&appid=e8fcae1222b8c37f34884b546ab09e77').then(res=>{
      setWeather(res.data);
    })
  }, [])

  const kelvinToCelsius = (degreeInKelvin) => {
    return (degreeInKelvin - 273.15).toFixed(0);
  };

  const metersecondToKilometerHour = (meterSecond) => {
    return (meterSecond*3.6).toFixed(1);
  };

  const formatUnixTime = (unixTime) => {
    return format(new Date(unixTime * 1000), "eeee, HH:mm")
  };

  console.log('weather', weather);

  if (!weather) return null;

  return (
    <div className="Root">
      <img className="Image" src="https://cdn.drawception.com/images/panels/2012/4-12/DQ8ZgDHG95-10.png"/>
      <div className="Temperature">{kelvinToCelsius(weather.main.temp)}</div>
      <div className="Units">°C|°F</div>
      <div className="Conditions">
        <div>{`Feels like: ${kelvinToCelsius(weather.main.feels_like)} °C`}</div>
        <div>{`Humidity: ${weather.main.humidity} %`}</div>
        <div>{`Wind: ${metersecondToKilometerHour(weather.wind.speed)} km/h`}</div>
      </div>
      <div className="Location">
        <div className="City">{`${weather.name}, ${weather.sys.country}`}</div>
        <div>{formatUnixTime(weather.dt)}</div>
        <div>{weather.weather[0].description}</div>
      </div>
    </div>
  );
};



export default Banner;
