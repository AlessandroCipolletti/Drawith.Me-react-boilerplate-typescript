/**
 *
 * Tests for Header
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

describe('<Header />', () => {
  const renderComponent = (props = {}) =>
    render(
      <ThemeProvider theme={Theme}>
        <Header {...props}>
          Content
        </Header>
      </ThemeProvider>,
    )

  it('should render an <div> tag', () => {
    const { container } = renderComponent()
    expect(container.querySelector('div')).not.toBeNull()
  })

  it('should have a class attribute', () => {
    const { container } = renderComponent()
    expect(container.querySelector('div').hasAttribute('class')).toBe(true)
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const { container } = renderComponent({ id })
    expect(container.querySelector('div').id).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const { container } = renderComponent({ attribute: 'test' })
    expect(container.querySelector('a[attribute="test"]')).toBeNull()
  })
})
