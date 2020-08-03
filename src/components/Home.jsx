// modules
import React from "react";
import Homeslider from "./Homeslider";
import { Link } from "react-router-dom";


class Home extends React.Component {
  render() {
    return (
      <div className="home-page">

       <Homeslider
       nextSlide
       />


          <div className="dots-selectors">
            <div id="dot1"></div>
            <div id="dot2"></div>
            <div id="dot3"></div>
          </div>
      </div>
    );
  }
}

export default Home;
