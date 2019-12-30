import { createSelector } from 'reselect'
import { initialState } from './reducer'

export const selectCarnetDomain = state => state.carnet || initialState

export const makeSelectCarnetDrawings = () =>
  createSelector(
    selectCarnetDomain,
    carnetState => carnetState.drawings,
  )

export const makeSelectCarnetLoading = () =>
  createSelector(
    selectCarnetDomain,
    carnetState => carnetState.isLoading,
  )
