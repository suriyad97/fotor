'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Sections.css';

const AIEnhancement: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="ai-enhancement" className="section" ref={ref}>
      <motion.div
        className="section-content"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="interactive">AI Enhancement</h2>
        <p className="interactive">Automatically enhance your photos with our advanced AI algorithms</p>
        <div className="feature-demo">
          <div className="demo-image interactive">
            {/* Add demo image or interactive component */}
          </div>
          <div className="feature-details">
            <ul className="interactive">
              <li className="interactive">Smart color correction</li>
              <li className="interactive">Automatic exposure adjustment</li>
              <li className="interactive">Detail enhancement</li>
              <li className="interactive">Noise reduction</li>
            </ul>
            <button className="try-now-btn interactive">Try Now</button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AIEnhancement;
