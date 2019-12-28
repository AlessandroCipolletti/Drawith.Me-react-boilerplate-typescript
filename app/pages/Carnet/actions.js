import {
  REQUEST_LOCAL_DRAWINGS,
  RECEIVE_LOCAL_DRAWINGS,
  TOGGLE_DRAWING_SELECTION,
  DESELECT_ALL_DRAWINGS,
  DELETE_SELETED_DRAWINGS,
  DOWNLOAD_SELETED_DRAWINGS,
} from './constants'

export function requestLocalDrawingsAction() {
  return {
    type: REQUEST_LOCAL_DRAWINGS,
  }
}

export function receiveLocalDrawingsAction(drawings) {
  return {
    type: RECEIVE_LOCAL_DRAWINGS,
    drawings,
  }
}

export function toggleDrawingSelectionAction(id) {
  return {
    type: TOGGLE_DRAWING_SELECTION,
    id,
  }
}

export function deselectAllDrawingsAction() {
  return {
    type: DESELECT_ALL_DRAWINGS,
  }
}

export function deleteSelectedDrawingsAction(drawings) {
  return {
    type: DELETE_SELETED_DRAWINGS,
    drawings,
  }
}

export function downloadSelectedDrawingsAction(drawings) {
  return {
    type: DOWNLOAD_SELETED_DRAWINGS,
    drawings,
  }
}
