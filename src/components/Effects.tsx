import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Sections.css';

const Effects: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="effects" className="section" ref={ref}>
      <motion.div
        className="section-content"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>Creative Effects</h2>
        <p>Apply stunning effects and filters to your photos</p>
        <div className="effects-grid">
          <div className="effect-card">
            <div className="effect-preview">
              {/* Add effect preview */}
            </div>
            <h3>Artistic Filters</h3>
            <p>Transform photos into artistic masterpieces</p>
          </div>
          <div className="effect-card">
            <div className="effect-preview">
              {/* Add effect preview */}
            </div>
            <h3>Color Grading</h3>
            <p>Professional color grading presets</p>
          </div>
          <div className="effect-card">
            <div className="effect-preview">
              {/* Add effect preview */}
            </div>
            <h3>Texture Overlays</h3>
            <p>Add depth with texture effects</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Effects;
