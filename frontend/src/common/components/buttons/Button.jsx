import PropTypes from "prop-types";
import React from "react";
import "./Button.css";

const Button = ({ onClick, children }) => {
  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  onClick: undefined,
};

export default Button;
