import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router';

import Button from './components/Button/component/Button';
import RoutingSample from './components/Button/component/RoutingSample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Switch>
            <Route
              path="/sample"
              component= { RoutingSample }
            />
          </Switch>
          <Button />
        </a>
      </header>
    </div>
  );
}

export default App;
