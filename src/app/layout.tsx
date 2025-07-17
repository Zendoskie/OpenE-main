import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OpenE - Intelligent Evaluation Tool for Open-Ended Questions',
  description: 'Revolutionary AI-powered evaluation system using GPT-4o and NLP to automatically analyze and score student responses. Providing clear, consistent, and constructive feedback in seconds. Perfect for computer literacy and critical-thinking subjects.',
  keywords: 'AI evaluation, educational technology, GPT-4o, NLP, automatic grading, open-ended questions, student assessment, educational AI',
  authors: [{ name: 'OpenE Research Team' }],
  openGraph: {
    title: 'OpenE - Intelligent Evaluation Tool',
    description: 'Revolutionary AI-powered evaluation system for educational assessment',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}