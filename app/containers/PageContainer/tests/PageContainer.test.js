import React from 'react'
import { render } from 'react-testing-library'

// Import de Intl Provider
import { IntlProvider, injectIntl } from 'react-intl'
import { compose } from 'redux'

// Import de Theme Provider
import { ThemeProvider } from 'styled-components'
import Theme from 'common/Theme'
import { DEFAULT_LOCALE } from 'utils/i18n'

import PageContainer from '../PageContainer'

describe('<PageContainer />', () => {

  const ComponentWithIntl = compose(injectIntl)(PageContainer)
  const renderComponent = (props = {}) => (
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <ThemeProvider theme={Theme}>
          <ComponentWithIntl {...props}>
            Content
          </ComponentWithIntl>
        </ThemeProvider>
      </IntlProvider>,
    )
  )

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')
    const name = 'name'

    renderComponent({ name })

    expect(spy).not.toHaveBeenCalled()
  })

  it('Expect log an error in console if called without name prop', () => {
    const spy = jest.spyOn(global.console, 'error')

    renderComponent()

    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('Should render and match the snapshot with default props', () => {
    const name = 'name'

    const {
      container: { firstChild },
    } = renderComponent({ name })

    expect(firstChild).toMatchSnapshot()
  })

})
