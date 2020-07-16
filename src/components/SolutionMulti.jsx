import React from 'react';
import Solution from './Solution';

export default class SolutionMulti extends React.Component {
   
    render() {
      const items = this.props.data[this.props.page].solutions.map((solution,j) => <Solution key={j} id={j + 1} info={solution} page={this.props.page} solution={this.props.solution} color={this.props.color} answer={this.props.answer} testSolution={this.props.testSolution}/>); 

      return    <div className="practice-solutions">
                    <div>{items}</div>;
                </div>
    }
  }