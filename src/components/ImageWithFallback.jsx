import { useState } from 'react'

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackClassName = '',
  fallbackContent,
  loading = 'lazy',
  ...props
}) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div
        className={fallbackClassName || className}
        role="img"
        aria-label={alt}
      >
        {fallbackContent}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setHasError(true)}
      {...props}
    />
  )
}
