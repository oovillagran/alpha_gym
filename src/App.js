import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Header />
            <p className="text-3xl font-bold underline">Oscar</p>
            <p>
              Edit
              {' '}
              <code>src/App.js</code>
              {' '}
              and save to reload.
            </p>
            <span>
              <span>Learn </span>
              <a
                className="App-link"
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              <span>, </span>
              <a
                className="App-link"
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </a>
              <span>, </span>
              <a
                className="App-link"
                href="https://redux-toolkit.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux Toolkit
              </a>
              ,
              <span> and </span>
              <a
                className="App-link"
                href="https://react-redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Redux
              </a>
            </span>
          </header>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
