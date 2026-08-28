import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function ThemeEffect() {
  const theme = useSelector((state) => state.theme.theme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return null
}
