import React from 'react';
import Solution from './Solution';

export default class SolutionMulti extends React.Component {
   
    render() {
      const items = this.props.data[0].solutions.map((solution,j) => <Solution key={j} id={j + 1} info={solution} solution={this.props.solution}/>); 


  
      return    <div className="practice-solutions">
                    <div>{items}</div>;
                </div>
    }
  }
  