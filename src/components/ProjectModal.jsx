import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import ImagePlaceholder from './ImagePlaceholder'

function Block({ label, children }) {
  return (
    <div className="border-t border-white/10 pt-6">
      <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-sky-300/80">{label}</h4>
      <div className="mt-3 text-neutral-300 leading-relaxed">{children}</div>
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
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
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
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-white/10 bg-neutral-900 sm:rounded-3xl"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-neutral-900/80 p-2 text-neutral-400 backdrop-blur transition-colors hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="p-6 sm:p-10">
              <ImagePlaceholder label={project.images[0]} accent={project.accent} className="aspect-[16/8]" />

              <div className="mt-8">
                <p className="font-mono text-xs text-neutral-500">{project.subtitle}</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white">{project.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-neutral-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 space-y-8">
                <Block label="Problem">
                  <p>{project.problem}</p>
                </Block>
                <Block label="What I Did">
                  <ul className="space-y-2">
                    {project.whatIDid.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-sky-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Block>
                <Block label="Engineering Focus">
                  <div className="grid gap-2 sm:grid-cols-2">
                    {project.focus.map((item) => (
                      <div key={item} className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </Block>
                <Block label="Results">
                  <p>{project.results}</p>
                </Block>
                <Block label="Gallery">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.images.slice(1).map((img) => (
                      <ImagePlaceholder key={img} label={img} accent={project.accent} className="aspect-[4/3]" />
                    ))}
                  </div>
                </Block>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
