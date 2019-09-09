import { selectFolderDomain, makeSelectFolderKey } from '../selectors'

describe('Folder Selectors', () => {
  it('selectFolderDomain should select the global page state', () => {
    const folderState = {}
    const mockedState = {
      folder: folderState,
    }

    expect(selectFolderDomain(mockedState)).toEqual(folderState)
  })

  it('makeSelectFolderKey should select the folder.key state', () => {
    const folderState = {
      key: 'value',
    }
    const keySelector = makeSelectFolderKey()

    expect(keySelector(folderState)).toEqual(folderState.key)
  })
})
