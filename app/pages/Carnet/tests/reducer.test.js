import produce from 'immer'
import carnetReducer from '../reducer'
import {
  requestLocalDrawingsAction,
  receiveLocalDrawingsAction,
  toggleDrawingSelectionAction,
  deselectAllDrawingsAction,
  deleteSelectedDrawingsAction,
} from '../actions'

/* eslint-disable default-case, no-param-reassign */
describe('carnetReducer', () => {
  let state
  const initialState = {
    isLoading: false,
    drawings: [],
  }

  beforeEach(() => {
    state = {
      isLoading: false,
      drawings: [{
        id: 0,
        data: 'data',
        selected: false,
      }],
    }
  })

  it('returns the initial state', () => {
    const expectedResult = initialState

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
      data: 'data',
      selected: false,
    }]
    const expectedResult = produce(state, draft => {
      draft.isLoading = false
      draft.drawings = drawings
    })

    expect(carnetReducer(state, receiveLocalDrawingsAction(drawings))).toEqual(expectedResult)
  })

  it('should handle the toggleDrawingSelectionAction action correctly', () => {
    const id = 0
    const firstExpectedResult = produce(state, draft => {
      draft.drawings[0].selected = true
    })
    const secondExpectedResult = produce(state, draft => {
      draft.drawings[0].selected = false
    })

    const tempState = carnetReducer(state, toggleDrawingSelectionAction(id))
    expect(tempState).toEqual(firstExpectedResult)
    expect(carnetReducer(tempState, toggleDrawingSelectionAction(id))).toEqual(secondExpectedResult)
  })

  it('should handle the deleteSelectedDrawingsAction action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.drawings = []
    })
    const tempState = carnetReducer(state, toggleDrawingSelectionAction(0))

    expect(carnetReducer(tempState, deleteSelectedDrawingsAction())).toEqual(expectedResult)
  })

  it('should handle the deselectAllDrawingsAction action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.drawings[0].selected = false
    })
    const tempState = carnetReducer(state, toggleDrawingSelectionAction(0))

    expect(carnetReducer(tempState, deselectAllDrawingsAction())).toEqual(expectedResult)
  })

})
