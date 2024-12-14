import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface ScrollContextValue {
  scroll: LocomotiveScroll | null;
}

const ScrollContext = createContext<ScrollContextValue>({ scroll: null });

export const useLocoScroll = () => useContext(ScrollContext);

interface Props {
  children: React.ReactNode;
}

export const LocomotiveScrollProvider: React.FC<Props> = ({ children }) => {
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const locomotiveScroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
      lerp: 0.1,
      reloadOnContextChange: true,
      scrollFromAnywhere: true,
    });

    setScroll(locomotiveScroll);

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scroll }}>
      <div data-scroll-container ref={containerRef}>
        {children}
      </div>
    </ScrollContext.Provider>
  );
};

export default LocomotiveScrollProvider;
