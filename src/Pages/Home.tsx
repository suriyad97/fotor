import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocoScroll } from '../components/ScrollProvider';
import Navbar from '../components/Navbar';
import Hero3D from '../components/Hero3D';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import TeaserSection from '../components/TeaserSection'; 
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Typewriter from 'typewriter-effect';
import '../styles/Home.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const { scroll, isReady } = useLocoScroll();
  const containerRef = React.createRef<HTMLDivElement>();

  // Intersection Observer hooks for fade-in animations
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [galleryRef, galleryInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (scroll && isReady) {
      scroll.update();

      // Initialize GSAP ScrollTrigger
      ScrollTrigger.scrollerProxy('[data-scroll-container]', {
        scrollTop(value) {
          if (arguments.length) {
            scroll.scrollTo(0, { duration: 0, offset: value as number });
            return;
          }
          return (scroll as any).scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        }
      });

      // Background color transitions
      const sections = document.querySelectorAll('[data-color]');
      sections.forEach((section) => {
        const color = section.getAttribute('data-color');
        gsap.to(document.documentElement, {
          scrollTrigger: {
            trigger: section,
            scroller: containerRef.current,
            scrub: true,
            start: 'top center',
            end: 'bottom center'
          },
          '--bg-color': color,
          ease: 'none'
        });
      });

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }
  }, [scroll, isReady]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="home" ref={containerRef} data-scroll-container>
      <Navbar />
      
      {/* Hero Section */}
      <section data-scroll-section data-color="#000000" className="hero-section">
        <Hero3D />
      </section>

      <Features />
      
      <Testimonials />

      <TeaserSection />

      {/* Features Section */}
      <section 
        id="features"
        data-scroll-section
        data-color="#1a1a1a"
        className="features-section"
        ref={featuresRef}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          className="features-content"
          data-scroll
          data-scroll-speed="1"
        >
          <motion.h2 variants={fadeInUp}>Transform Your Photos</motion.h2>
          <div className="features-grid">
            {['AI Enhancement', 'Background Removal', 'Effects Gallery'].map((feature, index) => (
              <motion.div 
                key={feature}
                className="feature-item"
                variants={fadeInUp}
                data-scroll
                data-scroll-speed={1 + index * 0.2}
              >
                <h3>{feature}</h3>
                <p>Experience the power of AI-driven photo editing</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section 
        id="gallery"
        data-scroll-section
        data-color="#000000"
        className="gallery-section"
        ref={galleryRef}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={galleryInView ? "visible" : "hidden"}
          className="gallery-content"
          data-scroll
          data-scroll-speed="1"
        >
          <motion.h2 variants={fadeInUp}>Gallery Showcase</motion.h2>
          <motion.div 
            className="gallery-grid"
            variants={fadeInUp}
            data-scroll
            data-scroll-speed="2"
          >
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                whileHover={{ scale: 1.05 }}
                data-scroll
                data-scroll-speed={1 + index * 0.1}
              >
                <div className="gallery-image" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section 
        id="benefits"
        data-scroll-section
        data-color="#1a1a1a"
        className="benefits-section"
        ref={benefitsRef}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={benefitsInView ? "visible" : "hidden"}
          className="benefits-content"
          data-scroll
          data-scroll-speed="1"
        >
          <motion.h2 variants={fadeInUp}>Why Choose Us</motion.h2>
          <div className="benefits-grid">
            {[
              { title: 'Fast Processing', desc: 'Get results in seconds' },
              { title: 'High Quality', desc: 'Maintain image quality' },
              { title: 'Easy to Use', desc: 'Intuitive interface' }
            ].map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                className="benefit-item"
                variants={fadeInUp}
                data-scroll
                data-scroll-speed={1 + index * 0.2}
              >
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        data-scroll-section
        data-color="#000000"
        className="cta-section"
        ref={ctaRef}
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          className="cta-content"
          data-scroll
          data-scroll-speed="2"
        >
          <motion.h2 variants={fadeInUp}>Ready to Get Started?</motion.h2>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-scroll
            data-scroll-speed="3"
          >
            Try Now
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer" data-scroll-section>
        <div className="footer-content">
          <div className="footer-links">
            {['About', 'Contact', 'Privacy Policy'].map((link) => (
              <motion.a 
                key={link}
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
          <div className="social-links">
            {/* Add social media icons/links */}
          </div>
          <p className="copyright"> 2024 Fotor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;