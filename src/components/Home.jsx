// modules
import React from "react";
import Homeslide1 from "./Homeslide1";
import Homeslide2 from "./Homeslide2";
import Homeslide3 from "./Homeslide3";
import { Link } from "react-router-dom";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeScreen: <Homeslide2/>
    };
  }

  // Slide left
  slideLeft = () => {
    if (this.state.activeScreen === <Homeslide2/>) {
      this.setState({ ...this.state, activeScreen: <Homeslide1/> });
    } else if (this.state.activeScreen === <Homeslide1/>){
      this.setState({ ...this.state, activeScreen: <Homeslide3/> });
    } else if (this.state.activeScreen === <Homeslide3/>){
      this.setState({ ...this.state, activeScreen: <Homeslide2/> });
    }
  }

  // Slide right
  slideRight = () => {
    if (this.state.activeScreen === <Homeslide2/>) {
      this.setState({ ...this.state, activeScreen: <Homeslide3/> });
    } else if (this.state.activeScreen === <Homeslide3/>){
      this.setState({ ...this.state, activeScreen: <Homeslide1/> });
    } else if (this.state.activeScreen === <Homeslide1/>){
      this.setState({ ...this.state, activeScreen: <Homeslide2/> });
    }
  }

  render() {
    return (
      <div className="home-page">
        <div className="slider-content">
          <img id="arrow-left-home" onclick={() => this.slideLeft()} src={process.env.PUBLIC_URL + "/img/arrow-left-home.png"} alt=""/>
          {this.state.activeScreen}
          <img id="arrow-right-home" onclick={() => this.slideRight()} src={process.env.PUBLIC_URL + "/img/arrow-right-home.png"}alt=""/>
        </div>
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
