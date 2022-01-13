import React from 'react'
import { useDispatch } from 'react-redux'
import { addCard } from '../../../reducer/cardsSlice'
import { fetchCard } from '../../../services/cards'
import * as styles from './WalletControls.style'

const WalletControls = () => {
  const dispatch = useDispatch()

  const handleClick = async () => {
    const card = await fetchCard()
    dispatch(addCard(card))
  }
   
  return (
    <styles.Container>
      <styles.Button onClick={handleClick} >add card</styles.Button>
    </styles.Container>
  )
}

export default WalletControls