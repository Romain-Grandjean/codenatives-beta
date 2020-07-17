import React from 'react';
import DataPractice from '../dataPractice.json';
import SolutionMulti from './SolutionMulti';
import {Link} from 'react-router-dom';

export default class Practice extends React.Component {
    constructor(props) {
    super(props);  
    this.state = {
      page: 1, 
      data: DataPractice,
      score: 0
    } 
  }
    // Next question
    next = () => {
      let actualPage = this.state.page;
      let newPage = this.state.page + 1;
      let allSolutions = document.querySelectorAll(".practice-solutions div");
      if (!isNaN(actualPage)) {
      for (let i= 0; i < allSolutions.length ; i++) {
          allSolutions[i].style.background = "white";
      }
      this.setState({...this.state, page: newPage});  
      }  
    }

    // Previous question
    previous = () => {
      let lastPage = this.state.page - 1;
      let actualPage = this.state.page;
      let allSolutions = document.querySelectorAll(".practice-solutions div");

      if (actualPage > 0) {
      for (let i= 0; i < allSolutions.length ; i++) {
      allSolutions[i].style.background = "white";
      }
      this.setState({...this.state, page: lastPage });
      }
    }

    // Submit answer
    testSolution = (id) => {
      let newScore = this.state.score + 10; 
      let newScoreError = this.state.score - 5; 

      // Correct Answer
      if (id  == this.state.data[this.state.page].answer) { 
        document.getElementById(id).style.background = "#7CF4BD";
        this.setState({...this.state, score: newScore }); 

    } 

      // Wrong Answer
      if (id !== this.state.data[this.state.page].answer) {
        this.setState({...this.state, score: newScoreError }); 
        window.setTimeout(() => {
          document.getElementById(id).style.background = "#EE654B";
          }, 500);  

        window.setTimeout(() => {
          document.getElementById(this.state.data[this.state.page].answer).style.background = "#7CF4BD";
          }, 700);  
    }
    
    // Transition to next question
    window.setTimeout(() => {
      let allSolutions = document.querySelectorAll(".practice-solutions div");
      for (let i= 0; i < allSolutions.length ; i++) {
        allSolutions[i].style.background = "white";
      }
      }, 1500);  

    window.setTimeout(() => {
      let actualPage = this.state.page;
      let newPage = this.state.page + 1;
      this.setState({...this.state, page: newPage});
      }, 1600);  
    }

    // Show solution to question
    showSolution = () => {
      document.getElementById(this.state.data[this.state.page].answer).style.background = "#7CF4BD";
  }

      render() {
        let score = this.state.score;

        return (
        <> 
        <div className="practice-page">

        <div className="question-practice">{this.state.data[this.state.page].question}</div>

        <SolutionMulti data={this.state.data} solution={this.solution} picture={this.picture} page={this.state.page} testSolution={this.testSolution}/>

            <div className="level-practice">
            <span id="title-level">Level</span>
                  <span id="native" style={{color:score>= 120?'black':'#d8d8d882'}}>Native</span>
                  <span id="C2" style={{color:(score>= 100 && score<120)?'black':'#d8d8d882'}}>C2</span>
                  <span id="C1" style={{color:(score>= 80 && score<100)?'black':'#d8d8d882'}}>C1</span>
                  <span id="B2" style={{color:(score>= 60 && score<80)?'black':'#d8d8d882'}}>B2</span>
                  <span id="B1" style={{color:(score>= 40 && score<60)?'black':'#d8d8d882'}}>B1</span>
                  <span id="A2" style={{color:(score>= 20 && score<40)?'black':'#d8d8d882'}}>A2</span>
                  <span id="A1" style={{color:score<20?'black':'#d8d8d882'}}>A1</span>
                  
            </div>

            <div className="player-practice">
               <div className="player-arrow">
                  <img id="arrow-left-page" onClick={() => this.previous()} src={process.env.PUBLIC_URL + "/img/arrow-left-page.svg"} alt="arrow"/>
                          <div>
                            <span id="practice-solution" onClick={() => this.showSolution()}>Show Solution</span>
                            <Link to="/" className="stop-btn" >
                                  <img id="icon-stop" src={process.env.PUBLIC_URL + "/img/icon-stop.svg"} alt="arrow"/>
                                  <span>Stop</span>
                            </Link>
                          </div>  
                      <img id="arrow-right-page" onClick={() => this.next()} src={process.env.PUBLIC_URL + "/img/arrow-right-page.svg"} alt="arrow"/>
                      
                  </div>

            </div>
        </div>  
        </>
        )
        
    }
  }
