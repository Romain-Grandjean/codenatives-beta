// modules
import React from 'react';

const Windowstart = (props) => {
    

            return (
                <div className="popup-start">                
                    <div className="start-mode"></div>
                    <div className="start-window">
                        <h1>Ready for the test?</h1> 
                        <span>questions</span> 
                        <span>10 secs per question</span>
                        <span>Test duration secs</span>
                        <span>2 right answers one level up</span>
                        <span>2 wrong one level down</span>
                        <div key="id" className="btn-start" onClick={() => props.launchtest()} >Start test</div>             
                    </div>
                </div>

            )
}

export default Windowstart; 