import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import '../styles/Pages.css';

const BackgroundRemoval: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Header />
      <PageTransition inProp={isVisible} direction="side">
        <div className="page-container">
          <section className="feature-hero">
            <h1>Background Removal</h1>
            <p>Remove backgrounds with one click using AI-powered tools</p>
          </section>
          
          <section className="feature-content">
            <div className="feature-details">
              <h2>Professional Background Removal</h2>
              <p>Our AI-powered tools make it easy to remove backgrounds:</p>
              <ul>
                <li>One-click background removal</li>
                <li>Edge refinement tools</li>
                <li>Transparent background export</li>
                <li>Batch processing capabilities</li>
              </ul>
            </div>
            
            <div className="feature-showcase">
              {/* Add before/after image showcase here */}
            </div>
          </section>
        </div>
      </PageTransition>
      <Footer />
    </>
  );
};

export default BackgroundRemoval;
