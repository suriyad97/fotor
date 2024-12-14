import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/Features.css';

gsap.registerPlugin(ScrollTrigger);

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: "AI-Powered Enhancement",
    description: "Transform your photos instantly with our advanced AI algorithms. Enhance clarity, color, and detail with a single click.",
    icon: "✨",
    image: "/path-to-enhancement-demo.jpg"
  },
  {
    id: 2,
    title: "Smart Background Removal",
    description: "Remove backgrounds with precision using AI technology. Perfect for product photos, portraits, and creative compositions.",
    icon: "🎯",
    image: "/path-to-background-demo.jpg"
  },
  {
    id: 3,
    title: "Artistic Style Transfer",
    description: "Apply stunning artistic styles to your photos. Choose from a variety of curated styles or create your own unique look.",
    icon: "🎨",
    image: "/path-to-style-demo.jpg"
  },
  {
    id: 4,
    title: "Batch Processing",
    description: "Edit multiple photos at once while maintaining consistency. Save time with automated batch processing.",
    icon: "⚡",
    image: "/path-to-batch-demo.jpg"
  }
];

const Features: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (!featuresRef.current) return;

    const featuresSection = featuresRef.current;
    
    // Fade in title
    gsap.fromTo(
      '.features-title',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.features-title',
          start: 'top 80%',
        },
      }
    );

    // Animate each feature
    featureRefs.current.forEach((feature, index) => {
      if (!feature) return;

      // Content animation
      gsap.fromTo(
        feature.querySelector('.feature-content'),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: feature,
            start: 'top 70%',
          },
        }
      );

      // Image animation
      gsap.fromTo(
        feature.querySelector('.feature-image'),
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: feature,
            start: 'top 70%',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const setFeatureRef = (el: HTMLDivElement | null, index: number) => {
    featureRefs.current[index] = el;
  };

  return (
    <section className="features-section" ref={featuresRef} data-scroll-section>
      <div className="features-container">
        <h2 className="features-title">Powerful Features</h2>
        
        <div className="features-list">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="feature-item"
              ref={(el) => setFeatureRef(el, index)}
              data-feature-id={feature.id}
            >
              <div className="feature-content">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              
              <div className="feature-image">
                <div className="image-container">
                  <img src={feature.image} alt={feature.title} />
                  <div className="image-overlay">
                    <button className="try-now-btn">Try Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
