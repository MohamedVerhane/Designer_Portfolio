export function ArrowRight({
  className = 'h-5 w-5',
  strokeWidth = 1.6,
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
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h15" />
        <path d="m13 6 6 6-6 6" />
      </g>
    </svg>
  )
}

export function ArrowCurve({
  className = 'h-8 w-8',
  strokeWidth = 1.6,
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
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 5c0 8 9 8 14 8" />
        <path d="m15 9 4 4-4 4" />
      </g>
    </svg>
  )
}

export function ArrowDownRight({
  className = 'h-6 w-6',
  strokeWidth = 1.6,
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
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 6l12 12" />
        <path d="M18 9v9H9" />
      </g>
    </svg>
  )
}

export function ArrowUpRight({
  className = 'h-6 w-6',
  strokeWidth = 1.6,
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
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18 18 6" />
        <path d="M9 6h9v9" />
      </g>
    </svg>
  )
}

export function ArrowCycle({
  className = 'h-7 w-7',
  strokeWidth = 1.6,
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
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12a8 8 0 1 0-2.3 5.6" />
        <path d="M20 4v5h-5" />
      </g>
    </svg>
  )
}

export function ChevronDown({
  className = 'h-5 w-5',
  strokeWidth = 1.6,
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
        d="m5 9 7 7 7-7"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function DirectionalDash({
  className = 'h-24 w-24',
  strokeWidth = 1.4,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 96 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4 16h80a6 6 0 0 0 6-6v-2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray="3 5"
      />
    </svg>
  )
}
