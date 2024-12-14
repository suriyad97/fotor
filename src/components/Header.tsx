'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: 'background-removal', label: 'Background Removal' },
    { id: 'ai-enhancement', label: 'AI Enhancement' },
    { id: 'effects', label: 'Effects' },
  ];

  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${lastScrollY > 50 ? 'header-scrolled' : ''}`}>
      <nav className="nav-container">
        <Link href="/" className="logo">
          Fotor AI
        </Link>
        
        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="nav-link interactive"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="auth-buttons">
          <button className="login-btn interactive">Login</button>
          <button className="signup-btn interactive">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
