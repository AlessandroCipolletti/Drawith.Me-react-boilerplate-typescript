import produce from 'immer'
import folderReducer from '../reducer'
import {
  requestLocalDrawingsAction,
  receiveLocalDrawingsAction,
} from '../actions'

/* eslint-disable default-case, no-param-reassign */
describe('folderReducer', () => {
  let state
  beforeEach(() => {
    state = {
      isLoading: false,
      drawings: [],
    }
  })

  it('returns the initial state', () => {
    const expectedResult = state

    expect(folderReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the requestLocalDrawingsAction action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.isLoading = true
    })

    expect(folderReducer(state, requestLocalDrawingsAction())).toEqual(expectedResult)
  })

  it('should handle the receiveLocalDrawingsAction action correctly', () => {
    const drawings = [{
      id: 1,
      data: 123,
    }]
    const expectedResult = produce(state, draft => {
      draft.isLoading = false
      draft.drawings = drawings
    })

    expect(folderReducer(state, receiveLocalDrawingsAction(drawings))).toEqual(expectedResult)
  })
})
