import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/FeaturePage.css';

gsap.registerPlugin(ScrollTrigger);

interface FeaturePageProps {
  title: string;
  subtitle: string;
  description: string;
  demoImage: string;
  features: string[];
  typewriterTexts: string[];
}

const FeaturePage: React.FC<FeaturePageProps> = ({
  title,
  subtitle,
  description,
  demoImage,
  features,
  typewriterTexts
}) => {
  const demoImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (demoImageRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.5;
        demoImageRef.current.style.transform = `translate3d(0px, ${rate}px, 0px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Animate features list
    gsap.from('.feature-item', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.features-list',
        start: 'top 80%',
      },
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="feature-page-container">
      <div className="feature-page-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <Typewriter
              options={{
                strings: typewriterTexts,
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 25
              }}
            />
          </h1>
          <p className="hero-subtitle">{subtitle}</p>
          
          <div className="demo-image-container">
            <img
              ref={demoImageRef}
              src={demoImage}
              alt="Feature Demo"
              className="demo-image"
            />
          </div>
        </div>
      </div>

      <div className="feature-page-details">
        <div className="description-section">
          <h2>About {title}</h2>
          <p>{description}</p>
        </div>

        <div className="features-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">✨</div>
              <p>{feature}</p>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <button className="try-button">Try Now</button>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;
