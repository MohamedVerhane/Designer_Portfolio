import { motion } from 'framer-motion'

const logos = [
  {
    name: 'Apex',
    svg: (
      <svg viewBox="0 0 120 36" fill="none" className="h-7 w-auto">
        <path d="M18 4L32 30H4L18 4Z" fill="currentColor" opacity="0.15" />
        <path d="M18 10L28 28H8L18 10Z" fill="currentColor" />
        <text x="38" y="24" fontFamily="Poppins,sans-serif" fontWeight="700" fontSize="20" fill="currentColor">Apex</text>
      </svg>
    ),
  },
  {
    name: 'Vertex',
    svg: (
      <svg viewBox="0 0 140 36" fill="none" className="h-7 w-auto">
        <circle cx="16" cy="18" r="12" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M10 22L16 12L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="36" y="24" fontFamily="Poppins,sans-serif" fontWeight="700" fontSize="20" fill="currentColor">Vertex</text>
      </svg>
    ),
  },
  {
    name: 'Nova',
    svg: (
      <svg viewBox="0 0 110 36" fill="none" className="h-7 w-auto">
        <rect x="4" y="4" width="28" height="28" rx="6" fill="currentColor" />
        <path d="M12 24V12L18 20L24 12V24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="40" y="24" fontFamily="Poppins,sans-serif" fontWeight="700" fontSize="20" fill="currentColor">Nova</text>
      </svg>
    ),
  },
  {
    name: 'Pulse',
    svg: (
      <svg viewBox="0 0 120 36" fill="none" className="h-7 w-auto">
        <path d="M4 18H10L14 8L18 28L22 14L26 22H32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="40" y="24" fontFamily="Poppins,sans-serif" fontWeight="700" fontSize="20" fill="currentColor">Pulse</text>
      </svg>
    ),
  },
  {
    name: 'Echo',
    svg: (
      <svg viewBox="0 0 110 36" fill="none" className="h-7 w-auto">
        <path d="M4 18C4 10 10 4 18 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
        <path d="M4 18C4 12 10 8 16 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        <path d="M4 18C4 13 9 10 14 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="4" cy="18" r="2" fill="currentColor" />
        <text x="26" y="24" fontFamily="Poppins,sans-serif" fontWeight="700" fontSize="20" fill="currentColor">Echo</text>
      </svg>
    ),
  },
  {
    name: 'Flux',
    svg: (
      <svg viewBox="0 0 105 36" fill="none" className="h-7 w-auto">
        <path d="M6 8C6 8 14 8 18 14C22 20 30 20 30 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M6 20C6 20 14 20 18 14C22 8 30 8 30 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
        <text x="38" y="24" fontFamily="Poppins,sans-serif" fontWeight="700" fontSize="20" fill="currentColor">Flux</text>
      </svg>
    ),
  },
]

export default function LogoCloud() {
  return (
    <section className="py-20 lg:py-24" aria-label="Trusted by">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium tracking-widest uppercase text-muted mb-12"
        >
          Trusted by teams building what&apos;s next
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-16"
        >
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="text-stone-300 dark:text-white/20 transition-colors duration-300 hover:text-stone-500 dark:hover:text-white/40 cursor-default"
              aria-label={logo.name}
            >
              {logo.svg}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 max-w-2xl mx-auto"
        >
          {[
            { value: '120+', label: 'Projects shipped' },
            { value: '40+', label: 'Clients worldwide' },
            { value: '8+', label: 'Years in business' },
            { value: '15', label: 'Countries reached' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-dark">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium text-muted uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
