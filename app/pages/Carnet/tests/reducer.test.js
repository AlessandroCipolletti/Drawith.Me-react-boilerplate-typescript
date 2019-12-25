import produce from 'immer'
import carnetReducer from '../reducer'
import {
  requestLocalDrawingsAction,
  receiveLocalDrawingsAction,
} from '../actions'

/* eslint-disable default-case, no-param-reassign */
describe('carnetReducer', () => {
  let state
  beforeEach(() => {
    state = {
      isLoading: false,
      drawings: [],
    }
  })

  it('returns the initial state', () => {
    const expectedResult = state

    expect(carnetReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the requestLocalDrawingsAction action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.isLoading = true
    })

    expect(carnetReducer(state, requestLocalDrawingsAction())).toEqual(expectedResult)
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

    expect(carnetReducer(state, receiveLocalDrawingsAction(drawings))).toEqual(expectedResult)
  })
})
