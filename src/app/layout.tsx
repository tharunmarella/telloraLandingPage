import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beam Phone - AI Business Phone | Maya Answers & Collects Pay',
  description: 'Never miss another opportunity. Maya AI answers when you\'re busy, qualifies leads, and you get paid in 60 seconds. The only business phone built for consultants and freelancers.',
  keywords: 'AI business phone, virtual assistant, instant invoicing, payment collection, Maya AI, beam phone, consultant phone, freelancer phone',
  authors: [{ name: 'Tellora, Inc.' }],
  creator: 'Tellora, Inc.',
  publisher: 'Tellora, Inc.',
  robots: 'index, follow',
  openGraph: {
    title: 'Beam Phone - AI Business Phone',
    description: 'Never miss another opportunity. Maya AI answers when you\'re busy, qualifies leads, and you get paid in 60 seconds.',
    url: 'https://landing.tellora.ai',
    siteName: 'Beam Phone',
    images: [
      {
        url: '/beam-phone-icon.png',
        width: 1024,
        height: 1024,
        alt: 'Beam Phone App Icon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beam Phone - AI Business Phone',
    description: 'Never miss another opportunity. Maya AI answers when you\'re busy, qualifies leads, and you get paid in 60 seconds.',
    images: ['/beam-phone-icon.png'],
    creator: '@beamphone',
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
