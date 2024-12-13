import React, { useEffect, useState } from 'react';
import '../styles/transitions.css';

interface PageTransitionProps {
  children: React.ReactNode;
  direction?: 'side' | 'down';
  inProp: boolean;
}

const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  direction = 'side',
  inProp 
}) => {
  const [isVisible, setIsVisible] = useState(inProp);

  useEffect(() => {
    if (inProp) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [inProp]);

  const className = `
    transition-element
    ${direction === 'side' ? 'slide-side' : 'slide-down'}
    ${isVisible ? 'visible' : 'hidden'}
  `.trim();

  if (!isVisible && !inProp) return null;

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default PageTransition;
