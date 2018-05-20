import * as React from 'react';
import './App.css';
import Command from './Command';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          App Name
          <Command />
        </header>
      </div>
    );
  }
}

export default App;
