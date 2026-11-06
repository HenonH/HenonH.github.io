import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import Tag from './Tag'
import ProjectImage from './ProjectImage'
import { featuredProjects, otherProjects } from '../data/content'

function FeaturedCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={index === 0 ? 'md:col-span-2' : ''}
    >
      <Link to={`/projects/${project.id}`} className="group block">
        <div className="relative overflow-hidden">
          <ProjectImage
            image={project.images[0]}
            className={`${index === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
          />
          <div className="absolute inset-0 bg-crimson/0 transition-colors duration-500 group-hover:bg-crimson/10" />
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-4">
          <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-crimson-soft">
            {project.title}
          </h3>
          <span className="label shrink-0 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
        <p className="mt-2 leading-relaxed">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tools.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </Link>
    </motion.div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {featuredProjects.map((p, i) => (
          <FeaturedCard key={p.id} project={p} index={i} />
        ))}
      </div>

      <Reveal className="mt-28">
        <p className="label mb-6">Others</p>
        <ul className="border-t border-white/10">
          {otherProjects.map((p) => (
            <li key={p.id} className="border-b border-white/10">
              <Link
                to={`/projects/${p.id}`}
                className="group flex flex-col gap-2 py-6 transition-colors sm:flex-row sm:items-center sm:gap-8"
              >
                <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-crimson-soft sm:w-64 sm:shrink-0">
                  {p.title}
                </h3>
                <p className="flex-1 text-neutral-500">{p.subtitle}</p>
                <span className="label hidden transition-transform duration-300 group-hover:translate-x-1 sm:block">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
