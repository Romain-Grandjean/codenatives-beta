import React from 'react';
import DataTest from '../dataTest.json';
import SolutionMulti from './SolutionMulti';

export default class Test extends React.Component {
    state = {
      page: 1, 
      data: DataTest,
      level: 0,
      score: 0,
      globalscore: 0,
      count: 0,
      globaltime: 0,
      questiontime: 0
    } 

    testSolution = (id) => {
      let newCount = this.state.count + 1;
      // Correct Answer
      if (id + 1 === this.data.answer) {
      
        // TO DO : Div turn to green  
  
      let newScore = this.state.score + 10; 
      this.setState({...this.state, score: newScore}) 
      this.setState({...this.state, globalscore: newScore})
      this.setState({...this.state, count: newCount}) 
      // TO DO : Timer
      let newPage = this.state.page + 1;
      this.setState({...this.state, page: newPage}) 
      } 
      // Wrong Answer
      if (id + 1 !== this.data.answer) {
  
        // TO DO : Div turn to red + answer turn to green 
  
      this.setState({...this.state, count: newCount}) 
            // TO DO : Timer
      let newPage = this.state.page + 1;
      this.setState({...this.state, page: newPage}) 
      }
      // Level up
      if (this.state.score >= 20 && this.state.count === 2) {
       this.setState({...this.state, score: 0})  
       let newLevelUp = this.state.level + 1;
       this.setState({...this.state, level: newLevelUp})   
      // TO DO : update level div
      }
       // Level down
      if (this.state.score < 20 && this.state.count === 2 && this.state.level > 0) {
        this.setState({...this.state, score: 0}) 
        let newLevelDown = this.state.level - 1;
        this.setState({...this.state, level: newLevelDown})  
      // TO DO : update level div
      }
      }
        


      render() {

        return (
        <> 
        <div className="practice-page">
        
        <div className="question-practice">{this.state.data[this.state.page].question}</div>
  
        <div className="level-practice">
                  <span id="title-level">Level</span>
                  <span id="native">Native</span>
                  <span id="C2">C2</span>
                  <span id="C1">C1</span>
                  <span id="B2">B2</span>
                  <span id="B1">B1</span>
                  <span id="A2">A2</span>
                  <span id="A1">A1</span>
            </div>

            <SolutionMulti data={this.state.data} solution={this.solution} testSolution={this.testSolution}/>


            <div className="score-practice">
                  <span id="title-time-score">Timing</span>
                  <span id="global-time-score">-257.28</span>
                  <span id="round-time-score">-7.15</span>
                  <span id="title-time-score">Score</span>
                  <span id="points-score">{this.state.globalscore}</span>
                  {/* <span id="points-score-more">+10</span> */}
            </div>
           
            <div className="player-test">
                    <span id="question-number-test">Question 2/30</span>
                    <div className="stop-btn-test">
                    <img id="arrow-right-page" src={process.env.PUBLIC_URL + "/img/icon-stop.svg"} alt="arrow"/>
                    <span>Stop</span>
                    </div>


            </div>
        </div>  
        </>
        )

        
    }

  }