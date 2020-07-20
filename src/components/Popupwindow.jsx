import React from 'react';
import Startwindow from './Startwindow';
import Scorewindow from './Scorewindow';

export default class Popupwindow extends React.Component {
   
    render() {

      const window = 
      <Startwindow 
      questionsettime={this.props.questionsettime}
      numberofquestions={this.props.numberofquestions}
      info="element"
      launchtest={this.props.launchtest}
      page={this.props.page}
      display={this.props.display}
      style={{display:(this.props.display == "active")?'flex':'none'}}
      globaltime = {this.props.questionsettime * this.props.numberofquestions}
      className="start-window"
      />; 
      const scorewindow = 
      <Scorewindow 
    
      info="element"
      launchtest={this.props.launchtest}
      display={this.props.display}
      score={this.props.score}
      style={{display:(this.props.display == "active")?'flex':'none'}}
      globaltime = {this.props.questionsettime * this.props.numberofquestions}
      className="start-window"
      />; 

      if (this.props.page <= 1) {
        return <div><div>{window}</div>;</div>;      
      } else {
        return <div><div>{scorewindow}</div>;</div>;      
      }
    }
  }