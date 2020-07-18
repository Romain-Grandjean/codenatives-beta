import React from "react";

const Startwindow = (props) => {
    const { id, page, score, globaltime, questiontime, numberofquestions } = props.info;

    return (
        <div key={props.id} info={props.info} className="popups-window" >
        <div className="start-mode" ></div>
                    <div  className="start-window">
                        <h1>Ready for the test?</h1> 
                        <span>{props.numberofquestions}questions</span> 
                        <span>{props.questiontime} secs per question</span>
                        <span>Test duration {props.globaltime} secs</span>
                        <span>2 right answers one level up</span>
                        <span>2 wrong one level down</span>
                        <div className="btn-start" onClick={() => props.launchtest()}>Start test</div>             
                    </div>
        </div>
    );
};

export default Startwindow ;