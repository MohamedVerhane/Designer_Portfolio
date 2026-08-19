import { ArrowUpRight } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Services: [
    { label: 'Brand Identity', href: '#services' },
    { label: 'Product Design', href: '#services' },
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
  ],
  Connect: [
    { label: 'Twitter / X', href: '#', external: true },
    { label: 'LinkedIn', href: '#', external: true },
    { label: 'Dribbble', href: '#', external: true },
    { label: 'GitHub', href: '#', external: true },
  ],
}

export default function Footer() {
  const scrollTo = (e, href) => {
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-ink text-white border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Main footer */}
        <div className="py-16 lg:py-20 grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="flex items-center gap-2.5 group" aria-label="Designer Studio — Home">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-dark dark:bg-dark-card dark:text-white font-bold text-sm tracking-tight">
                M
              </div>
              <span className="text-lg font-semibold tracking-tight">Designer</span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-stone-400 max-w-xs">
              A digital design and development studio crafting experiences
              that move businesses forward.
            </p>
            <a
              href="mailto:hello@meridianstudio.com"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors"
            >
              hello@meridianstudio.com
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      className="text-sm text-stone-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1"
                    >
                      {link.label}
                      {link.external && <ArrowUpRight className="h-3 w-3 opacity-50" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-5">
              Stay Updated
            </h4>
            <p className="text-sm text-stone-400 mb-4">
              Occasional insights on design, engineering, and growth.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 w-full">
              <label htmlFor="footer-email" className="sr-only">Email for newsletter</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-stone-500 outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-accent-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-500 transition-colors active:scale-95"
                aria-label="Subscribe"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Designer Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
