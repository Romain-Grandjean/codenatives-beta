import React from 'react';
import DataPractice from '../dataPractice.json';
import SolutionMulti from './SolutionMulti';

export default class Practice extends React.Component {
    constructor(props) {
    super(props);  
    this.state = {
      page: 1, 
      data: DataPractice,
      score: 0,
      color: 1,
      id: null
    } 
  }

    next = () => {
      let actualPage = this.state.page;
      let newPage = this.state.page + 1;
      if (!isNaN(actualPage)) {
      this.setState({...this.state, page: newPage});  
      }
      if (this.state.id){
        document.getElementById(this.state.id + this.state.page).style.background = "white"

      }

    }  
    componentDidMount(){  if (this.state.id){
      document.getElementById(this.state.id + this.state.page).style.background = "white"

    }
}
    previous = () => {
      let lastPage = this.state.page - 1;
      let actualPage = this.state.page;
      if (actualPage > 0) {
      this.setState({...this.state, page: lastPage });
      }
    }

    testSolution = (ele, id) => {
      let newScore = this.state.score + 10; 
      let targetEle = document.getElementById(ele + this.state.page);
      this.setState({...this.state, id: ele})
      targetEle.style.background = "white"   
      console.log("this is ID", id);
      console.log("this the ele", ele);
      console.log("thus targetEle", targetEle)
      console.log("this is answer", this.state.data[this.state.page].answer)
      console.log("this is condition", id == this.state.data[this.state.page].answer)
      if (id  == this.state.data[this.state.page].answer) {
        targetEle.style.background = "#7CF4BD"  
      this.setState({...this.state, score: newScore});  
    } 

      // Wrong Answer
      if (id !== this.state.data[this.state.page].answer) {
        targetEle.style.background = "#EE654B"   
    }

    console.log("this is score:", this.state.score,"this is count:", this.state.count);
    // window.setTimeout(() => {
    //   let actualPage = this.state.page;
    //   let newPage = this.state.page + 1;
    //   this.setState({...this.state, page: newPage});
    //     }, 3000);
      // targetEle.style.background = "white"   

      
  }

    showSolution = () => {
    
    // TO DO : Correct answer turn to green 
    
      let newCount = this.state.count + 1;
      this.setState({...this.state, count: newCount})  
      let newScore = this.state.score + 10; 
      this.setState({...this.state, score: newScore})  
  }
 

      render() {
        let score = this.state.score;

        return (
        <> 
        <div className="practice-page">

        <div className="question-practice">{this.state.data[this.state.page].question}</div>

        <SolutionMulti data={this.state.data} solution={this.solution} color={this.state.color} page={this.state.page} testSolution={this.testSolution}/>

            <div className="level-practice">
            <span id="title-level">Level</span>
                  <span id="native">Native</span>
                  <span id="C2" style={{color:score>=120?'black':'#d8d8d882'}}>C2</span>
                  <span id="C1" style={{color:score>=100?'black':'#d8d8d882'}}>C1</span>
                  <span id="B2" style={{color:score>=60?'black':'#d8d8d882'}}>B2</span>
                  <span id="B1" style={{color:score>=40?'black':'#d8d8d882'}}>B1</span>
                  <span id="A2" style={{color:score>=20?'black':'#d8d8d882'}}>A2</span>
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
