import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Languages } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { toggleTheme } from '../../redux/slices/themeSlice'
import { toggleLang } from '../../redux/slices/languageSlice'
import Logo from '../ui/Logo'
import { btnDark, btnDarkXL, btnIcon, btnMenu, container } from '../../styles/styles'

const navLinks = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.services', path: '/services' },
  { key: 'nav.projects', path: '/projects' },
  { key: 'nav.contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useSelector((state) => state.theme.theme)
  const lang = useSelector((state) => state.language.lang)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-card/80 backdrop-blur-xl shadow-[0_1px_0_0_var(--border-main)] dark:shadow-[0_1px_0_0_var(--border-main)]'
          : 'bg-transparent'
      }`}
    >
      <nav className={container} aria-label="Main navigation">
        <div className="flex h-[72px] items-center justify-between lg:h-20">
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            aria-label="Designer Studio — Home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-dark text-white dark:bg-white dark:text-ink font-bold text-sm tracking-tight transition-transform duration-300 group-hover:scale-105">
              <Logo className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-dark">
              Designer
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                  location.pathname === link.path
                    ? 'text-accent-600 bg-accent-50 dark:text-accent-400 dark:bg-accent-500/10'
                    : 'text-muted hover:text-dark hover:bg-stone-100 dark:hover:bg-white/10 dark:hover:text-white'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => dispatch(toggleTheme())}
              className={btnIcon}
              aria-label={t(theme === 'dark' ? 'nav.switchToLight' : 'nav.switchToDark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => dispatch(toggleLang())}
              className={`${btnIcon} gap-1.5 w-auto px-3 text-xs font-bold tracking-wide`}
              aria-label={t(lang === 'ar' ? 'nav.switchToEnglish' : 'nav.switchToArabic')}
            >
              <Languages className="h-4 w-4" />
              <span>{lang === 'ar' ? 'EN' : 'ع'}</span>
            </button>
            <Link
              to="/contact"
              className={`${btnDark} px-5 py-2.5`}
            >
              {t('common.getInTouch')}
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => dispatch(toggleTheme())}
              className={btnIcon}
              aria-label={t(theme === 'dark' ? 'nav.switchToLight' : 'nav.switchToDark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => dispatch(toggleLang())}
              className={`${btnIcon} gap-1.5 w-auto px-3 text-xs font-bold tracking-wide`}
              aria-label={t(lang === 'ar' ? 'nav.switchToEnglish' : 'nav.switchToArabic')}
            >
              <Languages className="h-4 w-4" />
              <span>{lang === 'ar' ? 'EN' : 'ع'}</span>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={btnMenu}
              aria-label={t(mobileOpen ? 'nav.closeMenu' : 'nav.openMenu')}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] bottom-0 z-40 bg-card/95 backdrop-blur-2xl dark:bg-ink/95 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col items-center justify-center min-h-[calc(100dvh-72px)] gap-2 pb-20" aria-label={t('nav.mobileNav')}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    className={`text-3xl font-semibold py-3 px-6 rounded-2xl transition-colors w-64 text-center block ${
                      location.pathname === link.path
                        ? 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-500/10'
                        : 'text-dark dark:text-white hover:bg-stone-100 dark:hover:bg-white/10'
                    }`}
                  >
                    {t(link.key)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
              >
                <Link
                  to="/contact"
                  className={`${btnDarkXL} px-8 py-4`}
                >
                  {t('common.getInTouch')}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
