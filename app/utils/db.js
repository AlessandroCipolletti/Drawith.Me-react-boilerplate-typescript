import Dexie from 'dexie'

if (!window.indexedDB) {
  Dexie.dependencies.indexedDB = require('fake-indexeddb') // eslint-disable-line global-require
  Dexie.dependencies.IDBKeyRange = require('fake-indexeddb/lib/FDBKeyRange') // eslint-disable-line global-require
}

const db = new Dexie('DrawithMe.drawings')
db.version(1).stores({
  user: 'id, publicName, firstName, lastName',
  drawings: '++id, userId, folderId, state, createTime, updateTime, previewPath, imagePath, minX, minY, maxX, maxY, width, height',
  folders: '++id, name, order',
})

export default db
