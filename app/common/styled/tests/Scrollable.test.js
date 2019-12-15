import React from 'react'
import { render } from 'react-testing-library'

// Import de Theme Provider
import { ThemeProvider } from 'styled-components'
import Theme from 'common/Theme'

import {
  Scrollable,
  ScrollableCss,
} from '../Scrollable'

describe('<Scrollable />', () => {
  const renderComponent = (props = {}) =>
    render(
      <ThemeProvider theme={Theme}>
        <Scrollable {...props}>
          Content
        </Scrollable>
      </ThemeProvider>,
    )

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderComponent()

    expect(firstChild).toMatchSnapshot()
  })

  it('Should have public export ScrollableCss', () => {
    expect(ScrollableCss).toBeDefined()
  })
})
