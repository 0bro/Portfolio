import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  goto,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyling = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyling} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
