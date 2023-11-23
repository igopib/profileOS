import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/themeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gopinho - Profilev2',
  description: 'Personal webapp',
}

import Ocrb from 'next/font/local'
const ocrb = Ocrb({ src: '../public/fonts/ocrb.otf' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={ocrb.className}>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
