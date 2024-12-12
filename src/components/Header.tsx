import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-left">
          <button className="logo" onClick={scrollToTop}>
            <span className="logo-text">Fotor</span>
          </button>
        </div>
        
        <nav className="header-nav">
          <button onClick={() => scrollToSection('features')}>Features</button>
          <button onClick={() => scrollToSection('templates')}>Templates</button>
          <button onClick={() => scrollToSection('pricing')}>Pricing</button>
          <button onClick={() => scrollToSection('about')}>About</button>
        </nav>

        <div className="header-right">
          <button className="header-button login">Log In</button>
          <button className="header-button signup">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
