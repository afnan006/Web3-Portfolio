import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy-900 text-white">
        {/* Navbar */}
        <Navbar />

        {/* HomePage (contains all sections) */}
        <HomePage />

        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;