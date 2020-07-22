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
      globaltime = {this.props.globaltime}
      className="start-window"
      statustest= {this.props.statustest}
      />; 
      const scorewindow = 
      <Scorewindow 
    
      info="element"
      launchtest={this.props.launchtest}
      display={this.props.display}
      score={this.props.score}
      style={{display:(this.props.display == "active")?'flex':'none'}}
      globaltime = {this.props.globaltime}
      className="start-window"
      level= {this.props.level}
      statustest= {this.props.statustest}
      />; 

      if (this.props.statustest === 1) {
        return <div><div>{scorewindow}</div>;</div>;     
      } else {
        return <div><div>{window}</div>;</div>;   
      }
    }
  }