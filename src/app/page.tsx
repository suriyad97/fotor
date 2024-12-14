import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import AIEnhancement from '../components/AIEnhancement'
import BackgroundRemoval from '../components/BackgroundRemoval'
import Effects from '../components/Effects'
import BatchProcessing from '../components/BatchProcessing'
import Footer from '../components/Footer'

export default function Home() {
  return (
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
  )
}
