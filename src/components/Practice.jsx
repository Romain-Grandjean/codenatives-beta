import React from 'react';
import DataPractice from '../dataPractice.json';

export default class Practice extends React.Component {
    state = {
      page: 1, 
      data: DataPractice
    } 
      
      
      render() {

        return (
        <> 
        <div className="practice-page">
            <div className="question-practice">{this.state.data[this.state.page].question}</div>
            <div className="solutionA-practice">
              <img src={process.env.PUBLIC_URL + "/img/icon-solutionA.svg"} alt="logo"/>
              <span>{this.state.data[this.state.page].solutionA}</span>
            </div>
            <div className="solutionB-practice">
              <img src={process.env.PUBLIC_URL + "/img/icon-solutionB.svg"} alt="logo"/>
              <span>{this.state.data[this.state.page].solutionB}</span>
            </div>
            <div className="solutionC-practice">
              <img src={process.env.PUBLIC_URL + "/img/icon-solutionC.svg"} alt="logo"/>
              <span>{this.state.data[this.state.page].solutionC}</span>
            </div>
            <div className="solutionD-practice">
              <img src={process.env.PUBLIC_URL + "/img/icon-solutionD.svg"} alt="logo"/>
              <span>{this.state.data[this.state.page].solutionD}</span>
            </div>
            <div className="player-practice">
               <div className="player-arrow">
                  <img id="arrow-left-page" src={process.env.PUBLIC_URL + "/img/arrow-left-page.svg"} alt="arrow"/>
                      <span id="practice-solution">Show solution</span>
                      <img id="arrow-right-page" src={process.env.PUBLIC_URL + "/img/arrow-right-page.svg"} alt="arrow"/>
                  </div>
                    <div className="stop-btn">
                    <img id="arrow-right-page" src={process.env.PUBLIC_URL + "/img/icon-stop.svg"} alt="arrow"/>
                    <span>Stop</span>
                    </div>
          

            </div>
        </div>  
        </>
        )

        
    }

  }