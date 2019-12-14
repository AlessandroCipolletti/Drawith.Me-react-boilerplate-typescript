/**
 *
 * Tests for Popup
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render } from 'react-testing-library'

import Overlay from '../Overlay'

describe('<Overlay />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<Overlay />)
    expect(container.querySelector('div')).not.toBeNull()
  })

  it('should have a class attribute', () => {
    const { container } = render(<Overlay />)
    expect(container.querySelector('div').hasAttribute('class')).toBe(true)
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const { container } = render(<Overlay id={id} />)
    expect(container.querySelector('div').id).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<Overlay attribute="test" />)
    expect(container.querySelector('a[attribute="test"]')).toBeNull()
  })
})
