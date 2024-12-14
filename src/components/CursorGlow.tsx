import React, { useEffect, useRef } from 'react';
import '../styles/CursorGlow.css';

const CursorGlow: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        cursorRef.current.style.background = `
          radial-gradient(
            2000px at ${x}px ${y}px,
            rgba(29, 78, 216, 0.07),
            transparent 70%
          ),
          radial-gradient(
            1500px at ${x}px ${y}px,
            rgba(29, 78, 216, 0.10),
            transparent 65%
          ),
          radial-gradient(
            1000px at ${x}px ${y}px,
            rgba(29, 78, 216, 0.15),
            transparent 60%
          )
        `;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={cursorRef} className="cursor-glow" />;
};

export default CursorGlow;
