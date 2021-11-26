import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from '../reducer/cardsSlice'

export const store = configureStore({
  reducer: {
    wallet: cardsReducer
  },
})