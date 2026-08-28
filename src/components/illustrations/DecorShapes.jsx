export function DecoSquares({
  className = 'h-6 w-6',
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round">
        <rect x="3" y="3" width="8" height="8" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" opacity="0.6" />
        <path d="M3 21V14" opacity="0.55" />
        <path d="M21 19v-9" opacity="0.55" />
      </g>
    </svg>
  )
}

export function DecoCircles({
  className = 'h-6 w-6',
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g stroke="currentColor" strokeWidth={strokeWidth}>
        <circle cx="8" cy="8" r="4" />
        <circle cx="18" cy="16" r="3.5" opacity="0.6" />
        <path d="M12 21h4" strokeLinecap="round" opacity="0.55" />
      </g>
      <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function DecoTriangle({
  className = 'h-6 w-6',
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round">
        <path d="M12 4 21 19H3L12 4Z" opacity="0.85" />
        <path d="M5 12h14" strokeLinecap="round" opacity="0.5" />
      </g>
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function DecoGear({
  className = 'h-6 w-6',
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M6 6l1.6 1.6M16.4 16.4 18 18M18 6l-1.6 1.6M7.6 16.4 6 18" opacity="0.8" />
      </g>
    </svg>
  )
}

export function DecoLayers({
  className = 'h-6 w-6',
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round">
        <path d="M12 4 21 9l-9 5-9-5 9-5Z" opacity="0.9" />
        <path d="M5.5 11.5 3.8 12.4 12 17l8.2-4.6-1.7-.9" opacity="0.6" />
        <path d="M5.5 15.5 3.8 16.4 12 21l8.2-4.6-1.7-.9" opacity="0.4" />
      </g>
    </svg>
  )
}

export function DecoGrid({
  className = 'h-6 w-6',
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g stroke="currentColor" strokeWidth={strokeWidth}>
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3z" opacity="0.9" />
        <path d="M14 14h7v7h-7z" opacity="0.45" />
        <path d="M10 6.5h4M6.5 10v4M17.5 10v4M17.5 17.5h-1" strokeLinecap="round" opacity="0.6" />
      </g>
    </svg>
  )
}
