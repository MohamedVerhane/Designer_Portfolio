import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Logo from '../ui/Logo'
import { container } from '../../styles/styles'

const footLink =
  'text-sm text-stone-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1'

const footHeading =
  'text-xs font-semibold tracking-widest uppercase text-stone-500 mb-5'

const footLogo =
  'flex h-9 w-9 items-center justify-center rounded-lg bg-white text-dark dark:bg-dark-card dark:text-white font-bold text-sm tracking-tight'

const footEmail =
  'mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors'

const footInput =
  'flex-1 min-w-0 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-stone-500 outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors'

const footerGroups = {
  company: [
    { labelKey: 'footer.links.about', path: '/about' },
    { labelKey: 'footer.links.careers', href: '#' },
    { labelKey: 'footer.links.blog', href: '#' },
    { labelKey: 'footer.links.press', href: '#' },
  ],
  services: [
    { labelKey: 'footer.links.brandIdentity', path: '/services' },
    { labelKey: 'footer.links.productDesign', path: '/services' },
    { labelKey: 'footer.links.webDevelopment', path: '/services' },
    { labelKey: 'footer.links.mobileApps', path: '/services' },
  ],
  connect: [
    { labelKey: 'footer.links.twitter', href: '#', external: true },
    { labelKey: 'footer.links.linkedin', href: '#', external: true },
    { labelKey: 'footer.links.dribbble', href: '#', external: true },
    { labelKey: 'footer.links.github', href: '#', external: true },
  ],
}

const headingKeys = {
  company: 'footer.companyHeading',
  services: 'footer.servicesHeading',
  connect: 'footer.connectHeading',
}

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="bg-ink text-white border-t border-white/5">
      <div className={container}>
        {/* Main footer */}
        <div className="py-16 lg:py-20 grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5 group" aria-label="Designer Studio — Home">
              <div className={footLogo}>
                <Logo className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold tracking-tight">Designer</span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-stone-400 max-w-xs">
              {t('footer.description')}
            </p>
            <a
              href="mailto:hello@designerstudio.com"
              className={footEmail}
            >
              hello@designerstudio.com
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerGroups).map(([group, links]) => (
            <div key={group} className="lg:col-span-2">
              <h4 className={footHeading}>
                {t(headingKeys[group])}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.labelKey}>
                    {link.path ? (
                      <Link
                        to={link.path}
                        className={footLink}
                      >
                        {t(link.labelKey)}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className={footLink}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                      >
                        {t(link.labelKey)}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className={footHeading}>
              {t('footer.newsletterHeading')}
            </h4>
            <p className="text-sm text-stone-400 mb-4">
              {t('footer.newsletterText')}
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 w-full">
              <label htmlFor="footer-email" className="sr-only">{t('footer.newsletterLabel')}</label>
              <input
                id="footer-email"
                type="email"
                placeholder={t('footer.newsletterPlaceholder')}
                className={footInput}
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-accent-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-500 transition-colors active:scale-95"
                aria-label={t('footer.subscribe')}
              >
                {t('footer.join')}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            {t('footer.rights', { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
