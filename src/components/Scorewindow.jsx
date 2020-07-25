import React from "react";

const Scorewindow = (props) => {
  const {
    id,
    page,
    score,
    globaltime,
    questionsettime,
    questiontime,
    numberofquestions,
    display,
    style,
    level,
    statustest,
  } = props.info;

  return (
    <div key={props.id} info={props.info} className="popup-start">
      <div className="start-mode" style={{ display: props.display === "active" ? "block" : "none" }}></div>
      <div className="start-window" style={{ display: props.display === "active" ? "flex" : "none" }}>
        <h1>Your test results</h1>
        <span>Level reached: {props.level}</span>
        <span>Your score: {props.score}</span>
        <div className="btn-start" onClick={() => props.launchtest()}>
          Try again
        </div>
      </div>
    </div>
  );
};

export default Scorewindow;
