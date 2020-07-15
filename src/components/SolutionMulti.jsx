import React from 'react';
import Solution from './Solution';

export default class SolutionMulti extends React.Component {
   
    render() {
      const items = this.props.data[4].solutions.map((solution,j) => <Solution key={j} id={j + 1} info={solution} solution={this.props.solution} color={this.props.color} testsolution={this.props.testSolution}/>); 


  
      return    <div className="practice-solutions">
                    <div>{items}</div>;
                </div>
    }
  }