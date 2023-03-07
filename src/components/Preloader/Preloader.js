import "./Preloader.css";
import React from "react";

function Preloader() {
  return (
    <div className="preloader">
      <i className="preloader__circle"></i>
      <p className="preloader__text">Searching for news...</p>
    </div>
  );
}

export default Preloader;
