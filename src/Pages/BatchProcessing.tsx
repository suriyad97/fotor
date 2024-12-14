import React from 'react';
import FeaturePage from '../components/FeaturePage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BatchProcessing: React.FC = () => {
  const featureData = {
    title: "Batch Processing",
    subtitle: "Edit multiple photos simultaneously with AI precision",
    description: "Save time and maintain consistency across your photo collection with our powerful batch processing feature. Apply the same enhancements, styles, or edits to multiple photos at once while ensuring consistent quality and style across your entire collection.",
    demoImage: "/path-to-batch-processing-demo.jpg",
    features: [
      "Process hundreds of photos simultaneously",
      "Consistent editing across all images",
      "Custom preset creation and application",
      "Smart file organization and naming",
      "Progress tracking and preview",
      "Multiple export format options"
    ],
    typewriterTexts: [
      "Edit Hundreds at Once",
      "Consistent Results Every Time",
      "Save Hours of Work",
      "Bulk Processing Made Easy"
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

export default BatchProcessing;
