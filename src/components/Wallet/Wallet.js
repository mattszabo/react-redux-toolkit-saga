import React from 'react'
import * as styles from './Wallet.style'
import CardList from './CardList/CardList'
import { useSelector } from 'react-redux'
import { cardSelector } from '../../selectors/wallet';
import CardsControls from './WalletControls/WalletControls';


const Cards = () => {
  const cards = useSelector(cardSelector)
  
  return (
    <styles.WalletContainer>
      <styles.Header>Wallet</styles.Header>
      <CardsControls />
      <CardList cards={cards} />
    </styles.WalletContainer>
  )
}

export default Cards