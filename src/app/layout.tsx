import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tellora - AI Field Service Software | Auto-Answer Calls & Schedule Jobs',
  description: 'AI Phone that answers when you\'re busy. Auto-create job requests from calls directly. Call answered. Job scheduled. Payment processed. All automatic. Download free on App Store.',
  keywords: 'field service software, AI phone answering, auto scheduling, job management, payment processing, tellora app',
  authors: [{ name: 'Tellora, Inc.' }],
  creator: 'Tellora, Inc.',
  publisher: 'Tellora, Inc.',
  robots: 'index, follow',
  openGraph: {
    title: 'Tellora - AI Field Service Software',
    description: 'AI Phone that answers when you\'re busy. Auto-create job requests from calls directly. All automatic.',
    url: 'https://landing.tellora.ai',
    siteName: 'Tellora',
    images: [
      {
        url: '/360x360ia.png',
        width: 360,
        height: 360,
        alt: 'Tellora App Icon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tellora - AI Field Service Software',
    description: 'AI Phone that answers when you\'re busy. Auto-create job requests from calls directly.',
    images: ['/360x360ia.png'],
    creator: '@tellora',
  },
  metadataBase: new URL('https://landing.tellora.ai'),
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E5NXCB5LT0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E5NXCB5LT0');
            `
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
