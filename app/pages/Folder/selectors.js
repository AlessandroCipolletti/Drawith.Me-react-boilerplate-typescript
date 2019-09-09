import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectFolderDomain = state => state.folder || initialState

const makeSelectFolderKey = () =>
  createSelector(
    selectFolderDomain,
    folderState => folderState.key,
  )

export {
  selectFolderDomain,
  makeSelectFolderKey,
}
