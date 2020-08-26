import React from 'react';
import logo from './Aston Martin Logo.png';
import './App.css';
import Aston from './Vanquish';
import Db11 from './DB11';
import Superleggera from './Superleggera';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br />
        <br />
        <a
          className="App-link"
          href="https://www.astonmartin.com/en-us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about Aston Martin
        </a>
      </header>
      <h1>Aston Martin</h1>
      <Aston />
      <Db11 />
      <Superleggera />
    </div>
  );
}

export default App;
