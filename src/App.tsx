import React from 'react';
import logo from './logo.svg';
import './App.css';
import LiveExpressionExample from './components/LiveExpressionExample/LiveExpressionExample';
import LoggingExample from './components/LoggingExample/LoggingExample';
import CssDebuggingExample from './components/CssDebuggingExample/CssDebuggingExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://localhost:8000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn DevTools
        </a>
      </header>
      <br/>
      <LoggingExample/>
      <br/>
      <LiveExpressionExample/>
      <br/>
      <CssDebuggingExample/>
    </div>
  );
}

export default App;
