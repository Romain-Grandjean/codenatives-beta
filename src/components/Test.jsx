import React from 'react';
import DataTest from '../dataTest.json';
import SolutionMulti from './SolutionMulti';
import Windowstart from './Windowstart';
import Timerglobal from './Timerglobal';
import Timerquestion from './Timerquestion';


export default class Test extends React.Component {
    state = {
      page: 0, 
      data: DataTest,
      score: 0,
      questionsettime: 10,
      globaltime: 0,
      questiontime: 0
    } 
      // Launch Test 


      launchtest = () => {

        // let windowStart = document.querySelector(".start-mode .start-window");
        // windowStart.style.display = "none";

        let globaltime = (this.state.data.length -1) * this.state.questionsettime;
        let timeGlobal = <Timerglobal />;
        let questionTime = <Timerquestion />;

        this.setState({...this.state, page: 1, globaltime: timeGlobal, questiontime: questionTime});


        this.myInterval = setInterval(() => {
        
        let actualPage = this.state.page;
        let newPage = this.state.page + 1;
      
        this.setState({...this.state, page: newPage});  
           
            }, 10000)

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
      }
        
      render() {

        let score = this.state.score;
        let questionNumber = this.state.data.length;
        return (
        <> 
        <Windowstart launchtest={this.launchtest}/>
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

            <SolutionMulti data={this.state.data} solution={this.solution} page={this.state.page} testSolution={this.testSolution}/>

            <div className="score-test">
                  <span id="title-time-score">Timing</span>
                  <span id="global-time-score">{this.state.globaltime}</span>
                  <span id="round-time-score">{this.state.questiontime}</span>
                  <span id="title-time-score">Score</span>
                  <span id="points-score">{this.state.globalscore}</span>
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