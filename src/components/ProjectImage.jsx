import ImagePlaceholder from './ImagePlaceholder'

export default function ProjectImage({ image, fit = 'cover', className = '' }) {
  if (!image) return <ImagePlaceholder label="Details on request" className={className} />

  return (
    <div className={`overflow-hidden rounded-xl border border-white/10 bg-neutral-100 ${className}`}>
      <img
        src={image.src}
        alt={image.caption}
        loading="lazy"
        className={`h-full w-full ${fit === 'cover' ? 'object-cover' : 'object-contain'}`}
      />
    </div>
  )
}
