import { createSlice } from '@reduxjs/toolkit'

const getInitialLang = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('lang') || 'en'
  }
  return 'en'
}

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    lang: getInitialLang(),
  },
  reducers: {
    setLang(state, action) {
      state.lang = action.payload === 'ar' ? 'ar' : 'en'
    },
    toggleLang(state) {
      state.lang = state.lang === 'ar' ? 'en' : 'ar'
    },
  },
})

export const { setLang, toggleLang } = languageSlice.actions
export default languageSlice.reducer
