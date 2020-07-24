import React from "react";

const Startwindow = (props) => {
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
    statustest,
  } = props.info;

  return (
    <div key={props.id} info={props.info} className="popup-start">
      <div
        className="start-mode"
        style={{ display: props.display === "active" ? "block" : "none" }}
      ></div>
      <div
        className="start-window"
        style={{ display: props.display === "active" ? "flex" : "none" }}
      >
        <h1>Ready for the test?</h1>
        <span>
          17 questions
        </span>
        <span>2 correct answers, one level up</span>
        <span>2 wrong ones, one level down</span>
        <span>Test duration 300.00 secs</span>
        <div className="btn-start" onClick={() => props.launchtest()}>
          Start test
        </div>
      </div>
    </div>
  );
};

export default Startwindow;
