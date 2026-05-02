import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: 'Frost Club | Transformação Estética Sem Bisturi',
  description:
    'O Método Frost transforma sua aparência em 14 dias. Sem bisturi, sem genética como desculpa, sem equipamentos. Um sistema testado por quem teve coragem de aplicar.',
  keywords: ['método frost', 'transformação estética', 'debloat facial', 'face training', 'estética masculina'],
  authors: [{ name: 'Frost Club' }],
  creator: 'Frost Club',
  metadataBase: new URL('https://frost-club.com'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://frost-club.com',
    siteName: 'Frost Club',
    title: 'Frost Club | Transformação Estética Sem Bisturi',
    description:
      'O Método Frost transforma sua aparência em 14 dias. Sem bisturi, sem genética como desculpa, sem equipamentos. Um sistema testado por quem teve coragem de aplicar.',
    images: [
      {
        url: '/arkan-logo.png',
        width: 380,
        height: 380,
        alt: 'Frost Club',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Frost Club | Transformação Estética Sem Bisturi',
    description:
      'O Método Frost transforma sua aparência em 14 dias. Sem bisturi, sem genética como desculpa, sem equipamentos.',
    images: ['/arkan-logo.png'],
  },
  icons: {
    icon: '/arkan-logo.png',
    shortcut: '/arkan-logo.png',
    apple: '/arkan-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
