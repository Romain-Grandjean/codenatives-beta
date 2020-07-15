import React from 'react';
import DataPractice from '../dataPractice.json';
import SolutionMulti from './SolutionMulti';

export default class Practice extends React.Component {
    constructor(props) {
    super(props);  
    this.state = {
      page: 1, 
      data: DataPractice,
      level: 0,
      score: 0,
      count: 0,
    } 
  }
    next = () => {
      let newPage = this.state.page + 1
      this.setState({...this.state, page: newPage});    
      console.log("NEXT / this is new page", this.state.page); 
    }
      
    previous = () => {
      let lastPage = this.state.page - 1;
      this.setState({...this.state, page: lastPage })
      console.log("PREVIOUS / this is last page", lastPage);
    }
    
    testSolution = (id) => {
    let newCount = this.state.count + 1;
    // Correct Answer
    if (id + 1 === this.data.answer) {
    
      // TO DO : Div turn to green  

    let newScore = this.state.score + 10; 
    this.setState({...this.state, score: newScore})  
    this.setState({...this.state, count: newCount})  
    } 
    // Wrong Answer
    if (id + 1 !== this.data.answer) {

      // TO DO : Div turn to red + answer turn to green 

    this.setState({...this.state, count: newCount})   
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
    showSolution = () => {
    
    // TO DO : Correct answer turn to green 
    
    let newCount = this.state.count + 1;
    this.setState({...this.state, count: newCount})  
    let newScore = this.state.score + 10; 
    this.setState({...this.state, score: newScore})  
    }

      render() {

        return (
        <> 
        <div className="practice-page">

        <div className="question-practice">{this.state.data[this.state.page].question}</div>

        <SolutionMulti data={this.state.data} solution={this.solution} testSolution={this.testSolution}/>

            <div className="level-practice">
                  <span id="native">Native</span>
                  <span id="C2">C2</span>
                  <span id="C1">C1</span>
                  <span id="B2">B2</span>
                  <span id="B1">B1</span>
                  <span id="A2">A2</span>
                  <span id="A1">A1</span>
            </div>
           
           



            <div className="player-practice">
               <div className="player-arrow">
                  <img id="arrow-left-page" onClick={() => this.previous()} src={process.env.PUBLIC_URL + "/img/arrow-left-page.svg"} alt="arrow"/>
                          <div>
                            <span id="practice-solution">Show Solution</span>
                            <div className="stop-btn">
                                  <img id="icon-stop" src={process.env.PUBLIC_URL + "/img/icon-stop.svg"} alt="arrow"/>
                                  <span>Stop</span>
                            </div>
                          </div>  
                      <img id="arrow-right-page" onClick={() => this.next()} src={process.env.PUBLIC_URL + "/img/arrow-right-page.svg"} alt="arrow"/>
                      
                  </div>

            </div>
        </div>  
        </>
        )
        
    }
  }
