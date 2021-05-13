import { format } from 'date-fns';
import PropTypes from 'prop-types';
import React from "react";
import "./SunWidget.css";

const SunWidget = ({ weather }) => {

  const formatUnixTime = (unixTime) => {
    return format(new Date(unixTime * 1000), "HH:mm")
  };

  if (!weather) return null;

  return (
    <div className="Background">
      <div className="Clock">
        <img className="Image2" src="https://pics.freeicons.io/uploads/icons/png/19263793681548329952-512.png"></img>
        <div > Sunrise </div>
        <div className="Time"> {formatUnixTime(weather.sys.sunrise)} </div>
      </div>
      <div > -----------------Horizon----------------- </div>
      <div className="Clock">
      <img className="Image2" src="https://cdn4.iconfinder.com/data/icons/perfectline-weather/512/Sunset-512.png"></img>
        <div > Sunset </div>
        <div className="Time" >{formatUnixTime(weather.sys.sunset)}</div>
      </div>
    </div>
  );
};

SunWidget.propTypes = {
  weather: PropTypes.shape,
};

SunWidget.defaultProps = {
  waether: undefined,
};



export default SunWidget;