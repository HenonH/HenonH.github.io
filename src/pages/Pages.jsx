import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'

const Divider = () => <div className="mx-auto max-w-6xl border-t border-white/10" />

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Divider />
      <ExperienceSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <ContactSection />
    </>
  )
}

export function AboutPage() {
  return (
    <>
      <Hero />
      <AboutSection />
    </>
  )
}

const Single = ({ children }) => <div className="pt-16">{children}</div>

export const ExperiencePage = () => (
  <Single>
    <ExperienceSection />
  </Single>
)

export const ProjectsPage = () => (
  <Single>
    <ProjectsSection />
  </Single>
)

export const ContactPage = () => (
  <Single>
    <ContactSection />
  </Single>
)
