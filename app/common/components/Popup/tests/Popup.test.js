/**
 *
 * Tests for Popup
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render } from 'react-testing-library'

// Import de Theme Provider
import { ThemeProvider } from 'styled-components'
import Theme from 'common/Theme'

import Popup from '../index'

describe('<Popup />', () => {
  // const setState = jest.fn()
  // const setStateSpy = jest.spyOn(React, 'useState')

  const renderComponent = (props = {}) => (
    render(
      <ThemeProvider theme={Theme}>
        <Popup {...props}>
          Content
        </Popup>
      </ThemeProvider>,
    )
  )

  beforeEach(() => {

  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')
    const callback = () => {}

    renderComponent({ callback })

    expect(spy).not.toHaveBeenCalled()
  })

  it('Expect log an error in console if called without callback prop', () => {
    const spy = jest.spyOn(global.console, 'error')

    renderComponent()

    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('Should render and match the snapshot with default props', () => {
    const callback = () => {}

    const {
      container: { firstChild },
    } = renderComponent({ callback })

    expect(firstChild).toMatchSnapshot()
  })

  it('Should render and match the snapshot with showClose = false', () => {
    const callback = () => {}
    const showClose = false

    const {
      container: { firstChild },
    } = renderComponent({ callback, showClose })

    expect(firstChild).toMatchSnapshot()
  })

  it('Should render and match the snapshot with showClose = true but allowClose = false', () => {
    const callback = () => {}
    const showClose = true
    const allowClose = false

    const {
      container: { firstChild },
    } = renderComponent({ callback, showClose, allowClose })

    expect(firstChild).toMatchSnapshot()
  })

  it('Should render and match the snapshot with showClose = true and allowClose = true', () => {
    const callback = () => {}
    const showClose = true
    const allowClose = true

    const {
      container: { firstChild },
    } = renderComponent({ callback, showClose, allowClose })

    expect(firstChild).toMatchSnapshot()
  })

})
