/**
 *
 * Tests for Popup
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render, fireEvent, getByTestId } from 'react-testing-library'

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

  it('Should re-render et match the shapshot for hiding after calling setVisible(false)', () => {
    const callback = () => {}
    const allowClose = true

    const { asFragment, container } = renderComponent({ callback, allowClose })

    const overlay = getByTestId(container, 'overlay')
    fireEvent.click(overlay)

    expect(asFragment()).toMatchSnapshot()
  })

  it('Should prevent multiple calls of callback', async() => {
    const callback = jest.fn()
    const allowClose = true

    const { container } = renderComponent({ callback, allowClose })
    const overlay = getByTestId(container, 'overlay')
    fireEvent.click(overlay)
    fireEvent.click(overlay)
    fireEvent.click(overlay)
    await new Promise((resolve) => setTimeout(resolve, Theme.timing.fadeAnimation.ms * 1.5))

    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('Should prevent multiple calls of callback', async() => {
    const callback = jest.fn()
    const allowClose = false

    const { container } = renderComponent({ callback, allowClose })
    const overlay = getByTestId(container, 'overlay')
    fireEvent.click(overlay)
    await new Promise((resolve) => setTimeout(resolve, Theme.timing.fadeAnimation.ms * 1.5))

    expect(callback).toHaveBeenCalledTimes(0)
  })

  // it('Should set `visible` state to false on Overlay click via setVisible(false) if allowClose prop = true', () => {
  //   const callback = () => {}
  //   const allowClose = true
  //   setStateSpy.mockImplementation((init) => [init, setState])
  //
  //   const { container } = renderComponent({ callback, allowClose })
  //   const overlay = getByTestId(container, 'overlay')
  //   fireEvent.click(overlay)
  //
  //   expect(setState).toHaveBeenCalledTimes(1)
  //   expect(setState).toHaveBeenCalledWith(true)
  // })

  // it('Should NOT set `visible` state to false on Overlay click via setVisible(false) if allowClose prop = false', async() => {
  //   const callback = () => {}
  //   const allowClose = false
  //   setStateSpy.mockImplementation((init) => [init, setState])
  //
  //   const { container } = renderComponent({ callback, allowClose })
  //   const overlay = getByTestId(container, 'overlay')
  //   fireEvent.click(overlay)
  //   await new Promise((resolve) => setTimeout(resolve, 500))
  //
  //   expect(setState).toHaveBeenCalledTimes(1)
  //   expect(setState).toHaveBeenCalledWith(true)
  // })

})
