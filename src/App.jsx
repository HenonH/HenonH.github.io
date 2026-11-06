import { useCallback, useEffect, useState } from 'react'
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProjectPage from './pages/ProjectPage'
import { AboutPage, ContactPage, ExperiencePage, HomePage, ProjectsPage } from './pages/Pages'

let lenis

function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    lenis = new Lenis({ duration: 1.1, autoRaf: true })
    return () => {
      lenis.destroy()
      lenis = undefined
    }
  }, [])
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" onExitComplete={() => (lenis ? lenis.scrollTo(0, { immediate: true }) : window.scrollTo(0, 0))}>
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, filter: 'blur(8px)' }}
        transition={{ duration: 0.4 }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const done = useCallback(() => setLoading(false), [])
  useSmoothScroll()

  return (
    <HashRouter>
      <AnimatePresence>{loading && <Loader key="loader" onDone={done} />}</AnimatePresence>
      {!loading && (
        <>
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </>
      )}
    </HashRouter>
  )
}
