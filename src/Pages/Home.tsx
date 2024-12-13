import React, { useEffect, useState, useRef } from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import GlowingCursor from '../components/GlowingCursor';
import CookieConsent from '../components/CookieConsent';

const Home: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const newOffset = window.pageYOffset * 0.3;
          setOffset(newOffset);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px',
      threshold: 0.3,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id || 'hero';
          setActiveSection(sectionId);
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div>
      <Header />
      <GlowingCursor />
      <CookieConsent />
      <div className="home-container">
        <main className="main-content">
          {/* Hero Section */}
          <section id="hero" className="hero-section">
            <div className="hero-content">
              <h1>Supercharge Your Imagination with AI</h1>
              <p>Professional photo editing tools powered by artificial intelligence</p>
              <div className="hero-cta">
                <button className="primary-button" onClick={() => scrollToSection('features')}>
                  Get Started
                </button>
                <button className="secondary-button" onClick={() => scrollToSection('ai-enhancement')}>
                  Learn More
                </button>
              </div>
            </div>
            <div className="hero-image">
              <img src="/hero-image.png" alt="AI Photo Editing" />
            </div>
          </section>

          {/* Features Overview */}
          <section id="features" className="features-section">
            <div className="section-content">
              <h2>Our Features</h2>
              <div className="features-grid">
                <div className="feature-card" onClick={() => scrollToSection('ai-enhancement')}>
                  <div className="feature-icon">✨</div>
                  <h3>AI Enhancement</h3>
                  <p>Enhance your photos automatically with our advanced AI technology</p>
                </div>

                <div className="feature-card" onClick={() => scrollToSection('background-removal')}>
                  <div className="feature-icon">🎯</div>
                  <h3>Background Removal</h3>
                  <p>Remove backgrounds with one click using AI-powered tools</p>
                </div>

                <div className="feature-card" onClick={() => scrollToSection('effects')}>
                  <div className="feature-icon">🎨</div>
                  <h3>Effects</h3>
                  <p>Apply professional effects and filters to your photos</p>
                </div>
              </div>
            </div>
          </section>

          {/* AI Enhancement Section */}
          <section id="ai-enhancement" className="feature-section">
            <div className="section-content">
              <div className="feature-content">
                <div className="feature-details">
                  <h2>AI Enhancement</h2>
                  <p>Transform your photos with cutting-edge AI technology</p>
                  <ul className="feature-list">
                    <li>Automatic color correction and enhancement</li>
                    <li>Smart lighting adjustment</li>
                    <li>Portrait enhancement and retouching</li>
                    <li>Noise reduction and sharpening</li>
                  </ul>
                  <button className="feature-button">Try AI Enhancement</button>
                </div>
                <div className="feature-showcase">
                  <div className="before-after">
                    <div className="image-container">
                      <img src="/before-image.jpg" alt="Before Enhancement" />
                      <span>Before</span>
                    </div>
                    <div className="image-container">
                      <img src="/after-image.jpg" alt="After Enhancement" />
                      <span>After</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Background Removal Section */}
          <section id="background-removal" className="feature-section">
            <div className="section-content">
              <div className="feature-content reverse">
                <div className="feature-showcase">
                  <div className="upload-area">
                    <div className="upload-icon">🎯</div>
                    <p>Drop your image here or click to upload</p>
                    <button className="upload-button">Upload Image</button>
                  </div>
                </div>
                <div className="feature-details">
                  <h2>Background Removal</h2>
                  <p>Remove backgrounds instantly with AI precision</p>
                  <ul className="feature-list">
                    <li>One-click background removal</li>
                    <li>Edge detection and refinement</li>
                    <li>Transparent background support</li>
                    <li>Batch processing available</li>
                  </ul>
                  <button className="feature-button">Remove Background</button>
                </div>
              </div>
            </div>
          </section>

          {/* Effects Section */}
          <section id="effects" className="feature-section">
            <div className="section-content">
              <div className="feature-content">
                <div className="feature-details">
                  <h2>Photo Effects</h2>
                  <p>Add stunning effects to your photos</p>
                  <ul className="feature-list">
                    <li>Professional filters and presets</li>
                    <li>Artistic effects and overlays</li>
                    <li>Custom effect adjustments</li>
                    <li>Real-time preview</li>
                  </ul>
                  <button className="feature-button">Explore Effects</button>
                </div>
                <div className="feature-showcase">
                  <div className="effects-grid">
                    <div className="effect-item">
                      <div className="effect-preview vintage"></div>
                      <span>Vintage</span>
                    </div>
                    <div className="effect-item">
                      <div className="effect-preview dramatic"></div>
                      <span>Dramatic</span>
                    </div>
                    <div className="effect-item">
                      <div className="effect-preview noir"></div>
                      <span>Noir</span>
                    </div>
                    <div className="effect-item">
                      <div className="effect-preview vivid"></div>
                      <span>Vivid</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;