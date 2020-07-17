import React from 'react';
import DataPractice from '../dataPractice.json';
import SolutionMulti from './SolutionMulti';

export default class Practice extends React.Component {
    constructor(props) {
    super(props);  
    this.state = {
      page: 1, 
      data: DataPractice,
      score: 0
    } 
  }

    next = () => {
      let actualPage = this.state.page;
      let newPage = this.state.page + 1;
      if (!isNaN(actualPage)) {
      this.setState({...this.state, page: newPage});  
      }  
    }

    previous = () => {
      let lastPage = this.state.page - 1;
      let actualPage = this.state.page;
      if (actualPage > 0) {
      this.setState({...this.state, page: lastPage });
      }
    }

    testSolution = (id) => {
      let newScore = this.state.score + 10; 
 
      console.log("this is ID:", id);
      console.log("this is type of id", typeof(id));
      console.log("this is type of this.state.data.answer", this.state.data[this.state.page].answer);
    // Correct Answer
      if (id  == this.state.data[this.state.page].answer) { 
        document.getElementById(id).style.background = "#7CF4BD";
        this.setState({...this.state, score: newScore }); 

    } 

    // Wrong Answer
      if (id !== this.state.data[this.state.page].answer) {

        window.setTimeout(() => {
          document.getElementById(id).style.background = "#EE654B";
          }, 1000);  

        window.setTimeout(() => {
          document.getElementById(this.state.data[this.state.page].answer).style.background = "#7CF4BD";
          }, 1200);  
          // TO DO : Show Correct answer 
    }
    
    // Transition to next question

    window.setTimeout(() => {
      let allSolutions = document.querySelectorAll(".practice-solutions div");
      for (let i= 0; i < allSolutions.length ; i++) {
        allSolutions[i].style.background = "white";
      }
      }, 2000);  

    window.setTimeout(() => {
      let actualPage = this.state.page;
      let newPage = this.state.page + 1;
      this.setState({...this.state, page: newPage});
      }, 2200);  
      

    }

    


    showSolution = () => {
    // TO DO : Correct answer turn to green 
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
