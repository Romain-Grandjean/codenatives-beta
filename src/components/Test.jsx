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
      questionsettime: 15,
      questiontime: 0,
      display: "active",
      background: "active",
      background1: "active",
      background2: "inactive",
      background3: "active",
      background4: "active",
    } 
  }  


  testSolution = (id) => {
 
    let newScore = this.state.score + 10; 
    let newScoreError = this.state.score - 10; 
    let actualPage = this.state.page;
    let newPage = this.state.page + 1;
    let allSolutions = document.querySelectorAll(".practice-solutions div");

        // Correct Answer
        if (id  == this.state.data[this.state.page].answer) { 
          window.setTimeout(() => {document.getElementById(id).style.background = "#EE654B";}, 500);  

          window.setTimeout(() => {for (let i= 0; i < allSolutions.length ; i++) {
            allSolutions[i].style.background = "white";
         }
         this.setState({...this.state, score: newScore, page: newPage }); }, 2000);  
         }
     
        // Wrong Answer
        if (id !== this.state.data[this.state.page].answer) {
   
          window.setTimeout(() => {document.getElementById(id).style.background = "#EE654B";}, 500);  
          window.setTimeout(() => {document.getElementById(this.state.data[this.state.page].answer).style.background = "#7CF4BD";}, 500);  
          window.setTimeout(() => {for (let i= 0; i < allSolutions.length ; i++) {
            allSolutions[i].style.background = "white";
         }
        this.setState({...this.state, score: newScoreError, page: newPage });}, 2000);  
          
      }
  }


      // Launch Test 
      launchtest = (id) => {

        // let globaltime = (this.state.data.length -1) * this.state.questionsettime;
        let timeGlobal = <Timerglobal />;
        let questionTime = <Timerquestion />;

        this.setState({...this.state, page: 1, globaltime: timeGlobal, questiontime: questionTime, display: "nonactive"});
              let newScore = this.state.score + 10; 
              let newScoreError = this.state.score - 10;


        this.myInterval = setInterval(() => {
        

        let actualPage = this.state.page;
        let newPage = this.state.page + 1;
        let allSolutions = document.querySelectorAll(".practice-solutions div");
        for (let i= 0; i < allSolutions.length ; i++) {
          allSolutions[i].style.background = "white";
        }
        this.setState({...this.state, page: newPage});  
          
            }, 10000)


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
            // background1 = {this.state.background1}
            // background2 = {this.state.background2}
            // background3 = {this.state.background3}
            // background4 = {this.state.background4}
            />

            <div className="score-test">
                  <span id="title-time-score">Timing</span>
                  <span id="global-time-score">{this.state.globaltime}</span>
                  <span id="round-time-score">{this.state.questiontime}</span>
                  <span id="title-time-score">Score</span>
                  <span id="points-score">{this.state.score}</span>
                  {/* <span id="points-score-more">+10</span> */}
            </div>
           
            <div className="player-test">
                    <span id="question-number-test">Question {this.state.page}/30</span>
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
