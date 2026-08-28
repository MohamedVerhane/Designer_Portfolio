export function IllusDashboard({
  className = 'h-40 w-40',
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect x="8" y="16" width="104" height="84" rx="8" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="12" y="24" width="24" height="72" rx="4" fill="currentColor" opacity="0.14" />
      <rect x="44" y="40" width="30" height="56" rx="4" fill="currentColor" opacity="0.08" />
      <rect x="82" y="58" width="26" height="38" rx="4" fill="currentColor" opacity="0.14" />
      <path d="M8 22h104" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="16" cy="18" r="1.6" fill="currentColor" />
      <circle cx="22" cy="18" r="1.6" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

export function IllusGrowth({
  className = 'h-40 w-40',
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M14 96V22M14 96h92" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M24 80c12-18 20-20 30-10 12 12 20 4 32-12 6-8 12-12 20-16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <circle cx="106" cy="42" r="3" fill="currentColor" />
      <circle cx="24" cy="34" r="3.2" fill="currentColor" opacity="0.6" />
      <circle cx="60" cy="66" r="3.2" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

export function IllusCodeWindow({
  className = 'h-40 w-40',
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect x="10" y="18" width="100" height="78" rx="8" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M10 34h100" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="20" cy="26" r="2" fill="currentColor" />
      <circle cx="28" cy="26" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="36" cy="26" r="2" fill="currentColor" opacity="0.3" />
      <path d="m30 52 8 8-8 8M46 68h14" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="m70 46 10 14-10 14" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </svg>
  )
}

export function IllusMobile({
  className = 'h-40 w-40',
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect x="36" y="8" width="48" height="104" rx="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="60" cy="20" r="2" fill="currentColor" />
      <rect x="44" y="30" width="32" height="44" rx="5" fill="currentColor" opacity="0.12" />
      <path d="M44 62a10 10 0 0 1 10 4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" opacity="0.5" />
      <path d="M62 66a10 10 0 0 1 10-4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M52 80h16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

export function IllusRocket(
  {
  className = 'h-40 w-40',
  strokeWidth = 1.5,
  ...props
},
) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M60 108V78" />
        <path d="M48 20 60 8l12 12C70 26 50 26 48 20Z" />
        <path d="M60 30c-20 6-26 22-24 42l12 6 12-6c2-20-4-36-24-42ZM40 66 24 84l8 8 16-14M80 66l16 18-8 8-16-14" opacity="0.8" />
        <path d="M70 52a6 6 0 1 0-.001" />
      </g>
    </svg>
  )
}

export function IllusLightbulb({
  className = 'h-40 w-40',
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round">
        <path d="M60 16c-16 0-28 12-28 28 0 10 5 18 12 24v8c0 4 3 6 6 6h20c3 0 6-2 6-6v-8c7-6 12-14 12-24 0-16-12-28-28-28Z" />
        <path d="M50 82v6c0 4 4 8 10 8s10-4 10-8v-6" opacity="0.8" />
        <path d="M54 98h12" strokeLinecap="round" opacity="0.6" />
      </g>
      <path d="M52 36c0-6 5-9 9-8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

export function IllusHandshake({
  className = 'h-40 w-40',
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 72c10-8 22-8 30 0 6 6 8 10 6 16M96 72c-10-8-22-8-30 0-6 6-8 10-6 16" />
        <path d="M24 78 60 88M96 78 60 88" opacity="0.7" />
        <path d="M38 48 24 66M82 48l14 18" strokeWidth={strokeWidth - 0.2} opacity="0.9" />
      </g>
    </svg>
  )
}

export function IllusCube3d({
  className = 'h-40 w-40',
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round">
        <path d="M60 16 94 34l-34 18-34-18 34-18Z" fill="currentColor" opacity="0.14" />
        <path d="m26 52 34 18 34-18M60 70v30M94 34v32M26 66V34" opacity="0.85" />
      </g>
    </svg>
  )
}

export function IllusSearchUI({
  className = 'h-40 w-40',
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect x="14" y="14" width="92" height="68" rx="8" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="46" cy="42" r="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="m55.5 51.5 8 8M58 20h40" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <rect x="20" y="58" width="18" height="4" rx="2" fill="currentColor" opacity="0.4" />
      <rect x="44" y="58" width="18" height="4" rx="2" fill="currentColor" opacity="0.25" />
      <circle cx="84" cy="46" r="6" fill="currentColor" opacity="0.3" />
    </svg>
  )
}
