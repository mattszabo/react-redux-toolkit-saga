import React from 'react'
import {CardsContainer} from './Cards.style'
import CardList from './CardList'
import { useSelector } from 'react-redux'
import { cardSelector } from '../../selectors/wallet';
import CardControls from './CardControls';

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