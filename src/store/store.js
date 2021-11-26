import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../reducer/cardsSlice'

export const store = configureStore({
  reducer: {
    wallet: postReducer
  },
})