import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/TeaserSection.css';

gsap.registerPlugin(ScrollTrigger);

const TeaserSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Fade in animation for the section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      }
    );

    // Progress indicator animation
    gsap.to(progressRef.current, {
      width: '100%',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="teaser-section" ref={sectionRef} data-scroll-section>
      <div className="progress-container">
        <div className="progress-bar" ref={progressRef}></div>
        <span className="progress-text">01 / Start Here</span>
      </div>

      <div className="teaser-content">
        <div className="teaser-left">
          <div className="image-preview">
            <div className="ai-working-animation"></div>
            <img 
              src="/path-to-your-image.jpg" 
              alt="AI Enhancement Preview" 
              className="preview-image"
            />
          </div>
        </div>

        <div className="teaser-right">
          <h2 className="teaser-headline">Ready to redefine your workflow?</h2>
          <p className="teaser-subtext">Your story begins here</p>
          
          <div className="feature-hints">
            <div className="feature-hint">
              <div className="hint-icon upscale"></div>
              <span>Upscale Images</span>
            </div>
            <div className="feature-hint">
              <div className="hint-icon storybook"></div>
              <span>Create Storybooks</span>
            </div>
            <div className="feature-hint">
              <div className="hint-icon workflow"></div>
              <span>Save Time</span>
            </div>
          </div>

          <div className="scroll-cue">
            <span>Scroll to see the difference</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </div>

      <div className="section-divider">
        <div className="divider-line"></div>
      </div>
    </section>
  );
};

export default TeaserSection;
