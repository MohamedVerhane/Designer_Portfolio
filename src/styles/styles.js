const base =
  'inline-flex items-center rounded-full text-sm font-medium transition-all duration-300 active:scale-[0.97]'
const b = (extra) => `${base} ${extra}`.trim()

export const btnDark = b(
  'bg-dark text-white dark:bg-white dark:text-ink hover:bg-accent-600 hover:text-white hover:shadow-lg hover:shadow-accent-600/25',
)

export const btnDarkXL = b(
  'bg-dark text-white dark:bg-white dark:text-ink text-base hover:bg-accent-600 hover:text-white hover:shadow-lg hover:shadow-accent-600/25',
)

export const btnWhite = b(
  'bg-white text-dark dark:bg-white dark:text-ink hover:bg-accent-500 hover:text-white hover:shadow-xl hover:shadow-accent-500/25',
)

export const btnWhiteOutline = b(
  'border border-white/15 text-white hover:border-white/30 hover:bg-white/5 text-center justify-center',
)

export const btnAccent = b(
  'bg-accent-600 text-white hover:bg-accent-500 hover:shadow-xl hover:shadow-accent-600/25',
)

export const btnHeroOutline = b(
  'border border-stone-200 dark:border-white/15 bg-card dark:bg-white/5 text-dark dark:text-white hover:border-stone-300 hover:shadow-md',
)

export const btnIcon =
  'flex h-10 w-10 items-center justify-center rounded-full text-muted hover:text-dark hover:bg-stone-100 dark:hover:bg-white/10 dark:hover:text-white transition-all duration-300'

export const btnMenu =
  'flex items-center justify-center h-10 w-10 rounded-full hover:bg-stone-100 dark:hover:bg-white/10 transition-colors text-dark dark:text-white'

export const container =
  'relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12'

export const cardIcon =
  'flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 dark:bg-accent-500/15 text-accent-600 transition-all duration-300 group-hover:bg-accent-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent-600/25'

export const sectionLabel =
  'inline-block text-xs font-semibold tracking-widest uppercase text-accent-600 mb-4'

export const sectionTitle =
  'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-dark leading-[1.12]'

export const cardBase =
  'group rounded-2xl bg-white dark:bg-dark-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-stone-200/50 dark:hover:shadow-black/20 hover:-translate-y-1 border border-transparent hover:border-stone-100 dark:hover:border-white/10'

export const cardImg =
  'h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'

export const floatCard =
  'bg-white dark:bg-dark-card rounded-xl shadow-lg shadow-dark/8 dark:shadow-black/30 p-3 ring-1 ring-stone-900/5 dark:ring-white/10'
