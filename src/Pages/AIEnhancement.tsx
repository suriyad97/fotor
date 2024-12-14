import React from 'react';
import FeaturePage from '../components/FeaturePage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AIEnhancement: React.FC = () => {
  const featureData = {
    title: "AI Enhancement",
    subtitle: "Transform your photos with cutting-edge AI technology",
    description: "Our advanced AI algorithms analyze and enhance your photos automatically, improving every aspect of your image with just one click. Experience professional-grade photo enhancement powered by state-of-the-art artificial intelligence.",
    demoImage: "/path-to-ai-enhancement-demo.jpg",
    features: [
      "Intelligent color balance and vibrancy adjustment",
      "Smart lighting and exposure correction",
      "Advanced sharpness and detail enhancement",
      "Automatic noise reduction and clarity improvement",
      "Face enhancement and skin tone optimization",
      "Smart composition adjustment"
    ],
    typewriterTexts: [
      "Transform Photos Instantly",
      "Professional Results with AI",
      "One-Click Enhancement",
      "Perfect Photos Every Time"
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

export default AIEnhancement;
