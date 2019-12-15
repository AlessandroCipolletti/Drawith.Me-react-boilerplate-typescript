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
import { IntlProvider, injectIntl } from 'react-intl'
import { compose } from 'redux'

import { ThemeProvider } from 'styled-components'
import Theme from 'common/Theme'

import history from 'utils/history'
import configureStore from 'utils/configureStore'

import { Folder } from '../index'
import { DEFAULT_LOCALE } from '../../../utils/i18n'

describe('<Folder />', () => {
  const store = configureStore({}, history)

  const ComponentWithIntl = compose(injectIntl)(Folder)

  const renderComponent = (props = {}) =>
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <Provider store={store}>
          <ThemeProvider theme={Theme}>
            <ComponentWithIntl {...props} />
          </ThemeProvider>
        </Provider>
      </IntlProvider>,
    )

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')
    const dispatch = jest.fn()

    renderComponent({ dispatch })

    expect(spy).not.toHaveBeenCalled()
  })

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderComponent()

    expect(firstChild).toMatchSnapshot()
  })
})
