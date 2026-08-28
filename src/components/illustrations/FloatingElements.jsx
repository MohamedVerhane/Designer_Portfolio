export function FloatDot({
  className = 'h-3 w-3',
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="6" fill="currentColor" />
    </svg>
  )
}

export function FloatRing({
  className = 'h-5 w-5',
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
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function FloatRingDot({
  className = 'h-6 w-6',
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g fill="currentColor">
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </g>
    </svg>
  )
}

export function FloatSquare({
  className = 'h-4 w-4',
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
      <rect
        x="5.5"
        y="5.5"
        width="13"
        height="13"
        rx="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" />
    </svg>
  )
}

export function FloatSquareSolid({
  className = 'h-3 w-3',
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect x="5" y="5" width="14" height="14" rx="3" fill="currentColor" />
    </svg>
  )
}

export function FloatTriangle({
  className = 'h-4 w-4',
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 4 21 19H3L12 4Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

export function FloatPlus({
  className = 'h-4 w-4',
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M6 12h12M12 6v12" />
      </g>
    </svg>
  )
}

export function FloatArc({
  className = 'h-6 w-6',
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
      <path
        d="M4 20c2.5-8.5 7-12.5 15-13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="19" cy="7" r="1.4" fill="currentColor" />
    </svg>
  )
}

export function FloatSparkle({
  className = 'h-5 w-5',
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 3c.6 4.5 2.5 6.4 7 7-4.5.6-6.4 2.5-7 7-.6-4.5-2.5-6.4-7-7 4.5-.6 6.4-2.5 7-7Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function FloatTag({
  className = 'h-5 w-5',
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
      <path
        d="M3 12V5a2 2 0 0 1 2-2h7l9 9-9 9-9-9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FloatChip({
  className = 'h-5 w-5',
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
      <g stroke="currentColor" strokeWidth="1.5">
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" strokeLinecap="round" />
        <rect x="10.5" y="10.5" width="3" height="3" rx="0.5" fill="currentColor" stroke="none" />
      </g>
    </svg>
  )
}
