import { ImageIcon } from 'lucide-react'

export default function ImagePlaceholder({ label, accent = 'from-sky-500/20 to-transparent', className = '' }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${accent} ${className}`}
    >
      <div className="grid-bg absolute inset-0 opacity-60" style={{ animation: 'none' }} />
      <div className="relative flex flex-col items-center gap-2 text-neutral-400">
        <ImageIcon className="h-6 w-6" />
        <span className="font-mono text-[11px] uppercase tracking-wider">{label}</span>
      </div>
    </div>
  )
}
