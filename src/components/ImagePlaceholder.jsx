export default function ImagePlaceholder({ label, className = '' }) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-4 overflow-hidden border border-white/10 bg-[radial-gradient(ellipse_at_center,rgba(220,20,60,0.18),transparent_70%)] bg-panel ${className}`}
    >
      <img src="./logo-crimson.png" alt="" className="h-16 w-16 opacity-80" />
      <span className="label">{label}</span>
    </div>
  )
}
