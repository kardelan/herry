import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wig On Base - WIG$",
  description: "Wig On Base - The ultimate meme token on Base blockchain. 100% pure Base energy with $WIG ticker.",
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/favicon.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
        <meta name="theme-color" content="#3B82F6" />
        <meta property="og:title" content="Wig On Base - WIG$" />
        <meta property="og:description" content="Wig On Base - The ultimate meme token on Base blockchain. 100% pure Base energy with $WIG ticker." />
        <meta property="og:image" content="/favicon.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wig On Base - WIG$" />
        <meta name="twitter:description" content="Wig On Base - The ultimate meme token on Base blockchain. 100% pure Base energy with $WIG ticker." />
        <meta name="twitter:image" content="/favicon.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
