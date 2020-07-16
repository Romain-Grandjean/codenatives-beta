import React from "react";

const Solution = (props) => {
    const { id, level, question, solutions, answer, explanations, color} = props.info;

    return (
        <div id={props.info + props.page } className={"practice-solution"} onClick={() => props.testSolution(props.info, props.id)}>
        <img src={process.env.PUBLIC_URL + "/img/icon-solution" + props.id +".svg"} alt="solution "/>
        <span>{props.info}</span>
        </div>

    );

};

export default Solution;