import PropTypes from 'prop-types';
import React from "react";
import "./View.css";

const View = ({ weather }) => {
  const meterToKilometer = (meter) => {
    return (meter/1000).toFixed(1); 
  }

  console.log('weather', weather);

  if (!weather) return null;

  return (
    <div className="Back">
      <img className="Image" src="https://lh3.googleusercontent.com/proxy/OA2vhEKDEU5MAIFJgqVMQIzqTfdqfRHxCrFMhTJAnkzGJrPx8O75leQwowuSTPZBO1z91JdFMReYFtvPFWD57MlvLsJM1i4IanNtWhmHLSf6"/>
      <div className="View">{`Visibility: ${meterToKilometer(weather.visibility)} Km`}</div>
    </div>
  );
}

View.propTypes = {
  weather: PropTypes.shape,
};

View.defaultProps = {
  weather: undefined,
};

export default View;