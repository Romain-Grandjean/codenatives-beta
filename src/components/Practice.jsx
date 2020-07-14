import React from 'react';
import DataPractice from '../dataPractice.json';

export default class Practice extends React.Component {
    state = {
      page: 1, 
      pageviewed: [1],
      data: DataPractice,
      level: [0,1,2,3,4,5,6],
      score: 0
    } 

 
    next = () => {
      let pages = this.state.data.length;
      let randomPage = Math.floor(Math.random() * Math.floor(pages + 1)); 
      let pageDisplay = this.state.pageviewed.find(item => item !== randomPage);
      
      console.log("this is data.length:", pages);
      console.log("this random number:", randomPage);
      console.log("this is value available:", pageDisplay);

      if (pageDisplay !== undefined) {
        this.setState({...this.state, page: pageDisplay});
        this.state.pageviewed.push(pageDisplay);
      } else {
        this.setState({...this.state, pageviewed: [] });
        this.setState({...this.state, page: 0 });
      }
      console.log(this.state.pageviewed);
      console.log(this.state.page);
    }
      
    previous = () => {
      let pageviewedLength = this.state.pageviewed.length;
      let lastPage = this.state.pageviewed.slice(pageviewedLength -2, pageviewedLength -1);
      this.setState({...this.state, page: lastPage })
    }
      
      render() {

        return (
        <> 
        <div className="practice-page">
            <div className="question-practice">{this.state.data[this.state.page].question}</div>
            <div className="level-practice">
                  <span id="native">Native</span>
                  <span id="C2">C2</span>
                  <span id="C1">C1</span>
                  <span id="B2">B2</span>
                  <span id="B1">B1</span>
                  <span id="A2">A2</span>
                  <span id="A1">A1</span>
            </div>
           
           
            <div className="solutionA-practice">
              <img src={process.env.PUBLIC_URL + "/img/icon-solutionA.svg"} alt="solution 1"/>
              <span>{this.state.data[this.state.page].solutionA}</span>
            </div>
            <div className="solutionB-practice">
              <img src={process.env.PUBLIC_URL + "/img/icon-solutionB.svg"} alt="solution 2"/>
              <span>{this.state.data[this.state.page].solutionB}</span>
            </div>
            <div className="solutionC-practice">
              <img src={process.env.PUBLIC_URL + "/img/icon-solutionC.svg"} alt="solution 3"/>
              <span>{this.state.data[this.state.page].solutionC}</span>
            </div>
            <div className="solutionD-practice">
              <img src={process.env.PUBLIC_URL + "/img/icon-solutionD.svg"} alt="solution 4"/>
              <span>{this.state.data[this.state.page].solutionD}</span>
            </div>
            <div className="player-practice">
               <div className="player-arrow">
                  <img id="arrow-left-page" onClick={() => this.previous()} src={process.env.PUBLIC_URL + "/img/arrow-left-page.svg"} alt="arrow"/>
                      <span id="practice-solution">Show solution</span>
                      <img id="arrow-right-page" onClick={() => this.next()} src={process.env.PUBLIC_URL + "/img/arrow-right-page.svg"} alt="arrow"/>
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