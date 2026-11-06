import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import { profile } from './data/content'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 font-mono text-xs text-neutral-500 sm:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Designed & built with React + Tailwind</span>
        </div>
      </footer>
    </>
  )
}
