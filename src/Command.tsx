import * as React from 'react';

export default class Command extends React.Component {
  public render() {
    return (
      <div className="commands">
        <button className="button">_</button>
        <button className="button">&#9633;</button>
        <button className="button">&times;</button>
      </div>
    );
  }
}
