import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', url: '#', icon: '𝕏' },
    { name: 'Instagram', url: '#', icon: '📸' },
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'GitHub', url: '#', icon: '💻' },
  ];

  const footerLinks = [
    { title: 'Company', links: ['About Us', 'Careers', 'Contact'] },
    { title: 'Resources', links: ['Blog', 'Documentation', 'Support'] },
    { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h3>Fotor</h3>
            <p>Transform your photos with AI-powered editing tools</p>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title} className="footer-section">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-social">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="social-link"
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Fotor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
