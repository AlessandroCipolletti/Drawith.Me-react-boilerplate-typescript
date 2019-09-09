import produce from 'immer'
import folderReducer from '../reducer'
import { defaultAction } from '../actions'

/* eslint-disable default-case, no-param-reassign */
describe('folderReducer', () => {
  let state
  beforeEach(() => {
    state = {
      // default state params here
      key: 'value',
    }
  })

  it('returns the initial state', () => {
    const expectedResult = state
    expect(folderReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the defaultAction action correctly', () => {
    const expectedResult = produce(state, draft => draft)
    expect(folderReducer(state, defaultAction())).toEqual(expectedResult)
  })
})
