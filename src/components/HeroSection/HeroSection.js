import React from "react";
import { Button } from "../button/button";
import "./HeroSection.css";
import BaseImage from "./../../BlurredBack.png";
import Navbar from "../navbar/Navbar";

export function HeroSection() {
  return (
    <div className="hero-container cover-container">
      <div id="hero-words">
        <div className="hero-Title">
          <h1>Ibrahim<br/>Muhammad<br/>Yusoof</h1>
        </div>  
      </div>
    </div>
  );
}

// ^ react