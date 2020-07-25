import React from "react";
import Homeslide1 from "./Homeslide1";


export default class Homeslider extends React.Component {
  render() {
    const slide1 = <Homeslide1></Homeslide1>;

      return (
        <div className="slider-content">
          <img id="arrow-left-home" src={process.env.PUBLIC_URL + "/img/arrow-left-home.png"} alt=""/>
          <div className="sliding">{slide1}</div>;
          <img id="arrow-right-home" src={process.env.PUBLIC_URL + "/img/arrow-right-home.png"}alt=""/>
        </div>
      );
    }
  }

