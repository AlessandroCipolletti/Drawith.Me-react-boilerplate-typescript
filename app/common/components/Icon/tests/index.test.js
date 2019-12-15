/**
 *
 * Tests for Icon
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render, fireEvent } from 'react-testing-library'
// import 'jest-dom/extend-expect' // add some helpful assertions

// Import de Theme Provider
import { ThemeProvider } from 'styled-components'
import Theme from 'common/Theme'

import Icon from '../Icon'

describe('<Icon />', () => {
  const renderComponent = (props = {}) =>
    render(
      <ThemeProvider theme={Theme}>
        <Icon {...props} />
      </ThemeProvider>,
    )

  it('Expect to not log errors in console if called with a name prop', () => {
    const name = 'name'
    const spy = jest.spyOn(global.console, 'error')

    renderComponent({ name })

    expect(spy).not.toHaveBeenCalled()
  })

  it('Expect to log errors in console if called without a name prop', () => {
    const spy = jest.spyOn(global.console, 'error')

    renderComponent()

    expect(spy).toHaveBeenCalled()
  })

  it('Should render and match the snapshot with good props name, size, color', () => {
    const name = 'name'
    const size = Theme.spacing.size5
    const color = Theme.palette.primary[3]

    const {
      container: { firstChild },
    } = renderComponent({ name, size, color })

    expect(firstChild).toMatchSnapshot()
  })

  it('Should render and match the snapshot with prop disabled = true', () => {
    const name = 'name'
    const disabled = true

    const {
      container: { firstChild },
    } = renderComponent({ name, disabled })

    expect(firstChild).toMatchSnapshot()
  })

  it('Should call prop onClick on click if not disabled', () => {
    const name = 'name'
    const onClick = jest.fn()

    const { container: { firstChild } } = renderComponent({ name, onClick })
    fireEvent.click(firstChild)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('Should npt call prop onClick on click if disabled', () => {
    const name = 'name'
    const onClick = jest.fn()
    const disabled = true

    const { container: { firstChild } } = renderComponent({ name, onClick, disabled })
    fireEvent.click(firstChild)

    expect(onClick).toHaveBeenCalledTimes(0)
  })

})
