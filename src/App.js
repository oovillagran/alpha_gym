import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Home from './pages/Home';
// import SearchExercises from './components/SearchExercises';
// import Exercises from './components/Exercises';
import Contact from './components/Contact';
import ExercisesDetail from './pages/ExercisesDetail';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Header />
            {/* <Home /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/exercises" element={<ExercisesDetail />} />
            </Routes>
          </header>
        </div>
      </BrowserRouter>
      {/* <SearchExercises />
      <Exercises /> */}
      <Footer />
    </>
  );
}

export default App;
