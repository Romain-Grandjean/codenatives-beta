import React from 'react';
import Solution from './Solution';

export default class SolutionMulti extends React.Component {
   
    render() {
      const items = this.props.data[this.props.page].solutions.map((element,i) => <Solution key={i} id={"solution" + (i + 1)} info={element} picture={i +1} page={this.props.page} solution={this.props.solution} answer={this.props.answer} testSolution={this.props.testSolution}/>); 

      return    <div className="practice-solutions">
                    <div>{items}</div>;
                </div>
    }
  }