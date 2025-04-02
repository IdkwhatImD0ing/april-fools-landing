import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WeSlackOff - Slack Smarter, Not Harder',
  description: 'WeSlackOff is an invisible AI assistant for pretending to work. Join thousands of professionals who have reclaimed their time.',
  openGraph: {
    title: 'WeSlackOff - Slack Smarter, Not Harder',
    description: 'WeSlackOff is an invisible AI assistant for pretending to work. Join thousands of professionals who have reclaimed their time.',
    images: [
      {
        url: '/lol.png',
        width: 600,
        height: 400,
        alt: 'WeSlackOff Screenshot'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WeSlackOff - Slack Smarter, Not Harder',
    description: 'WeSlackOff is an invisible AI assistant for pretending to work. Join thousands of professionals who have reclaimed their time.',
    images: ['/lol.png']
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
