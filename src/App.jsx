import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/sections/Header';
import Home from './components/sections/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-black transition-colors">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
