/**
 *
 * Tests for Popup
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render } from 'react-testing-library'

// Import de Theme Provider
import { ThemeProvider } from 'styled-components'
import Theme from 'common/theme'

// import 'jest-dom/extend-expect' // add some helpful assertions

import Popup from '../index'

describe('<Popup />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')
    const callback = () => {}

    render(
      <ThemeProvider theme={Theme}>
        <Popup callback={callback} />
      </ThemeProvider>,
    )
    expect(spy).not.toHaveBeenCalled()
  })

  it('Should render and match the snapshot', () => {
    const callback = () => {}

    const {
      container: { firstChild },
    } = render(
      <ThemeProvider theme={Theme}>
        <Popup callback={callback} />
      </ThemeProvider>,
    )
    expect(firstChild).toMatchSnapshot()
  })
})
