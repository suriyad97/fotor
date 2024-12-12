import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="parallax-container">
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content" style={{ transform: `translateY(${offset * 0.3}px)` }}>
              <h1 className="hero-title">Transform Your Photos</h1>
              <p className="hero-description">
                Professional photo editing tools at your fingertips. Edit, enhance, and create stunning visuals in minutes.
              </p>
              <div className="hero-buttons">
                <button className="primary-button">Get Started</button>
                <button className="secondary-button">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="hero-features" style={{ transform: `translateY(${offset * 0.1}px)` }}>
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>AI Enhancement</h3>
            <p>One-click photo enhancement</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Pro Tools</h3>
            <p>Advanced editing features</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast & Easy</h3>
            <p>Quick edits on the go</p>
          </div>
        </section>

        <section id="templates" className="parallax-section">
          <div className="parallax-content" style={{ transform: `translateY(${offset * 0.2}px)` }}>
            <h2>Create Stunning Visuals</h2>
            <p>Transform your ideas into reality</p>
          </div>
        </section>

        <section id="pricing" className="parallax-section">
          <div className="parallax-content" style={{ transform: `translateY(${offset * 0.2}px)` }}>
            <h2>Simple Pricing</h2>
            <p>Choose the plan that works for you</p>
          </div>
        </section>

        <section id="about" className="parallax-section">
          <div className="parallax-content" style={{ transform: `translateY(${offset * 0.2}px)` }}>
            <h2>About Us</h2>
            <p>Your trusted photo editing partner</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;