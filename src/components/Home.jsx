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
      activeScreen: <Homeslide1/>,
      value: 1
    };
  }

  // Slide left
  slideLeft = () => {
    let activeScreen = this.state.value;
    if (activeScreen === 2) {
      this.setState({ ...this.state, activeScreen: <Homeslide1/>, value: 1 });
    } 
    if (activeScreen === 1){
      this.setState({ ...this.state, activeScreen: <Homeslide3/>, value: 3 });
    } 
    if (activeScreen === 3){
      this.setState({ ...this.state, activeScreen: <Homeslide2/>, value: 2 });
    }
  }

  // Slide right
  slideRight = () => {
    let activeScreen = this.state.value;
    if (activeScreen === 2) {
      this.setState({ ...this.state, activeScreen: <Homeslide3/>, value: 3 });
    } 
    if (activeScreen === 3){
      this.setState({ ...this.state, activeScreen: <Homeslide1/>, value: 1 });
    } 
    if (activeScreen === 1){
      this.setState({ ...this.state, activeScreen: <Homeslide2/>, value: 2 });
    }
  }

  // 3 dots button 

  activateDot = (id) => {
    switch (id) {
      case "dot1": this.setState({ ...this.state, activeScreen: <Homeslide1/> });
      break;
      case "dot2": this.setState({ ...this.state, activeScreen: <Homeslide2/> });
      break;
      case "dot3": this.setState({ ...this.state, activeScreen: <Homeslide3/> });
      break;
    }
  }

  render() {
    return (
      <div className="home-page">
        <div className="slider-content">
          <button onClick={() => this.slideLeft()}><img id="arrow-left-home" src={process.env.PUBLIC_URL + "/img/arrow-left-home.png"} alt=""/></button>
          {this.state.activeScreen}
          <button onClick={() => this.slideRight()}><img id="arrow-right-home" src={process.env.PUBLIC_URL + "/img/arrow-right-home.png"}alt=""/></button>
          
        </div>
          <div className="dots-selectors">
            <div id="dot1" onClick={() => this.activateDot()} style={{backgroundColor: this.state.activeScreen === <Homeslide1/> ? "black" : "white"}}></div>
            <div id="dot2" onClick={() => this.activateDot()} style={{backgroundColor: this.state.activeScreen === <Homeslide2/> ? "black" : "white"}}></div>
            <div id="dot3" onClick={() => this.activateDot()} style={{backgroundColor: this.state.activeScreen === <Homeslide3/> ? "black" : "white"}}></div>
          </div>
      </div>
    );
  }
}

export default Home;
