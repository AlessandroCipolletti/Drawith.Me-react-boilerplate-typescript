/**
 *
 * Tests for CloseButton
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render } from 'react-testing-library'

// Import de Theme Provider
import { ThemeProvider } from 'styled-components'
import Theme from 'common/Theme'

import { Wrapper } from '../styled'

describe('<Wrapper.CloseButton />', () => {
  const renderComponent = (props = {}) =>
    render(
      <ThemeProvider theme={Theme}>
        <Wrapper.CloseButton {...props}>
          Content
        </Wrapper.CloseButton>
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
