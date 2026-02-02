import React from "react"
import type { Metadata } from 'next'
import { Montserrat, Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-montserrat'
});
const roboto = Roboto({ 
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: '6В',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} ${roboto.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
