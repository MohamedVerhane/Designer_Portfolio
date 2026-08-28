export function BlobSoft({
  className = 'h-40 w-40',
  fill = 'currentColor',
  ...props
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        fill={fill}
        fillOpacity="0.14"
        d="M46.7 -51.1C60.3 -38.7 70.4 -22.1 72.2 -4.4C74 13.3 67.5 32.1 55 45.5C42.5 58.9 24.2 66.9 4.7 67.1C-14.8 67.3 -35.2 59.7 -48.3 45.5C-61.4 31.3 -67.2 10.6 -64.1 -8.6C-61 -27.8 -49 -45.4 -34 -56.9C-19 -68.4 -1.1 -73.7 15.5 -70.5C32.1 -67.3 33.1 -63.5 46.7 -51.1Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}

export function BlobBubble({
  className = 'h-24 w-24',
  fill = 'currentColor',
  ...props
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        fill={fill}
        fillOpacity="0.12"
        d="M60 10c16 0 26 8 31 20 5 12 3 25-6 34-8 9-21 13-30 24-10-11-21-15-30-24-9-9-12-22-7-34 5-12 16-20 42-20Z"
      />
    </svg>
  )
}

export function BlobHalo({
  className = 'h-48 w-48',
  stroke = 'currentColor',
  ...props
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M100 25c31 0 52 18 55 41 3 24-12 42-4 64 7 21 26 14 28 28 2 13-17 20-40 18-22-2-32-16-55-14-22 2-33 16-50 8-16-7-18-22-12-42 6-20 18-26 18-44 0-20-12-34-4-45 7-10 22-8 64-14Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function WaveBand({
  className = 'h-10 w-40',
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 160 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        d="M0 20C20 6 34 6 54 20 74 34 88 34 108 20 128 6 142 6 160 20"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}

export function WaveDouble({
  className = 'h-16 w-56',
  fill = 'currentColor',
  ...props
}) {
  return (
    <svg
      viewBox="0 0 224 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
      {...props}
    >
      <path d="M0 42C28 26 44 26 72 42 100 58 124 58 152 42 180 26 196 26 224 42v22H0Z" fill={fill} fillOpacity="0.14" />
      <path d="M0 52C28 40 44 40 72 52 100 64 124 64 152 52 180 40 196 40 224 52v12H0Z" fill={fill} fillOpacity="0.1" />
    </svg>
  )
}

export function BracketCurly({
  className = 'h-10 w-16',
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 64 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M8 20c4-4 5-6 5-12V4c0-2 2-2-4-2M8 20c4 4 5 6 5 12v4c0 2 2 2-4 2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
