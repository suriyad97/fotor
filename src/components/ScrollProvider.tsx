import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { initScrollAnimations } from '../utils/scrollAnimations';

interface ScrollContextType {
  scroll: LocomotiveScroll | null;
  isReady: boolean;
}

const ScrollContext = createContext<ScrollContextType>({
  scroll: null,
  isReady: false,
});

export const useLocoScroll = () => useContext(ScrollContext);

interface ScrollProviderProps {
  children: React.ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const locomotiveScroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
      lerp: 0.1,
      getDirection: true,
      getSpeed: true,
      touchMultiplier: 2,
      resetNativeScroll: true
    });

    setScroll(locomotiveScroll);

    // Initialize scroll animations
    initScrollAnimations(locomotiveScroll);

    setIsReady(true);

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scroll, isReady }}>
      <div data-scroll-container ref={containerRef}>
        {children}
      </div>
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
