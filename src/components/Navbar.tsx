import React, { useState, useEffect } from 'react';
import { useLocoScroll } from './ScrollProvider';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scroll } = useLocoScroll();

  useEffect(() => {
    if (!scroll) return;

    const handleScroll = () => {
      const currentScrollY = (scroll as any).scroll.instance.scroll.y;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    (scroll as any).on('scroll', handleScroll);

    return () => {
      // Remove scroll event listener
      (scroll as any).destroy();
    };
  }, [scroll, lastScrollY]);

  const handleNavClick = (sectionId: string) => {
    if (!scroll) return;

    const target = document.querySelector(sectionId) as HTMLElement;
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    
    scroll.scrollTo(targetPosition, {
      duration: 1000,
      offset: -100,
      easing: [0.25, 0.00, 0.35, 1.00]
    });
  };

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-content">
        <div className="logo">
          <span className="logo-text">Fotor</span>
        </div>

        <div className="nav-links">
          <button onClick={() => handleNavClick('#features')}>Features</button>
          <button onClick={() => handleNavClick('#gallery')}>Gallery</button>
          <button onClick={() => handleNavClick('#benefits')}>Benefits</button>
          <button className="cta-button" onClick={() => handleNavClick('#cta')}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
