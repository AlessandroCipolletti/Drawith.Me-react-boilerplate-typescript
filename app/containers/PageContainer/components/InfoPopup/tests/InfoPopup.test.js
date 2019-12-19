import React from 'react'
import { render } from 'react-testing-library'

// Import de Intl Provider
import { IntlProvider, injectIntl } from 'react-intl'
import { compose } from 'redux'

// Import de Theme Provider
import { ThemeProvider } from 'styled-components'
import Theme from 'common/Theme'
import { DEFAULT_LOCALE } from 'utils/i18n'

import InfoPopup from '../InfoPopup'

describe('<InfoPopup />', () => {

  const ComponentWithIntl = compose(injectIntl)(InfoPopup)
  const renderComponent = (props = {}) => (
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <ThemeProvider theme={Theme}>
          <ComponentWithIntl {...props} />
        </ThemeProvider>
      </IntlProvider>,
    )
  )

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')
    const callback = () => {}

    renderComponent({ callback })

    expect(spy).not.toHaveBeenCalled()
  })

  it('Expect log an error in console if called without callback prop', () => {
    const spy = jest.spyOn(global.console, 'error')

    renderComponent()

    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('Should render and match the snapshot with default props', () => {
    const callback = () => {}

    const {
      container: { firstChild },
    } = renderComponent({ callback })

    expect(firstChild).toMatchSnapshot()
  })
})
