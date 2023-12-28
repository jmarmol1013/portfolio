"use client"
import { ThemeProvider } from 'next-themes'
import { NavBar } from '@/components/NavBarSection/NavBar'
import { Banner } from '@/components/Banner'
import { ScrollDown } from '@/components/ScrollDown'
import { About } from '@/components/AboutMe'
import { Skills } from '@/components/SkillsSection/Skills'
import { Resume } from '@/components/ResumeSection/Resume'
import { Projects } from '@/components/ProjectSection/Projects'
import { Contact } from '@/components/ContactSection/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <ThemeProvider attribute='class'>
      <main className="flex min-h-screen flex-col">
        <div className='min-h-screen'>
          <NavBar/>
          <Banner/>
          <ScrollDown/>
        </div>
        <About/>
        <Skills/>
        <Resume/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </ThemeProvider>
  )
}