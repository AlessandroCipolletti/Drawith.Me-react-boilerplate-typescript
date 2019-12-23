import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectFolderDomain = state => state.folder || initialState

const makeSelectFolderDrawings = () =>
  createSelector(
    selectFolderDomain,
    folderState => folderState.drawings,
  )

const makeSelectFolderLoading = () =>
  createSelector(
    selectFolderDomain,
    folderState => folderState.isLoading,
  )

export {
  selectFolderDomain,
  makeSelectFolderDrawings,
  makeSelectFolderLoading,
}
