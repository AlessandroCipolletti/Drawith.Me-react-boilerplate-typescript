import React from 'react'
import { render } from 'react-testing-library'

// Import de Theme Provider
import { ThemeProvider } from 'styled-components'
import Theme from 'common/theme'

import Shake from '../Shake'

describe('<Shake />', () => {
  const renderComponent = (props = {}) =>
    render(
      <ThemeProvider theme={Theme}>
        <Shake {...props}>
          Content
        </Shake>
      </ThemeProvider>,
    )

  it('Should render and match the snapshot while shaking', () => {
    const {
      container: { firstChild },
    } = renderComponent({ isShaking: true })

    expect(firstChild).toMatchSnapshot()
  })

  it('Should render and match the snapshot while not shaking', () => {
    const {
      container: { firstChild },
    } = renderComponent({ isShaking: false })

    expect(firstChild).toMatchSnapshot()
  })
})
