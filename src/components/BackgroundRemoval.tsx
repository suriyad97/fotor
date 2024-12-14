'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Sections.css';

const BackgroundRemoval: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="background-removal" className="section background-removal-section" ref={ref}>
      <motion.div
        className="section-content interactive"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="interactive">Perfect Background Removal</h2>
        <p className="interactive">Remove backgrounds with precision using our advanced AI technology.</p>
        <div className="feature-demo interactive">
          <div className="demo-image interactive">
            {/* Add before/after demo images */}
          </div>
          <div className="feature-details interactive">
            <ul className="interactive">
              <li className="interactive">One-click background removal</li>
              <li className="interactive">Edge refinement</li>
              <li className="interactive">Hair detail preservation</li>
              <li className="interactive">Batch processing capability</li>
            </ul>
            <button className="try-now-btn interactive">Try Now</button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BackgroundRemoval;
