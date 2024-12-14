import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://fotor.ai'),
  title: {
    default: 'Fotor AI - Advanced Photo Editing with Artificial Intelligence',
    template: '%s | Fotor AI'
  },
  description: 'Transform your photos with Fotor AI\'s advanced editing tools. Remove backgrounds, enhance images, and apply AI-powered effects instantly.',
  keywords: ['photo editing', 'AI photo editor', 'background removal', 'image enhancement', 'batch processing', 'AI effects', 'photo filters'],
  authors: [{ name: 'Fotor AI Team' }],
  creator: 'Fotor AI',
  publisher: 'Fotor AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Fotor AI - Advanced Photo Editing with Artificial Intelligence',
    description: 'Transform your photos with Fotor AI\'s advanced editing tools. Remove backgrounds, enhance images, and apply AI-powered effects instantly.',
    url: 'https://fotor.ai',
    siteName: 'Fotor AI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fotor AI - Advanced Photo Editing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fotor AI - Advanced Photo Editing with Artificial Intelligence',
    description: 'Transform your photos with Fotor AI\'s advanced editing tools. Remove backgrounds, enhance images, and apply AI-powered effects instantly.',
    images: ['/twitter-image.jpg'],
    creator: '@FotorAI',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-site-verification',
    other: {
      'facebook-domain-verification': 'your-facebook-domain-verification',
    },
  },
  alternates: {
    canonical: 'https://fotor.ai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900;1000&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
