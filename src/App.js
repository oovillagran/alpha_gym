import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
// import Home from './components/Home';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Header />
            <Routes>
              <Route path="/" />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
