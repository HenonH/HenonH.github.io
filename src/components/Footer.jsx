import { FileText, Mail } from 'lucide-react'
import { profile } from '../data/content'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
        <span>
          © {year} {profile.firstName} {profile.lastName}
        </span>
        <div className="flex items-center gap-5">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-crimson">
            <Mail className="h-4 w-4" />
          </a>
          <a href={profile.resume} className="flex items-center gap-2 transition-colors hover:text-crimson">
            <FileText className="h-4 w-4" /> Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
