import { useCallback, useState } from 'react'
import Section from './Section'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects } from '../data/content'

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <Section id="projects" eyebrow="01 — Work" title="Selected projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} onOpen={setSelected} />
        ))}
      </div>
      <ProjectModal project={selected} onClose={close} />
    </Section>
  )
}
