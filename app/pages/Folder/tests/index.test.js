/**
 *
 * Tests for Folder
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render } from 'react-testing-library'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
// import 'jest-dom/extend-expect' // add some helpful assertions

// Import de Theme Provider
import { ThemeProvider } from 'styled-components'
import Theme from 'common/theme'

import history from 'utils/history'
import configureStore from 'utils/configureStore'

import { Folder } from '../index'
import { DEFAULT_LOCALE } from '../../../utils/i18n'

describe('<Folder />', () => {
  const store = configureStore({}, history)

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')
    const dispatch = jest.fn()

    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <Provider store={store}>
          <ThemeProvider theme={Theme}>
            <Folder dispatch={dispatch} />
          </ThemeProvider>
        </Provider>
      </IntlProvider>,
    )
    expect(spy).not.toHaveBeenCalled()
  })

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <Provider store={store}>
          <ThemeProvider theme={Theme}>
            <Folder />
          </ThemeProvider>
        </Provider>
      </IntlProvider>,
    )
    expect(firstChild).toMatchSnapshot()
  })
})
