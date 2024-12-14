'use client'

import React from 'react';
import '../styles/Features.css';

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
  return (
    <div className="features-container">
      <div className="features-content">
        <h2 className="features-title">Powerful Features</h2>
        
        <div className="features-list">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="feature-item"
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
    </div>
  );
};

export default Features;
