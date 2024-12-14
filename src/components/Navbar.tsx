import React, { useState, useEffect } from 'react';
import { useLocoScroll } from './ScrollProvider';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scroll } = useLocoScroll();

  useEffect(() => {
    if (!scroll) return;

    // Handle scroll
    const handleScroll = (args: { scroll: { y: number } }) => {
      const currentScrollY = args.scroll.y;
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    scroll.on('scroll', handleScroll);

    return () => {
      // Remove event listener using removeListener
      if (scroll) {
        scroll.destroy();
      }
    };
  }, [scroll, lastScrollY]);

  const handleNavClick = (sectionId: string) => {
    if (!scroll) return;
    const target = document.querySelector(`#${sectionId}`) as HTMLElement;
    if (target) {
      scroll.scrollTo(target, {
        offset: -100,
        duration: 1000,
        easing: [0.25, 0.00, 0.35, 1.00]
      });
    }
  };

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-content">
        <div className="logo">
          <span>Fotor</span>
        </div>
        <div className="nav-links">
          <button onClick={() => handleNavClick('features')}>Features</button>
          <button onClick={() => handleNavClick('gallery')}>Gallery</button>
          <button onClick={() => handleNavClick('benefits')}>Benefits</button>
          <button onClick={() => handleNavClick('cta')} className="cta-button">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
