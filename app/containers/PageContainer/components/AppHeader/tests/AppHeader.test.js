import React from 'react'
import { render } from 'react-testing-library'

// Import de Theme Provider
import { ThemeProvider } from 'styled-components'
import Theme from 'common/Theme'

import AppHeader from '../AppHeader'

describe('<AppHeader />', () => {

  const renderComponent = (props = {}) => (
    render(
      <ThemeProvider theme={Theme}>
        <AppHeader {...props} />
      </ThemeProvider>,
    )
  )

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')
    const showInfoPopup = () => {}

    renderComponent({ showInfoPopup })

    expect(spy).not.toHaveBeenCalled()
  })

  it('Expect log an error in console if called without action prop', () => {
    const spy = jest.spyOn(global.console, 'error')

    renderComponent()

    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('Should render and match the snapshot with default props', () => {
    const showInfoPopup = () => {}

    const {
      container: { firstChild },
    } = renderComponent({ showInfoPopup })

    expect(firstChild).toMatchSnapshot()
  })

  it('Should render and match the snapshot with default props', () => {
    const showInfoPopup = () => {}
    const headerButtons = [{
      id: '0',
      icon: 'info',
      action: ()=>{},
    }, {
      id: '1',
      text: 'text',
      action: ()=>{},
    }]

    const { container } = renderComponent({ showInfoPopup, headerButtons })
    const buttonsLength = container.querySelectorAll('.HeaderButton').length

    expect(buttonsLength).toBe(headerButtons.length)
  })

})
