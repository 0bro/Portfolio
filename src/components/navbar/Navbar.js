import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "../button/button";
import { Dropdown } from "./Dropdown";

// import { Link } from "react-router-dom";
function Navbar() {
  const [click, onClick] = useState(false);
  const [button, onButton] = useState(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      onButton(false);
    } else {
      onButton(true);
    }
  };

  window.addEventListener("resize", showButton);
  return (
    <div className="navbar--mainContainer">
      <div className="navbar--subContainer">
        <Link className="Logo" to="/">
          Ibrahim
          <br />
          Muhammad
          <br />
          Yusoof
        </Link>
        {button && <Dropdown />}
        {!button && (
          <div className="menuBar">
            {click ? (
              <AiOutlineClose
                size="40px"
                onClick={() => {
                  onClick(!click);
                }}
              />
            ) : (
              <AiOutlineMenu
                size="40px"
                onClick={() => {
                  onClick(!click);
                }}
              />
            )}
          </div>
        )}
      </div>
      {button || (click && <Dropdown />)}
    </div>
  );
}
export default Navbar;
