import produce from 'immer'
import {
  REQUEST_LOCAL_DRAWINGS,
  RECEIVE_LOCAL_DRAWINGS,
} from './constants'

export const initialState = {
  isLoading: false,
  drawings: [],
}

/* eslint-disable default-case, no-param-reassign, consistent-return */
const folderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REQUEST_LOCAL_DRAWINGS:
        draft.isLoading = true
        break

      case RECEIVE_LOCAL_DRAWINGS:
        draft.drawings = action.drawings
        draft.isLoading = false
        break

      default:
        return draft
    }
  })

export default folderReducer
