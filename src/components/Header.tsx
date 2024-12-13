import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['hero', 'features', 'ai-enhancement', 'background-removal', 'effects'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
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
          <button 
            className={activeSection === 'features' ? 'active' : ''} 
            onClick={() => scrollToSection('features')}
          >
            Features
          </button>
          <button 
            className={activeSection === 'ai-enhancement' ? 'active' : ''} 
            onClick={() => scrollToSection('ai-enhancement')}
          >
            AI Enhancement
          </button>
          <button 
            className={activeSection === 'background-removal' ? 'active' : ''} 
            onClick={() => scrollToSection('background-removal')}
          >
            Background Removal
          </button>
          <button 
            className={activeSection === 'effects' ? 'active' : ''} 
            onClick={() => scrollToSection('effects')}
          >
            Effects
          </button>
        </nav>

        <div className="header-right">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
