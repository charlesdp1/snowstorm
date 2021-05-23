import axios from "axios";
import { format } from "date-fns";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = ({ url }) => {
  const [weather, setWeather] = useState();

  const kelvinToCelsius = (degreeInKelvin) => {
    return (degreeInKelvin - 273.15).toFixed(0);
  };

  const metersecondToKilometerHour = (meterSecond) => {
    return (meterSecond * 3.6).toFixed(1);
  };

  const formatUnixTime = (unixTime) => {
    return format(new Date(unixTime * 1000), "eeee, HH:mm");
  };

  useEffect(() => {
    axios.get(url).then((res) => {
      setWeather(res.data);
    });
  }, []);

  console.log("weather", weather);

  if (!weather) return null;

  return (
    <div className="Root">
      <img
        className="Image"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Weather-more-clouds.svg/1024px-Weather-more-clouds.svg.png"
      />
      <div className="Temperature">{kelvinToCelsius(weather.main.temp)}</div>
      <div className="Units">°C|°F</div>
      <div className="Conditions">
        <div>{`Feels like: ${kelvinToCelsius(
          weather.main.feels_like
        )} °C`}</div>
        <div>{`Humidity: ${weather.main.humidity} %`}</div>
        <div>{`Wind: ${metersecondToKilometerHour(
          weather.wind.speed
        )} km/h`}</div>
      </div>
      <div className="Location">
        <div className="City">{`${weather.name}, ${weather.sys.country}`}</div>
        <div>{formatUnixTime(weather.dt)}</div>
        <div>{weather.weather[0].description}</div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  url: PropTypes.string.isRequired,
};

Banner.defaultProps = {};

export default Banner;
