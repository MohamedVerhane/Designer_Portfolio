import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice'
import contactReducer from './slices/contactSlice'
import languageReducer from './slices/languageSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    contact: contactReducer,
    language: languageReducer,
  },
})
