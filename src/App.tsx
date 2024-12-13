import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import './styles/fonts.css';
import Home from './Pages/Home';
import AIEnhancement from './Pages/AIEnhancement';
import BackgroundRemoval from './Pages/BackgroundRemoval';
import Effects from './Pages/Effects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-enhancement" element={<AIEnhancement />} />
        <Route path="/background-removal" element={<BackgroundRemoval />} />
        <Route path="/effects" element={<Effects />} />
      </Routes>
    </div>
  );
}

export default App;
