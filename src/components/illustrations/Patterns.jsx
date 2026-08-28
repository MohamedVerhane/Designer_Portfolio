export function PatternDots({
  className = 'h-24 w-24',
  dotColor = 'currentColor',
  spacing = 16,
  ...props
}) {
  const dots = []
  const cols = 5
  const rows = 5
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push({ x: 8 + c * spacing, y: 8 + r * spacing, key: `${r}-${c}` })
    }
  }
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g fill={dotColor}>
        {dots.map((d) => (
          <circle key={d.key} cx={d.x} cy={d.y} r="2" opacity="0.28" />
        ))}
      </g>
    </svg>
  )
}

export function PatternGridLine({
  className = 'h-24 w-24',
  strokeColor = 'currentColor',
  ...props
}) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g stroke={strokeColor} strokeWidth="1" opacity="0.18">
        <path d="M20 0v80M40 0v80M60 0v80M0 20h80M0 40h80M0 60h80" />
        <path d="M0 0 80 80M80 0 0 80" strokeWidth="0.5" />
      </g>
    </svg>
  )
}

export function PatternPlusGrid({
  className = 'h-24 w-24',
  ...props
}) {
  const marks = []
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      marks.push({ x: 12 + c * 20, y: 12 + r * 20, key: `${r}-${c}` })
    }
  }
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.25">
        {marks.map((m) => (
          <path key={m.key} d={`M${m.x - 3} ${m.y}h6M${m.x} ${m.y - 3}v6`} />
        ))}
      </g>
    </svg>
  )
}

export function PatternWaves({
  className = 'h-14 w-full',
  fillColor = 'currentColor',
  ...props
}) {
  return (
    <svg
      viewBox="0 0 1200 56"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        d="M0 0c150 56 300 56 450 0s300-56 450 0 300 56 450 0v0H0Z"
        fill={fillColor}
        fillOpacity="0.12"
      />
      <path
        d="M0 28c160 40 320 40 480 0s320-40 480 0 240 40 240 40"
        fill="none"
        stroke={fillColor}
        strokeOpacity="0.25"
        strokeWidth="2"
      />
    </svg>
  )
}

export function PatternSparkleGrid({
  className = 'h-24 w-24',
  ...props
}) {
  const marks = []
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      marks.push({ x: 18 + c * 24, y: 18 + r * 24, key: `${r}-${c}` })
    }
  }
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g fill="currentColor" opacity="0.28">
        {marks.map((m) => (
          <path
            key={m.key}
            d={`M${m.x} ${m.y - 5}c.5 3 2 4.5 5 5-3 .5-4.5 2-5 5-.5-3-2-4.5-5-5 3-.5 4.5-2 5-5Z`}
          />
        ))}
      </g>
    </svg>
  )
}

export function PatternHalfCircle({
  className = 'h-16 w-40',
  ...props
}) {
  return (
    <svg
      viewBox="0 0 160 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M80 64A52 52 0 0 0 132 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="84" cy="60" r="3" fill="currentColor" />
    </svg>
  )
}

export function PatternChevrons({
  className = 'h-24 w-24',
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
        <path d="m20 24 10 10-10 10M40 24l10 10-10 10M60 24l10 10-10 10" />
      </g>
    </svg>
  )
}
