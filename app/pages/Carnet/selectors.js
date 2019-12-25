import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectCarnetDomain = state => state.carnet || initialState

const makeSelectCarnetDrawings = () =>
  createSelector(
    selectCarnetDomain,
    carnetState => carnetState.drawings,
  )

const makeSelectCarnetLoading = () =>
  createSelector(
    selectCarnetDomain,
    carnetState => carnetState.isLoading,
  )

export {
  selectCarnetDomain,
  makeSelectCarnetDrawings,
  makeSelectCarnetLoading,
}
