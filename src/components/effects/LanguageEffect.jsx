import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import i18n from '../../i18n'

export default function LanguageEffect() {
  const lang = useSelector((state) => state.language.lang)

  useEffect(() => {
    i18n.changeLanguage(lang)
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    localStorage.setItem('lang', lang)
  }, [lang])

  return null
}
