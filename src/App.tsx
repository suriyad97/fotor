import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LocomotiveScrollProvider } from './components/ScrollProvider';
import Layout from './components/Layout';
import Home from './Pages/Home';
import './styles/App.css';
import './styles/global.css';

function App() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <LocomotiveScrollProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="App"
        ref={containerRef}
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </motion.div>
    </LocomotiveScrollProvider>
  );
}

export default App;
