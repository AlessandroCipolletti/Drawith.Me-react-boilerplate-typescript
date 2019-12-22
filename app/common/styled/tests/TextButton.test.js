import React from 'react'
import { render } from 'react-testing-library'
import StyledComponentTest from 'common/TU/StyledComponentTest'

// Import de Theme Provider
import { ThemeProvider } from 'styled-components'
import Theme from 'common/Theme'
import TextButton from '../TextButton'

StyledComponentTest(TextButton, 'TextButton', 'div')

describe('<TextButton />', () => {
  const renderComponent = (props = {}) =>
    render(
      <ThemeProvider theme={Theme}>
        <TextButton {...props}>
          Content
        </TextButton>
      </ThemeProvider>,
    )

  it('Should get right cursor prop depending on "disabled" prop = false', () => {
    const disabled = false

    const {
      container: { firstChild },
    } = renderComponent({ disabled })
    const style = window.getComputedStyle(firstChild)

    expect(style.cursor).toBe('pointer')
  })

  it('Should get right cursor prop depending on "disabled" prop = true', () => {
    const disabled = true

    const {
      container: { firstChild },
    } = renderComponent({ disabled })
    const style = window.getComputedStyle(firstChild)

    expect(style.cursor).toBe('auto')
  })
})
