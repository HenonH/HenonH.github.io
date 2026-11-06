import { useState } from 'react'
import { profile } from '../data/content'
import ImagePlaceholder from './ImagePlaceholder'

export default function ProfilePhoto({ className = '' }) {
  const [missing, setMissing] = useState(false)

  if (missing) return <ImagePlaceholder label="Photo coming soon" className={className} />

  return (
    <div className={`overflow-hidden border border-white/10 ${className}`}>
      <img
        src={profile.photo}
        alt={`${profile.firstName} ${profile.lastName}`}
        onError={() => setMissing(true)}
        className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
      />
    </div>
  )
}
