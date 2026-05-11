import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
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
      <head>
        {/* Meta Pixel Code - Debloat */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1243900850675680');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* End Meta Pixel Code */}
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
