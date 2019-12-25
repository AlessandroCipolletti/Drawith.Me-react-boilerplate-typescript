import { put, takeEvery } from 'redux-saga/effects' // call
// import request from 'utils/request'
import db from 'utils/db'

// import { setErrorAction } from 'containers/PageContainer/actions'
import { REQUEST_LOCAL_DRAWINGS } from './constants'

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
    //   previewPath: '123',
    //   imagePath: '123456',
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

export default function* FolderPageListeners() {
  yield takeEvery(REQUEST_LOCAL_DRAWINGS, requestLocalDrawingsSaga)
}
