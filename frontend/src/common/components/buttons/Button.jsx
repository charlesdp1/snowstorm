import PropTypes from "prop-types";
import React from "react";
import "./Button.css";

const Button = ({ onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      <img className="Image4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT71NYaY7Ht6hc_svzYW6Rda9WlIo_7RCwOxO8isLY7msnq9x5ehYNectlyIwqdnjC4Jps&usqp=CAU"/>
    </button>
  );
};

//const types = ["Meteo", "Sun widget", "Visibility"];

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

//Button.defaultProps = {
//  onClick: undefined,
//};

export default Button;
