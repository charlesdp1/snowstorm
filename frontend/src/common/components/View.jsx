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
      <img className="Image" src="https://lh3.googleusercontent.com/proxy/1wj_36YUWOD7blXphvtovFS1qIdCB8tofNbNk8FL-eCPlkO-BOgzIkFbptZp9qt_ubTKUDW9Vt23PpgbrOwHoLO0HviMQSGna4a4Vu6epCfjlO-ooPrQb-zxf75If3y4lRAHmqyWPw"/>
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