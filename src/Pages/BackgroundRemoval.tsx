import React from 'react';
import FeaturePage from '../components/FeaturePage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BackgroundRemoval: React.FC = () => {
  const featureData = {
    title: "Background Removal",
    subtitle: "Remove backgrounds instantly with AI precision",
    description: "Our advanced AI technology makes background removal effortless and precise. Perfect for product photography, portraits, or any image where you need a clean, professional background removal. Export with transparency and maintain edge quality with just one click.",
    demoImage: "/path-to-background-removal-demo.jpg",
    features: [
      "One-click background removal with AI precision",
      "Smart edge detection and refinement",
      "Transparent background export options",
      "Batch processing for multiple images",
      "Hair and fine detail preservation",
      "Multiple export formats supported"
    ],
    typewriterTexts: [
      "Perfect Background Removal",
      "One Click. Zero Background.",
      "Professional Results Instantly",
      "AI-Powered Precision"
    ]
  };

  return (
    <>
      <Header />
      <FeaturePage {...featureData} />
      <Footer />
    </>
  );
};

export default BackgroundRemoval;
