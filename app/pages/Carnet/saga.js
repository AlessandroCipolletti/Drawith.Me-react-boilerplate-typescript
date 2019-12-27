import { put, takeEvery } from 'redux-saga/effects' // call
// import request from 'utils/request'
import db from 'utils/db'

// import { setErrorAction } from 'containers/PageContainer/actions'
import {
  REQUEST_LOCAL_DRAWINGS,
  DELETE_SELETED_DRAWINGS,
  EXPORT_SELETED_DRAWINGS,
} from './constants'

import { receiveLocalDrawingsAction } from './actions'

export function* requestLocalDrawingsSaga() {
  try {
    // yield db.drawings.add({
    //   drawingId: 1,
    //   userId: 1,
    //   folderId: 1,
    //   state: 2,
    //   createTime: new Date().getTime(),
    //   updateTime: new Date().getTime(),
    //   previewPath: 'https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/firefox-true.png',
    //   imagePath: 'https://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg',
    //   minX: 0,
    //   minY: 0,
    //   maxX: 0,
    //   maxY: 0,
    //   width: 1200,
    //   height: 200,
    // })
    const drawings = yield db.drawings.orderBy('updateTime').desc().toArray()
    yield put(receiveLocalDrawingsAction(drawings))
  } catch (err) {
    // TODO: show error message
    console.log('db error: REQUEST_LOCAL_DRAWINGS: ', err)
  }
}

export function* deleteSelectedDrawingsSaga({ ids }) {
  try {
    ids.forEach(id => {
      db.drawings.delete(id)
    })
  } catch (err) {
    // TODO: show error message
    console.log('db error: DELETE_SELETED_DRAWINGS: ', err)
  }
}

export function* exportSelectedDrawingsSaga(/* {ids } */) {
  try {
    // TODO export images with proxy
  } catch (err) {
    // TODO: show error message
    console.log('db error: EXPORT_SELETED_DRAWINGS: ', err)
  }
}

export default function* FolderPageListeners() {
  yield takeEvery(REQUEST_LOCAL_DRAWINGS, requestLocalDrawingsSaga)
  yield takeEvery(DELETE_SELETED_DRAWINGS, deleteSelectedDrawingsSaga)
  yield takeEvery(EXPORT_SELETED_DRAWINGS, exportSelectedDrawingsSaga)
}
