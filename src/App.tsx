import * as React from 'react';
import './App.css';
import Header from './Header';

interface IProps {
  name?: string;
}

class App extends React.Component<IProps> {
  public render() {
    return (
      <div className="App">
        <Header name={this.props.name || "Test"} />
      </div>
    );
  }
}

export default App;
