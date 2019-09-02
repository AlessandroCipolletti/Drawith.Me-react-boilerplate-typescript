import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectFolderDomain = state => state.folder || initialState

const makeSelectFolder = () =>
  createSelector(
    selectFolderDomain,
    substate => substate,
  )

export default makeSelectFolder
export { selectFolderDomain }
