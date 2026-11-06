import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, X } from 'lucide-react'
import ProjectImage from './ProjectImage'
import Button from './Button'
import { profile } from '../data/content'

function Block({ label, children }) {
  return (
    <div className="border-t border-white/10 pt-6">
      <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{label}</h4>
      <div className="mt-3 leading-relaxed text-neutral-300">{children}</div>
    </div>
  )
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl border border-white/10 bg-panel sm:rounded-3xl"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-ink/80 p-2 text-neutral-400 backdrop-blur transition-colors hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="p-6 sm:p-10">
              <ProjectImage image={project.images[0]} fit="contain" className="aspect-[16/9]" />

              <div className="mt-8">
                <h3 className="font-display text-3xl text-white sm:text-4xl">{project.title}</h3>
                <p className="mt-2 font-medium text-accent">{project.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-neutral-400">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {project.stats.length > 0 && (
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {project.stats.map((s) => (
                    <div key={s.label} className="rounded-xl border border-white/10 bg-ink p-4">
                      <div className="text-xl font-semibold text-white">{s.value}</div>
                      <div className="mt-1 text-xs text-neutral-500">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-10 space-y-8">
                <Block label="Problem">
                  <p>{project.problem}</p>
                </Block>
                <Block label="What I Did">
                  <ul className="space-y-3">
                    {project.whatIDid.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Block>
                <Block label="Engineering Focus">
                  <div className="grid gap-2 sm:grid-cols-2">
                    {project.focus.map((item) => (
                      <div key={item} className="rounded-lg border border-white/10 bg-ink px-4 py-3 text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </Block>
                <Block label="Results">
                  <p>{project.results}</p>
                </Block>

                {project.confidential && (
                  <Button href={`mailto:${profile.email}`} icon={Mail}>Ask me about it</Button>
                )}

                {project.images.length > 1 && (
                  <Block label="Gallery">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {project.images.slice(1).map((image) => (
                        <figure key={image.src}>
                          <a href={image.src} target="_blank" rel="noreferrer">
                            <ProjectImage
                              image={image}
                              fit="contain"
                              className="aspect-[4/3] transition-opacity hover:opacity-90"
                            />
                          </a>
                          <figcaption className="mt-2 text-xs text-neutral-500">{image.caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  </Block>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
