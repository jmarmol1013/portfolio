"use client"
import { ThemeProvider } from 'next-themes'
import { NavBar } from './_components/NavBar'

export default function Home() {
  return (
    <ThemeProvider attribute='class'>
      <main className="flex min-h-screen flex-col items-center">
        <NavBar/>
      </main>
    </ThemeProvider>
  )
}