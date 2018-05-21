import 'dialog-polyfill';
import 'dialog-polyfill/dialog-polyfill.css';
import 'normalize.css';
import 'progress-polyfill/progress-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const appName = "Settings";

ReactDOM.render(<React.Fragment>{appName}</React.Fragment>, document.getElementById('App-titlebar'));

ReactDOM.render(<App name={appName} />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
