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
      display={this.props.display}
      style={{display:(this.props.display == "active")?'flex':'none'}}
      globaltime = {this.props.questionsettime * this.props.numberofquestions}
      className="start-window"
      />; 
 

      return    <div>
                    <div>{window}</div>;
                </div>
    }
  }