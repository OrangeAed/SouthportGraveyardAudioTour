import React from 'react';
import { ReactDOM, ComponentElement } from 'react';
import './css/App.css';
import MainPage from './MainPage.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MainPage></MainPage>
      </header>
    </div>
  );
}

export default App;
