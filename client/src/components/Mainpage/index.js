import React from "react";
import Nav from "../Navbar";
import "./index.css";


function Mainpage() {
  return (
    <div className="mainPage">
      <Nav />

      <div className="titleContainer">
        <img
          className="titleImage"
          src="/images/background.jpg"
          alt="background"
           />
        <h2 className="titleText">A MINIFIED SOCIAL NETWORK.</h2>

        <h3 className="titleTextBottom">Built for analog gamers.</h3>
      </div>
    </div>
  );
}

export default Mainpage;
