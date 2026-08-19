import { MotionConfig } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoCloud from './components/LogoCloud'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SiteBackground from './components/SiteBackground'

export default function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen relative bg-surface text-dark transition-colors duration-300">
          <SiteBackground />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-dark focus:px-4 focus:py-2 focus:text-white focus:outline-none"
          >
            Skip to main content
          </a>
          <div className="relative z-10">
            <Navbar />
            <main id="main-content">
              <Hero />
              <LogoCloud />
              <About />
              <Services />
              <Projects />
              <WhyChooseUs />
              <Testimonials />
              <CTA />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </MotionConfig>
    </ThemeProvider>
  )
}
