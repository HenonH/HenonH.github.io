import ImagePlaceholder from './ImagePlaceholder'

export default function ProjectImage({ image, fit = 'cover', className = '' }) {
  if (!image) return <ImagePlaceholder label="Confidential" className={className} />

  return (
    <div className={`overflow-hidden bg-neutral-100 ${className}`}>
      <img
        src={image.src}
        alt={image.caption}
        loading="lazy"
        className={`h-full w-full ${fit === 'cover' ? 'object-cover' : 'object-contain'}`}
      />
    </div>
  )
}
