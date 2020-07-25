// modules
import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <img id="arrow-left-home" src={process.env.PUBLIC_URL + "/img/arrow-left-home.png"} alt=""/>
        <img id="central-window" src={process.env.PUBLIC_URL + "/img/central-window.png"} alt=""/>
        <div id="central-catchphrase">
          <h1>How well do you 'speak' code?</h1>
          <h2>30 questions, 300 seconds to find out !!</h2>
          <div className="central-language-selection">
            <span className="language-selector">Choose your language</span>
            <div className="btn-language">
              <img id="arrow-left-home" src={process.env.PUBLIC_URL + "/img/arrow-btn-selector.svg"} alt=""/>
              <span>Javascript</span>
            </div>
          </div>
          <div className="central-buttons">
            <Link to="/practice" className="button-practice">
              <div>Practice</div>
            </Link>
            <Link to="/test" className="button-test">
              <div>Start test</div>
            </Link>
          </div>
        </div>
        <img
          id="arrow-right-home"
          src={process.env.PUBLIC_URL + "/img/arrow-right-home.png"}
          alt=""
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
