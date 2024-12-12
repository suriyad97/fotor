import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Fotor</h3>
          <p className="footer-description">
            Professional photo editing tools at your fingertips. Transform your photos with ease.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#templates">Templates</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Documentation</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} Fotor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
