import {
  REQUEST_LOCAL_DRAWINGS,
  RECEIVE_LOCAL_DRAWINGS,
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
