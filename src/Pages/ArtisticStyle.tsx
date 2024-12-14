import React from 'react';
import FeaturePage from '../components/FeaturePage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ArtisticStyle: React.FC = () => {
  const featureData = {
    title: "Artistic Style Transfer",
    subtitle: "Transform your photos into stunning works of art",
    description: "Experience the magic of AI-powered style transfer. Transform your photos into masterpieces inspired by famous artistic styles, from classic paintings to modern art. Create unique artistic interpretations of your images with just one click.",
    demoImage: "/path-to-style-transfer-demo.jpg",
    features: [
      "Wide range of artistic styles to choose from",
      "Real-time style preview",
      "Custom style strength adjustment",
      "Preserve original image details",
      "Create and save custom styles",
      "High-resolution output support"
    ],
    typewriterTexts: [
      "Turn Photos Into Art",
      "AI-Powered Creativity",
      "Endless Artistic Possibilities",
      "Your Photos, Reimagined"
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

export default ArtisticStyle;
