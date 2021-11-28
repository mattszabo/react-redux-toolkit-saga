import React from 'react'
import { CardsContainer } from './Cards.style'
import CardList from './CardList/CardList'
import { useSelector } from 'react-redux'
import { cardSelector } from '../../selectors/wallet';
import CardControls from './CardControls/CardControls';


const Cards = () => {
  const cards = useSelector(cardSelector)
  
  return (
    <CardsContainer>
      <CardControls />
      <CardList cards={cards} />
    </CardsContainer>
  )
}

export default Cards