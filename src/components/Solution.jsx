import React from "react";

const Solution = (props) => {
    const { id, solutions, answer, explanations, picture, style, question, background1, background2, background3, background4} = props.info;

    return (
        <div
        id={props.id}
        className={"practice-solution"}
        onClick={() => props.testSolution(props.id)}
        // style={{background:((props.(background + props.id) == "active")?'black':'red'}}
        >
        <img src={process.env.PUBLIC_URL + "/img/icon-solution" + props.picture +".svg"} alt="solution"/>
        <span>{props.info}</span>
        </div>

    );

};

export default Solution;