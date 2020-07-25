import React from "react";

const Solution = (props) => {
  const {
    id,
    solutions,
    answer,
    explanations,
    picture,
    style,
    question,
  } = props.info;

  return (
    <div
      id={props.id}
      className={"practice-solution"}
      onClick={() => props.testSolution(props.id)}>
      <img src={process.env.PUBLIC_URL + "/img/icon-solution" + props.picture + ".svg"} alt="solution"/>
      <span>{props.info}</span>
    </div>
  );
};

export default Solution;
