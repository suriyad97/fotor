import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import AIEnhancement from '../components/AIEnhancement'
import BackgroundRemoval from '../components/BackgroundRemoval'
import Effects from '../components/Effects'
import BatchProcessing from '../components/BatchProcessing'
import Footer from '../components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advanced AI Photo Editor | Fotor AI',
  description: 'Edit photos with AI-powered tools. Remove backgrounds, enhance images, apply effects, and process batches of photos instantly.',
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Fotor AI',
            applicationCategory: 'Photo Editor',
            description: 'Advanced AI-powered photo editing application',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            },
            featureList: [
              'AI Background Removal',
              'Image Enhancement',
              'Creative Effects',
              'Batch Processing'
            ],
            screenshot: '/app-screenshot.jpg',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '1250'
            }
          })
        }}
      />
      <main className="home-container">
        <Header />
        <Hero />
        <AIEnhancement />
        <BackgroundRemoval />
        <Effects />
        <BatchProcessing />
        <Features />
        <Footer />
      </main>
    </>
  )
}
