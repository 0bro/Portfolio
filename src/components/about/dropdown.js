import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";
import "./dropdown.css";
export function Dropdown(props) {
  if (props.items) {
    var items = props.items.map((item) => (
      <li>
        <p>{item}</p>
      </li>
    ));
  }
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="item">
        <div className="toggleMenu" onClick={() => setToggle(!toggle)}>
          {props.title && <h3 id="title">{props.title}</h3>}
          {toggle ? <AiFillCaretDown /> : <AiFillCaretLeft />}
        </div>
        {toggle && (
          <div className="menu">
            {props.subtitle && <h5>{props.subtitle}</h5>}
            {(props.location || props.duration) && (
              <div>
                {props.location && <p>{props.location}</p>}
                {props.duration && <p> {props.duration}</p>}
              </div>
            )}
            {props.items && <ul>{items}</ul>}
          </div>
        )}
      </div>
    </>
  );
}
