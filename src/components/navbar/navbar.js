import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Dropdown } from "./dropdown";

export function Navbar() {
  const [click, onClick] = useState(false);
  const [button, onButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      onButton(false);
    } else {
      onButton(true);
    }
  };
  useEffect(() => showButton(), []);
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
        {/* {button && <Dropdown />} */}
        {!button && (
          <div className="menuBar">
            {/* {click ? (
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
            )} */}
          </div>
        )}
      </div>
      {/* {button || (click && <Dropdown />)} */}
    </div>
  );
}
export default Navbar;
