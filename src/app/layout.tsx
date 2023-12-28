import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import icon from './favicon.ico';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Juan\'s Portafolio',
  description: 'Transforming ideas into digital solutions. Discover my expertise in Software Engineering through innovative projects',
  icons:{
    icon:'./icon.ico',
  }
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
