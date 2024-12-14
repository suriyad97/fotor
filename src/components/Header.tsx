'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navItems = [
    { id: 'background-removal', label: 'Background Removal' },
    { id: 'ai-enhancement', label: 'AI Enhancement' },
    { id: 'effects', label: 'Effects' },
    { id: 'batch-processing', label: 'Batch Processing' },
  ];

  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
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

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'} ${lastScrollY > 50 ? 'header-scrolled' : ''}`}>
      <div className="header-content">
        <Link href="/" className="logo">
          Fotor AI
        </Link>
        
        <nav className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="nav-link"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
