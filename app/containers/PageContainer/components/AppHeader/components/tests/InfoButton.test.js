import React from 'react'
import { render } from 'react-testing-library'

// Import de Theme Provider
import { ThemeProvider } from 'styled-components'
import Theme from 'common/Theme'

import InfoButton from '../InfoButton'

describe('<InfoButton />', () => {

  const renderComponent = (props = {}) => (
    render(
      <ThemeProvider theme={Theme}>
        <InfoButton {...props} />
      </ThemeProvider>,
    )
  )

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')
    const action = () => {}

    renderComponent({ action })

    expect(spy).not.toHaveBeenCalled()
  })

  it('Expect log an error in console if called without action prop', () => {
    const spy = jest.spyOn(global.console, 'error')

    renderComponent()

    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('Should render and match the snapshot with default props', () => {
    const action = () => {}

    const {
      container: { firstChild },
    } = renderComponent({ action })

    expect(firstChild).toMatchSnapshot()
  })
})
