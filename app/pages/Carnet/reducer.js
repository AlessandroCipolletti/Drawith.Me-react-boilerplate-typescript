import produce from 'immer'
import {
  REQUEST_LOCAL_DRAWINGS,
  RECEIVE_LOCAL_DRAWINGS,
  TOGGLE_DRAWING_SELECTION,
  DELETE_SELETED_DRAWINGS,
  DESELECT_ALL_DRAWINGS,
} from './constants'

export const initialState = {
  isLoading: false,
  drawings: [],
}

/* eslint-disable default-case, no-param-reassign, consistent-return, no-case-declarations */
const carnetReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REQUEST_LOCAL_DRAWINGS:
        draft.isLoading = true
        break

      case RECEIVE_LOCAL_DRAWINGS:
        draft.isLoading = false
        draft.drawings = action.drawings
        draft.drawings.forEach(d => { d.selected = false })
        break

      case TOGGLE_DRAWING_SELECTION:
        const index = draft.drawings.findIndex(d => d.id === action.id)
        draft.drawings[index].selected = !draft.drawings[index].selected
        break

      case DELETE_SELETED_DRAWINGS:
        draft.drawings = draft.drawings.filter(d => !d.selected)
        break

      case DESELECT_ALL_DRAWINGS:
        draft.drawings.forEach(d => { d.selected = false })
        break

      default:
        return draft
    }
  })

export default carnetReducer
