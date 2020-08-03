import React from "react";
import Homeslide1 from "./Homeslide1";
import Homeslide2 from "./Homeslide2";


export default class Homeslider extends React.Component {
  render() {
    const slide1 = <Homeslide1></Homeslide1>;
    const slide2 = <Homeslide2></Homeslide2>;

    const nextSlide = () => {
      let slide = slide1;
      let count = 0;

      if (count === 0) {
        count++;
        slide = slide1;
      } else {
        slide = slide2;
      }
      return slide;

    }

      return (
        <div className="slider-content">
          <img id="arrow-left-home" onclick={() => nextSlide()} src={process.env.PUBLIC_URL + "/img/arrow-left-home.png"} alt=""/>
          <div className="sliding">{nextSlide()}</div>;
          <img id="arrow-right-home" onclick={() => nextSlide()} src={process.env.PUBLIC_URL + "/img/arrow-right-home.png"}alt=""/>
        </div>
      );
    }
  }

