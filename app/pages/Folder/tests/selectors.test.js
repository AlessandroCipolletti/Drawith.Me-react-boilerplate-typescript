import {
  selectFolderDomain,
  makeSelectFolderDrawings,
  makeSelectFolderLoading,
} from '../selectors'

describe('Folder Selectors', () => {
  it('selectFolderDomain should select the global page state', () => {
    const folderState = {}
    const mockedState = {
      folder: folderState,
    }

    expect(selectFolderDomain(mockedState)).toEqual(folderState)
  })

  it('makeSelectFolderDrawings should select the folder.drawings state', () => {
    const folderState = {
      isLoading: false,
      drawings: [{
        id: 1,
        data: '123',
      }],
    }
    const mockedState = {
      folder: folderState,
    }
    const drawingsSelector = makeSelectFolderDrawings()

    expect(drawingsSelector(mockedState)).toEqual(folderState.drawings)
  })

  it('makeSelectFolderLoading should select the folder.isLoading state', () => {
    const folderState = {
      isLoading: false,
      drawings: [],
    }
    const mockedState = {
      folder: folderState,
    }
    const loadingSelector = makeSelectFolderLoading()

    expect(loadingSelector(mockedState)).toEqual(folderState.isLoading)
  })
})
