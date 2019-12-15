import React from 'react'
import { render } from 'react-testing-library'

// Import de Theme Provider
import { ThemeProvider } from 'styled-components'
import Theme from 'common/Theme'

const StyledComponentTest = (Component, componentName, componentTag) => {
  if (!Component || !componentName || !componentTag) {
    return
  }

  describe(`<${componentName} />`, () => {
    const renderComponent = (props = {}) =>
      render(
        <ThemeProvider theme={Theme}>
          <Component {...props}>
            Content
          </Component>
        </ThemeProvider>,
      )

    it(`should render an <${componentTag}> tag`, () => {
      const { container } = renderComponent()
      expect(container.querySelector(componentTag)).not.toBeNull()
    })

    it('should have a class attribute', () => {
      const { container } = renderComponent()
      expect(container.querySelector(componentTag).hasAttribute('class')).toBe(
        true,
      )
    })

    it('should adopt a valid attribute', () => {
      const id = 'test'
      const { container } = renderComponent({ id })
      expect(container.querySelector(componentTag).id).toEqual(id)
    })

    it('should not adopt an invalid attribute', () => {
      const { container } = renderComponent({ attribute: 'test' })
      expect(container.querySelector(`${componentTag}[attribute="test"]`)).toBeNull()
    })
  })
}

export default StyledComponentTest
