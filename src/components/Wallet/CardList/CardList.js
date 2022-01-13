import React from 'react'
import { CardListContainer } from './CardList.style'
import Card from './Card/Card'

const CardList = ({cards}) => {
  return (
  <CardListContainer>
    {cards.map(card => {
      return <Card key={card.id} card={card} />
    })}  
  </CardListContainer>)
}

export default CardList