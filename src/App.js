import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExercisesDetail from './pages/ExercisesDetail';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div
          className="App"
          style={{
            background: '#fffafb',
          }}
        >
          <header className="App-header">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exercise/:id" element={<ExercisesDetail />} />
            </Routes>
          </header>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
