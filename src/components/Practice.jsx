import React from 'react';
import DataPractice from '../dataPractice.json';
import SolutionMulti from './SolutionMulti';

export default class Practice extends React.Component {
    constructor(props) {
    super(props);  
    this.state = {
      page: 1, 
      pageviewed: [0, 1],
      data: DataPractice,
      level: [0,1,2,3,4,5,6],
      score: 0
    } 
  }
    next = () => {
      // The next function launches a new random page & check if it hasn't been already played
      // Then it's stored in an array to be omitted for the next calls

      let pages = this.state.data.length;
      let randomPage = Math.floor(Math.random() * Math.floor(pages + 1)); 
      let pageDisplay = this.state.pageviewed.find(item => item !== randomPage);
      
      console.log("Next function / this is data.length:", pages);
      console.log("Next function / this random number:", randomPage);
      console.log("Next function / this is value available:", pageDisplay);

      if (pageDisplay !== undefined) {
        this.setState({...this.state, page: randomPage});
        this.state.pageviewed.push(pageDisplay);
      } else {
        this.setState({...this.state, pageviewed: [] });
        this.setState({...this.state, page: 0 });
      }
      console.log("Next function / page already displayed:",this.state.pageviewed);
      console.log("Next function / the new random page proposed:",this.state.page);
    }
      
     // The previous function target the last item of already played page

    previous = () => {
      let pageviewedLength = this.state.pageviewed.length;
      let lastPage = this.state.pageviewed.slice(pageviewedLength -2, pageviewedLength -1);
      this.setState({...this.state, page: lastPage })

      console.log("Previous function / number of pages already displayed:",this.state.pageviewed.length);
      console.log("Previous function / last page displayed:",lastPage);
    }
    
    // The solution function target the solution clicked by the user
    // If the user solution equals to the object solution the targetted div changes to green (and the others fade)
    // If the user solution doesn't equal to the object solution the targetted div changes to red anchorNode
    //  the div with the corectsolution changes to green (and the other fade) 

      solution = (id) => {
      let userSolution = id;
      console.log("Solution function / User selection:", userSolution);
    }



      render() {

        return (
        <> 
        <div className="practice-page">

        <div className="question-practice">{this.state.data[this.state.page].question}</div>

        <SolutionMulti data={this.state.data} solution={this.solution}/>

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