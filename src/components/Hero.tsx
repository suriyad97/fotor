'use client'

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section className="hero-section" ref={ref}>
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hero-title"
        >
          Welcome to Fotor AI
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hero-subtitle"
        >
          The new era of photo editing
        </motion.h2>
      </div>
    </section>
  );
};

export default Hero;
