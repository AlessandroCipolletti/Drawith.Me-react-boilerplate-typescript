import {
  requestLocalDrawingsAction,
  receiveLocalDrawingsAction,
} from '../actions'
import {
  REQUEST_LOCAL_DRAWINGS,
  RECEIVE_LOCAL_DRAWINGS,
} from '../constants'

describe('Folder actions', () => {
  describe('Test requestLocalDrawingsAction', () => {
    it('has a type of REQUEST_LOCAL_DRAWINGS', () => {
      const expected = {
        type: REQUEST_LOCAL_DRAWINGS,
      }

      expect(requestLocalDrawingsAction()).toEqual(expected)
    })
  })

  describe('Test receiveLocalDrawingsAction', () => {
    it('has a type of RECEIVE_LOCAL_DRAWINGS and the given drawings param', () => {
      const drawings = [{
        id: 1,
        data: '123',
      }]
      const expected = {
        type: RECEIVE_LOCAL_DRAWINGS,
        drawings,
      }

      expect(receiveLocalDrawingsAction(drawings)).toEqual(expected)
    })
  })
})
