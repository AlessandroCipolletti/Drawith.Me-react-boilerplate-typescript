import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import StyledComponentTest from 'common/TU/StyledComponentTest'

// Import de Theme Provider
import { ThemeProvider } from 'styled-components'
import Theme from 'common/Theme'

import IconButton, { Wrapper } from '../IconButton'

StyledComponentTest(Wrapper, 'Wrapper', 'div')

describe('<IconButton Wrapper />', () => {
  const renderComponent = (props = {}) => (
    render(
      <ThemeProvider theme={Theme}>
        <Wrapper {...props} />
      </ThemeProvider>,
    )
  )

  it('Should get right cursor css depending on "disabled" prop = false', () => {
    const disabled = false

    const {
      container: { firstChild },
    } = renderComponent({ disabled })
    const style = window.getComputedStyle(firstChild)

    expect(style.cursor).toBe('pointer')
  })

  it('Should get right cursor css depending on "disabled" prop = true', () => {
    const disabled = true

    const {
      container: { firstChild },
    } = renderComponent({ disabled })
    const style = window.getComputedStyle(firstChild)

    expect(style.cursor).toBe('auto')
  })

  it('Should get right opacity css depending on "disabled" prop = false', () => {
    const disabled = false

    const {
      container: { firstChild },
    } = renderComponent({ disabled })
    const style = window.getComputedStyle(firstChild)

    expect(parseFloat(style.opacity)).toBe(1)
  })

  it('Should get right opacity css depending on "disabled" prop = true', () => {
    const disabled = true

    const {
      container: { firstChild },
    } = renderComponent({ disabled })
    const style = window.getComputedStyle(firstChild)

    expect(parseFloat(style.opacity)).toBeLessThan(1)
  })
})

describe('<IconButton />', () => {

  const renderComponent = (props = {}) => (
    render(
      <ThemeProvider theme={Theme}>
        <IconButton {...props} />
      </ThemeProvider>,
    )
  )

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')
    const icon = 'icom'

    renderComponent({ icon })

    expect(spy).not.toHaveBeenCalled()
  })

  it('Expect log an error in console if called without icon prop', () => {
    const spy = jest.spyOn(global.console, 'error')

    renderComponent()

    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('Should render and match the snapshot with default props', () => {
    const onClick = () => {}

    const {
      container: { firstChild },
    } = renderComponent({ onClick })

    expect(firstChild).toMatchSnapshot()
  })

  it('Should have the right onClick value depending on "disabled" prop = false', () => {
    const disabled = false
    const onClick = jest.fn()

    const {
      container: { firstChild },
    } = renderComponent({ disabled, onClick })
    fireEvent.click(firstChild)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('Should have the right onClick value depending on "disabled" prop = true', () => {
    const disabled = true
    const onClick = jest.fn()

    const {
      container: { firstChild },
    } = renderComponent({ disabled, onClick })
    fireEvent.click(firstChild)

    expect(onClick).toHaveBeenCalledTimes(0)
  })
})
