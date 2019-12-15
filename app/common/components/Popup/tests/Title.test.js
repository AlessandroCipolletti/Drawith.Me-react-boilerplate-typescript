/**
 *
 * Tests for Header.Title
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render } from 'react-testing-library'

// Import de Theme Provider
import { ThemeProvider } from 'styled-components'
import Theme from 'common/Theme'

import { Header } from '../styled'

describe('<Header.Title />', () => {
  const renderComponent = (props = {}) =>
    render(
      <ThemeProvider theme={Theme}>
        <Header.Title {...props}>
          Content
        </Header.Title>
      </ThemeProvider>,
    )

  it('should render an <span> tag', () => {
    const { container } = renderComponent()
    expect(container.querySelector('span')).not.toBeNull()
  })

  it('should have a class attribute', () => {
    const { container } = renderComponent()
    expect(container.querySelector('span').hasAttribute('class')).toBe(true)
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const { container } = renderComponent({ id })
    expect(container.querySelector('span').id).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const { container } = renderComponent({ attribute: 'test' })
    expect(container.querySelector('a[attribute="test"]')).toBeNull()
  })
})
