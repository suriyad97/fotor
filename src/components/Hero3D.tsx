import React, { useEffect, useState } from 'react';
import '../styles/Hero3D.css';

const Hero3D: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hero-container">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">VOVI.</div>
      </header>

      <div className="hero-content">
        <div className="headline-container">
          <h1 className="main-headline">
            <span className="gradient-text">AI That Redefines</span>
            <span className="emphasis-text">Editing.</span>
          </h1>
          <p className="subheadline">Focus on creativity. Let AI handle the rest.</p>
        </div>
        
        <div className="background-animation">
          <div className="gradient-orb"></div>
          <div className="gradient-blur"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero3D;
