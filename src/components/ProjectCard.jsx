import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ProjectImage from './ProjectImage'

export default function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-panel p-3 text-left transition-colors duration-300 hover:border-accent/40"
    >
      <div className="overflow-hidden rounded-xl">
        <ProjectImage
          image={project.images[0]}
          className="aspect-[16/10] transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-3 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl text-white">{project.title}</h3>
            <p className="mt-1 text-sm font-medium text-accent">{project.subtitle}</p>
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-neutral-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-neutral-400">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  )
}
