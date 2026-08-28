import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from './Navbar'
import Footer from './Footer'
import SiteBackground from '../effects/SiteBackground'

export default function Layout() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen relative bg-surface text-dark transition-colors duration-300">
      <SiteBackground />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-dark focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        {t('common.skipToContent')}
      </a>
      <div className="relative z-10">
        <Navbar />
        <main id="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
