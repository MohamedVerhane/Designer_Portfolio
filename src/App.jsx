import { Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import ThemeEffect from './components/effects/ThemeEffect'
import LanguageEffect from './components/effects/LanguageEffect'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeEffect />
      <LanguageEffect />
      <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
    </MotionConfig>
  )
}
