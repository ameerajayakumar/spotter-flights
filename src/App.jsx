// import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="/results" element={<ResultsPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
