import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'

const lightBlobs = [
  { cx: '15%', cy: '20%', r: 400, color: '#c7d2fe', dur: 30 },
  { cx: '80%', cy: '60%', r: 350, color: '#ddd6fe', dur: 35 },
  { cx: '50%', cy: '85%', r: 300, color: '#e0e7ff', dur: 28 },
  { cx: '65%', cy: '15%', r: 280, color: '#ede9fe', dur: 32 },
]

const darkBlobs = [
  { cx: '15%', cy: '20%', r: 400, color: '#4f46e5', dur: 30 },
  { cx: '80%', cy: '60%', r: 350, color: '#6366f1', dur: 35 },
  { cx: '50%', cy: '85%', r: 300, color: '#4338ca', dur: 28 },
  { cx: '65%', cy: '15%', r: 280, color: '#3730a3', dur: 32 },
]

const particles = [
  { x: 5, y: 8, size: 5, dur: 25, delay: 0 },
  { x: 12, y: 25, size: 4, dur: 30, delay: 1 },
  { x: 22, y: 15, size: 6, dur: 22, delay: 0.5 },
  { x: 35, y: 45, size: 4, dur: 28, delay: 2 },
  { x: 48, y: 10, size: 5, dur: 26, delay: 1.5 },
  { x: 55, y: 60, size: 4, dur: 24, delay: 0.8 },
  { x: 65, y: 30, size: 5, dur: 32, delay: 3 },
  { x: 75, y: 50, size: 4, dur: 20, delay: 1.2 },
  { x: 82, y: 20, size: 6, dur: 27, delay: 0.3 },
  { x: 90, y: 40, size: 4, dur: 29, delay: 2.5 },
  { x: 18, y: 70, size: 5, dur: 23, delay: 1.8 },
  { x: 42, y: 80, size: 4, dur: 31, delay: 0.7 },
  { x: 60, y: 75, size: 5, dur: 26, delay: 2.2 },
  { x: 78, y: 85, size: 4, dur: 24, delay: 1.4 },
  { x: 88, y: 65, size: 5, dur: 28, delay: 0.2 },
  { x: 8, y: 55, size: 4, dur: 25, delay: 3.2 },
  { x: 30, y: 90, size: 5, dur: 22, delay: 1.6 },
  { x: 52, y: 35, size: 4, dur: 30, delay: 2.8 },
  { x: 70, y: 12, size: 5, dur: 27, delay: 0.9 },
  { x: 95, y: 78, size: 4, dur: 23, delay: 2.1 },
]

const shapes = [
  { x: '8%', y: '12%', size: 10, delay: 0, dur: 20 },
  { x: '85%', y: '18%', size: 8, delay: 2, dur: 24 },
  { x: '75%', y: '65%', size: 12, delay: 1, dur: 22 },
  { x: '20%', y: '78%', size: 7, delay: 3, dur: 18 },
  { x: '50%', y: '8%', size: 9, delay: 0.5, dur: 26 },
  { x: '35%', y: '42%', size: 11, delay: 1.5, dur: 28 },
  { x: '62%', y: '55%', size: 8, delay: 2.5, dur: 20 },
  { x: '92%', y: '40%', size: 10, delay: 0.8, dur: 24 },
]

const rings = [
  { x: '18%', y: '30%', size: 30, delay: 0.3, dur: 22 },
  { x: '72%', y: '25%', size: 24, delay: 1.5, dur: 20 },
  { x: '55%', y: '70%', size: 28, delay: 2, dur: 24 },
  { x: '88%', y: '55%', size: 20, delay: 0.7, dur: 18 },
]

export default function SiteBackground() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const blobs = isDark ? darkBlobs : lightBlobs
  const dotColor = isDark ? '#818cf8' : '#6366f1'
  const particleColor = isDark ? 'rgba(129,140,248,0.3)' : 'rgba(99,102,241,0.3)'
  const shapeColor = isDark ? 'rgba(129,140,248,0.08)' : 'rgba(99,102,241,0.08)'
  const shapeBorder = isDark ? 'rgba(129,140,248,0.12)' : 'rgba(99,102,241,0.12)'
  const ringColor = isDark ? 'rgba(129,140,248,0.15)' : 'rgba(99,102,241,0.15)'

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden transition-colors duration-300" style={{ zIndex: 0, backgroundColor: isDark ? '#0c0a09' : '#fafaf9' }}>
      {blobs.map((b, i) => (
        <motion.div
          key={`blob-${i}`}
          className="absolute rounded-full"
          style={{
            left: b.cx,
            top: b.cy,
            width: b.r,
            height: b.r,
            backgroundColor: b.color,
            filter: 'blur(80px)',
            transform: 'translate(-50%, -50%)',
            opacity: isDark ? 0.15 : 0.5,
          }}
          animate={{
            x: [0, 60, -50, 0],
            y: [0, -50, 60, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {shapes.map((s, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute rounded-md"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            backgroundColor: shapeColor,
            border: `1px solid ${shapeBorder}`,
          }}
          animate={{
            y: [-12, 12, -12],
            opacity: [0.1, 0.3, 0.1],
            rotate: [i * 15, i * 15 + 90, i * 15],
          }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {rings.map((r, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute rounded-full"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
            border: `1.5px solid ${ringColor}`,
          }}
          animate={{
            y: [-10, 10, -10],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: r.dur, delay: r.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {particles.map((p, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: particleColor,
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
            opacity: [0.15, 0.5, 0.15],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.06 }}>
        <defs>
          <pattern id="site-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="0.5" cy="0.5" r="0.5" fill={dotColor} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#site-grid)" />
      </svg>
    </div>
  )
}
