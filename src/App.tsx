import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DiscoverGames from './pages/DiscoverGames';
import Contact from './pages/Contact';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover_games" element={<DiscoverGames />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
