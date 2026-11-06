import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import SplitText from '../components/SplitText'
import Reveal from '../components/Reveal'
import Tag from '../components/Tag'
import Button from '../components/Button'
import ProjectImage from '../components/ProjectImage'
import { profile, projects } from '../data/content'

function Block({ label, children }) {
  return (
    <Reveal className="grid gap-4 border-t border-white/10 pt-8 md:grid-cols-[200px_1fr]">
      <h2 className="label pt-1 text-crimson">{label}</h2>
      <div className="text-lg leading-relaxed">{children}</div>
    </Reveal>
  )
}

export default function ProjectPage() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  if (!project) return <Navigate to="/projects" replace />

  return (
    <article className="mx-auto max-w-5xl px-6 pb-16 pt-32">
      <Link to="/projects" className="label transition-colors hover:text-crimson">
        ← All projects
      </Link>

      <h1 className="font-display mt-8 text-white" style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}>
        <SplitText text={project.title} stagger={0.03} />
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-4 text-xl text-crimson-soft"
      >
        {project.subtitle}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.8 }}
        className="mt-6 flex flex-wrap gap-2"
      >
        {project.tools.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
        animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
        transition={{ delay: 0.3, duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        className="mt-12"
      >
        <ProjectImage image={project.images[0]} fit="contain" className="aspect-[16/9]" />
      </motion.div>

      {project.stats.length > 0 && (
        <Reveal className="mt-10 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4">
          {project.stats.map((s) => (
            <div key={s.label} className="border-b border-r border-white/10 p-5">
              <div className="text-2xl font-semibold text-white">{s.value}</div>
              <div className="label mt-2 normal-case tracking-normal">{s.label}</div>
            </div>
          ))}
        </Reveal>
      )}

      <div className="mt-16 space-y-12">
        <Block label="Problem">
          <p>{project.problem}</p>
        </Block>
        <Block label="What I Did">
          <ul className="space-y-4">
            {project.whatIDid.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-[0.7em] h-px w-4 shrink-0 bg-crimson" />
                {item}
              </li>
            ))}
          </ul>
        </Block>
        <Block label="Engineering Focus">
          <div className="flex flex-wrap gap-2">
            {project.focus.map((f) => (
              <span key={f} className="border border-white/15 px-3 py-1.5 text-base text-neutral-300">
                {f}
              </span>
            ))}
          </div>
        </Block>
        <Block label="Results">
          <p>{project.results}</p>
          {project.confidential && (
            <div className="mt-8">
              <Button href={`mailto:${profile.email}`} variant="solid">Ask me about it</Button>
            </div>
          )}
        </Block>
      </div>

      {project.images.length > 1 && (
        <section className="mt-20">
          <p className="label mb-6">Gallery</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {project.images.slice(1).map((image, i) => (
              <Reveal key={image.src} delay={(i % 2) * 0.08}>
                <figure>
                  <a href={image.src} target="_blank" rel="noreferrer" className="group block overflow-hidden">
                    <ProjectImage
                      image={image}
                      fit="contain"
                      className="aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </a>
                  <figcaption className="label mt-3 normal-case tracking-normal">{image.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
