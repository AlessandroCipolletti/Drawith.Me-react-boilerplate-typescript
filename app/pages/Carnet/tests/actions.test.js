import {
  requestLocalDrawingsAction,
  receiveLocalDrawingsAction,
  toggleDrawingSelectionAction,
  deselectAllDrawingsAction,
  deleteSelectedDrawingsAction,
  downloadSelectedDrawingsAction,
} from '../actions'
import {
  REQUEST_LOCAL_DRAWINGS,
  RECEIVE_LOCAL_DRAWINGS,
  TOGGLE_DRAWING_SELECTION,
  DESELECT_ALL_DRAWINGS,
  DELETE_SELETED_DRAWINGS,
  DOWNLOAD_SELETED_DRAWINGS,
} from '../constants'

describe('Carnet actions', () => {
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

  describe('Test toggleDrawingSelectionAction', () => {
    it('has a type of TOGGLE_DRAWING_SELECTION and the given id param', () => {
      const id = 123
      const expected = {
        type: TOGGLE_DRAWING_SELECTION,
        id,
      }

      expect(toggleDrawingSelectionAction(id)).toEqual(expected)
    })
  })

  describe('Test deselectAllDrawingsAction', () => {
    it('has a type of DESELECT_ALL_DRAWINGS', () => {
      const expected = {
        type: DESELECT_ALL_DRAWINGS,
      }

      expect(deselectAllDrawingsAction()).toEqual(expected)
    })
  })

  describe('Test deleteSelectedDrawingsAction', () => {
    it('has a type of DELETE_SELETED_DRAWINGS and the given drawings param', () => {
      const drawings = [{
        id: 1,
        data: '123',
      }]
      const expected = {
        type: DELETE_SELETED_DRAWINGS,
        drawings,
      }

      expect(deleteSelectedDrawingsAction(drawings)).toEqual(expected)
    })
  })

  describe('Test downloadSelectedDrawingsAction', () => {
    it('has a type of DOWNLOAD_SELETED_DRAWINGS and the given drawings param', () => {
      const drawings = [{
        id: 1,
        data: '123',
      }]
      const expected = {
        type: DOWNLOAD_SELETED_DRAWINGS,
        drawings,
      }

      expect(downloadSelectedDrawingsAction(drawings)).toEqual(expected)
    })
  })
})
