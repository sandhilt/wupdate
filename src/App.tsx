import * as moment from 'moment';
import 'moment/locale/pt-br';
import * as React from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';

interface IProps {
  name?: string;
}

interface IState {
  checked: boolean;
  date: Date;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    moment.locale('pt-br');
    this.state = {
      checked: true,
      date: new Date(),
    };
    this.checkUpdate = this.checkUpdate.bind(this);
  }
  public checkUpdate() {
    const { checked } = this.state;
    this.setState({
      checked: !checked,
      // date: new Date(),
    });
  }
  public render() {
    const { checked, date } = this.state;
    const msg = checked ? 'atualizado' : 'atualizando';
    const ago = moment(date);

    return (
      <div className="App">
        <Header name={this.props.name} />
        <Navigation />
        <main>
          <header>
            <h1>Update</h1>
          </header>
          <div className="status">
            <h2>
              Você está {msg}
              <small>
                Última verificação:
                <time>{ago.fromNow()}</time>
              </small>
            </h2>
            <progress max="100" hidden={checked} />
            <button
              className="check"
              disabled={!checked}
              onClick={this.checkUpdate}
            >
              Checar atualizações
            </button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
