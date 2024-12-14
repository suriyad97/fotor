import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import '../styles/Pages.css';
import '../styles/Effects.css';

const Effects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="effects-container">
      <Header />
      <PageTransition inProp={isVisible} direction="down">
        <div className="page-container">
          <section className="feature-hero">
            <h1>Photo Effects</h1>
            <p>Add stunning effects and filters to your photos</p>
          </section>
          
          <section className="feature-content">
            <div className="feature-details">
              <h2>Professional Effects Gallery</h2>
              <p>Enhance your photos with our collection of effects:</p>
              <ul>
                <li>Artistic filters</li>
                <li>Color grading presets</li>
                <li>Light effects and overlays</li>
                <li>Custom effect creation</li>
              </ul>
            </div>
            
            <div className="feature-showcase">
              {/* Add effects gallery showcase here */}
            </div>
          </section>
        </div>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Effects;
