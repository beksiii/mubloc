import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Orienteering Championship',
    default: 'Orienteering Championship 2024',
  },
  description:
    'Website registrasi dan informasi kejuaraan orienteering nasional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='id'>
      <body className='font-sans antialiased'>{children}</body>
    </html>
  )
}
