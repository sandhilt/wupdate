import * as React from 'react';
import './Command.css';

export default class Command extends React.Component {
  public render() {
    return (
      <span className="Command">
        <button disabled={true} className="back">
          &larr;
        </button>
        {this.props.children}
        <button className="minimize">&minus;</button>
        <button className="maximize">&#9633;</button>
        <button className="close">&times;</button>
      </span>
    );
  }
}
