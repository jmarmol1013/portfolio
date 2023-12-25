"use client"
import { ThemeProvider } from 'next-themes'
import { NavBar } from './_components/NavBar'
import { Banner } from './_components/Banner'
import { ScrollDown } from './_components/ScrollDown'

export default function Home() {
  return (
    <ThemeProvider attribute='class'>
      <main className="flex min-h-screen flex-col">
        <div className='min-h-screen'>
          <NavBar/>
          <Banner/>
          <ScrollDown/>
        </div>
      </main>
    </ThemeProvider>
  )
}