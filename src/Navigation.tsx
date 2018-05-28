import * as React from 'react';
import './Navigation.css';

export default class Navigation extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <nav className="Navigation">
          <ul>
            <li>
              <a href="#">
                <span className="emoji">🏠</span>Início
              </a>
            </li>
            <li>
              <form>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Localizar"
                />
              </form>
            </li>
            <li>
              <header>
                <h3>Submenu</h3>
              </header>
              <ul>
                <li>
                  <a href="#">
                    <span className="emoji">🦄</span>Item 1
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="emoji">🍀</span>Item 2
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="emoji">🚀</span>Item 3
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
