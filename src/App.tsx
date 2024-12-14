import React from 'react';
import { ScrollProvider } from './components/ScrollProvider';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import './styles/fonts.css';
import './styles/global.css';
import Home from './Pages/Home';
import AIEnhancement from './Pages/AIEnhancement';
import BackgroundRemoval from './Pages/BackgroundRemoval';
import Effects from './Pages/Effects';
import CursorGlow from './components/CursorGlow';

function App() {
  return (
    <ScrollProvider>
      <div className="App">
        <CursorGlow />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-enhancement" element={<AIEnhancement />} />
          <Route path="/background-removal" element={<BackgroundRemoval />} />
          <Route path="/effects" element={<Effects />} />
        </Routes>
      </div>
    </ScrollProvider>
  );
}

export default App;
