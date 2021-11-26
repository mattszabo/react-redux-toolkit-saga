import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cards: [],
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.cards.push(action.payload)
      return {cards: [...state.cards, action.payload]}
    },
    deleteCard: (state, action) => {
      console.log({action})
      return {cards: state.cards.filter(({id}) => id !== action.payload)}
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCard, deleteCard } = cardsSlice.actions

export default cardsSlice.reducer