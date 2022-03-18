import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export function Dropdown({ clicked }) {
  const [click, onClick] = useState(clicked);
  return (
    <>
      <div className="menu--container">
        <Link
          onClick={() => {
            onClick(!click);
          }}
          className="menu--item"
          to="/About"
        >
          About
        </Link>
        <Link
          onClick={() => {
            onClick(!click);
          }}
          className="menu--item"
          to="/Projects"
        >
          Projects
        </Link>
      </div>
    </>
  );
}

