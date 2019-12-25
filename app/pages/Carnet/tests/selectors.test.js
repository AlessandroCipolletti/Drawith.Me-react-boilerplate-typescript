import {
  selectCarnetDomain,
  makeSelectCarnetDrawings,
  makeSelectCarnetLoading,
} from '../selectors'

describe('Carnet Selectors', () => {
  it('selectCarnetDomain should select the global page state', () => {
    const carnetState = {}
    const mockedState = {
      carnet: carnetState,
    }

    expect(selectCarnetDomain(mockedState)).toEqual(carnetState)
  })

  it('makeSelectCarnetDrawings should select the carnet.drawings state', () => {
    const carnetState = {
      isLoading: false,
      drawings: [{
        id: 1,
        data: '123',
      }],
    }
    const mockedState = {
      carnet: carnetState,
    }
    const drawingsSelector = makeSelectCarnetDrawings()

    expect(drawingsSelector(mockedState)).toEqual(carnetState.drawings)
  })

  it('makeSelectCarnetLoading should select the carnet.isLoading state', () => {
    const carnetState = {
      isLoading: false,
      drawings: [],
    }
    const mockedState = {
      carnet: carnetState,
    }
    const loadingSelector = makeSelectCarnetLoading()

    expect(loadingSelector(mockedState)).toEqual(carnetState.isLoading)
  })
})
