import React from 'react'
import { useDispatch } from 'react-redux'
import { addCard } from '../../../reducer/cardsSlice'
import { fetchCard } from '../../../services/cards'

const CardControls = () => {
  const dispatch = useDispatch()

  const handleClick = async () => {
    const card = await fetchCard()
    dispatch(addCard(card))
  }
   
  return (
    <button onClick={handleClick} >add card</button>
  )
}

export default CardControls