import Dexie from 'dexie'
// /* eslint-disable no-unused-vars */
// import setGlobalVars from 'indexeddbshim'
// setGlobalVars()

const db = new Dexie('DrawithMe.drawings')
db.version(1).stores({
  user: 'id, publicName, firstName, lastName',
  drawings: '++id, userId, folderId, state, createTime, updateTime, previewPath, imagePath, minX, minY, maxX, maxY, width, height',
  folders: '++id, name, order',
})

export default db
