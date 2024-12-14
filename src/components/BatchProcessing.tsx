import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Sections.css';

const BatchProcessing: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="batch-processing" className="section" ref={ref}>
      <motion.div
        className="section-content"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>Batch Processing</h2>
        <p>Edit multiple photos at once with our powerful batch processing tools</p>
        <div className="feature-demo">
          <div className="demo-workflow">
            <div className="workflow-step">
              <h3>1. Upload</h3>
              <p>Upload multiple images at once</p>
            </div>
            <div className="workflow-step">
              <h3>2. Edit</h3>
              <p>Apply edits to all images</p>
            </div>
            <div className="workflow-step">
              <h3>3. Export</h3>
              <p>Download all processed images</p>
            </div>
          </div>
          <div className="feature-details">
            <ul>
              <li>Process hundreds of images</li>
              <li>Consistent editing across all photos</li>
              <li>Custom export settings</li>
              <li>Progress tracking</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BatchProcessing;
