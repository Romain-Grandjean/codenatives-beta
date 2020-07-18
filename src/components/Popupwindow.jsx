import React from 'react';
import Startwindow from './Startwindow';

export default class Popupwindow extends React.Component {
   
    render() {
      const window = 
      <Startwindow 
      questionsettime={this.props.questionsettime}
      numberofquestions={this.props.numberofquestions}
      info="element"
      launchtest={this.props.launchtest}
      page={this.props.page}
      />; 
 

      return    <div className="practice-solutions">
                    <div>{window}</div>;
                </div>
    }
  }