
import { createSelector } from '@reduxjs/toolkit'

export const walletSelector = ({wallet}) => wallet

export const cardSelector = createSelector(
  walletSelector,
  ({cards}) => cards
)