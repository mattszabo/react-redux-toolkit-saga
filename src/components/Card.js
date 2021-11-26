import React from 'react'
import { CardContainer, CardNumber, DeleteButton, Expiry } from './Cards.style'
import { deleteCard } from '../reducer/cardsSlice'
import { useDispatch } from 'react-redux'

const Card = ({data}) => {
  const dispatch = useDispatch()
  const { valid_card: cardNumber, month, year, id} = data

  const handleDelete = () => {
    console.log('delete')
    dispatch(deleteCard(id))
  }

  return (
    <CardContainer>
      <DeleteButton onClick={handleDelete}>x</DeleteButton>
      <CardNumber>{cardNumber}</CardNumber>
      <Expiry>{month}/{year.slice(-2)}</Expiry>
    </CardContainer>
  )
}

export default Card
