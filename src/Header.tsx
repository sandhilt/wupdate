import * as React from 'react';
import Command from './Command';
import './Header.css';

interface IProps {
  name: string;
}

export default class Header extends React.Component<IProps> {
  public render() {
    return (
      <header className="App-Header">
        <Command>
          <span>{this.props.name}</span>
        </Command>
      </header>
    );
  }
}
