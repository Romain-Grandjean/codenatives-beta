import React from "react";

const Solution = (props) => {
    const { id, level, question, solutions, answer, explanations, color } = props.info;

    return (
        <div key="id" className={"practice-solution"+ props.id} onClick={() => props.testSolution(id)}>
        <img src={process.env.PUBLIC_URL + "/img/icon-solution" + props.id +".svg"} alt="solution "/>
        <span>{props.info}</span>
        </div>

    );

};

export default Solution;