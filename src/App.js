import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h1> Hello ReactJs! </h1>
      <a className="App-link" href="/">BiBi, this is my demo for CI/CD using CircleCI, Github, Docker, Dockerhub and I just imported the environment variables.</a>
      </header>
    </div>
  );
}

export default App;
