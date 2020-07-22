import React from 'react';
import DataTest from '../dataTest.json';
import SolutionMulti from './SolutionMulti';
import Popupwindow from './Popupwindow';
import Timerglobal from './Timerglobal';
import Timerquestion from './Timerquestion';

export default class Test extends React.Component {
  constructor(props) {
  super(props);   
  this.state = {
      page: 0, 
      data: DataTest,
      score: 0,
      numberofquestions: 0,
      globaltime: 0,
      questionsettime: 20,
      questiontime: 0,
      display: "active",
      statustest: 0,
      status: 0,
      level: "A1"
    } 
  }  

  stop = () => {
    if (this.state.statustest === 0) {
      console.log("test not launched");
    } else {

      let allSolutions = document.querySelectorAll(".practice-solutions div");
      for (let i= 0; i < allSolutions.length ; i++) {
      allSolutions[i].style.background = "white";}

      this.setState({...this.state, page: 0, display: "active", timeGlobal: 0});

   }
 }


  testSolution = (id) => {
 
    let newScore = this.state.score + 10; 
    let newScoreError = this.state.score - 10; 
    let actualPage = this.state.page;
    let newPage = this.state.page + 1;
    let allSolutions = document.querySelectorAll(".practice-solutions div");

    // Is question final one ??
    if ((this.state.page + 2) === this.state.data.length) {

      for (let i= 0; i < allSolutions.length ; i++) {
        allSolutions[i].style.background = "white";
        this.setState({...this.state, page: 0, display: "active", timeGlobal: 0, statustest: 1});
      }
    } else {

        // Correct Answer
        if (id  == this.state.data[this.state.page].answer) { 
          window.setTimeout(() => {
            document.getElementById(id).style.background = "#7CF4BD";
          }, 300);  

          window.setTimeout(() => {

            for (let i= 0; i < allSolutions.length ; i++) {
            allSolutions[i].style.background = "white";
            }
            let newPage = this.state.page + 1;
            this.setState({...this.state, score: newScore, page: newPage, status: 1}); 
          }, 1500);  
        }
     
        // Wrong Answer
        if (id !== this.state.data[this.state.page].answer) {
 
          window.setTimeout(() => {
            document.getElementById(id).style.background = "#EE654B";}, 300); 

          window.setTimeout(() => {
            document.getElementById(this.state.data[this.state.page].answer).style.background = "#7CF4BD";}, 600);  
         
            window.setTimeout(() => {
          for (let i= 0; i < allSolutions.length ; i++) {
          allSolutions[i].style.background = "white";}

          this.setState({...this.state, score: newScoreError, status: 1, page: newPage})
      
        
        }, 1500);  
          }          
      }

}

      // Launch Test 
      launchtest = () => {

        // let globaltime = (this.state.data.length -1) * this.state.questionsettime;
        let importTimeGlobal = <Timerglobal />;
        let questionTime = <Timerquestion />;
        let allSolutions = document.querySelectorAll(".practice-solutions div");

        this.setState({...this.state, page: 1, globaltime: importTimeGlobal, questiontime: questionTime, display: "nonactive", statustest: 1});

        this.myInterval = setInterval(() => {

          let allSolutions = document.querySelectorAll(".practice-solutions div");
          for (let i= 0; i < allSolutions.length ; i++) {
            allSolutions[i].style.background = "white";
            this.setState({...this.state, page: 0, display: "active", timeGlobal: 0, statustest: 1});
          }          
            }, 380000)

      }
       
      render() {
        let score = this.state.score;
        let questionNumber = this.state.data.length;
        let displayState = this.state.display;

        return (
        <> 
        <Popupwindow
          launchtest={this.launchtest}
          globaltime={this.state.data.length * this.state.questionsettime}
          numberofquestions={this.state.data.length} 
          questionsettime={this.state.questionsettime}
          page={this.state.page}
          display={this.state.display}
          globaltime = {this.globaltime}
          score = {this.state.score}
          statustest= {this.state.statustest}
          />
        <div className="practice-page">
        
        <div className="question-practice">{this.state.data[this.state.page].question}</div>
  
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

            <SolutionMulti
            data={this.state.data}
            solution={this.solution}
            page={this.state.page}
            testSolution={this.testSolution}
            />

            <div className="score-test">
                  <span id="title-time-score">Timing</span>
                  <span id="global-time-score">{this.state.globaltime}</span>
                  {/* <span id="round-time-score">{this.state.questiontime}</span> */}
                  <span id="title-time-score">Score</span>
                  <span id="points-score">{this.state.score}</span>
                  {/* <span id="points-score-more">+10</span> */}
            </div>
           
            <div className="player-test">
                    <span id="question-number-test">Question {this.state.page}/{this.state.data.length}</span>
                    <div className ="stop-btn-test" onClick={() => this.stop()}>
                    <img id="arrow-right-page" src={process.env.PUBLIC_URL + "/img/icon-stop.svg"} alt="arrow"/>
                    <span>Stop</span>
                    </div>

            </div>
        </div>  

        </>
        )     
    }
  }
