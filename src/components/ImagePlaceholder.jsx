import { Lock } from 'lucide-react'

export default function ImagePlaceholder({ label, className = '' }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-accent/25 via-panel to-panel ${className}`}
    >
      <div className="grid-bg absolute inset-0 opacity-60" style={{ animation: 'none' }} />
      <div className="relative flex flex-col items-center gap-2 text-neutral-400">
        <Lock className="h-5 w-5" />
        <span className="font-mono text-[11px] uppercase tracking-wider">{label}</span>
      </div>
    </div>
  )
}
