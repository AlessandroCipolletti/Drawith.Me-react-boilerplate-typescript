import React from 'react'
import { render } from 'react-testing-library'

// Import de Theme Provider
import { ThemeProvider } from 'styled-components'
import Theme from 'common/Theme'

import {
  SharpShadowCss,
  SharpShadow,
  DiffuseShadowCss,
  DiffuseShadow,
  SoftShadowCss,
  SoftShadow,
  ShorterShadowCss,
  ShorterShadow,
  LongerShadowCss,
  LongerShadow,
} from '../Shadows'

describe('<SharpShadow />', () => {
  const renderComponent = (props = {}) =>
    render(
      <ThemeProvider theme={Theme}>
        <SharpShadow {...props}>
          Content
        </SharpShadow>
      </ThemeProvider>,
    )

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderComponent()

    expect(firstChild).toMatchSnapshot()
  })

  it('Should have public export SharpShadowCss', () => {
    expect(SharpShadowCss).toBeDefined()
  })
})

describe('<DiffuseShadow />', () => {
  const renderComponent = (props = {}) =>
    render(
      <ThemeProvider theme={Theme}>
        <DiffuseShadow {...props}>
          Content
        </DiffuseShadow>
      </ThemeProvider>,
    )

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderComponent()

    expect(firstChild).toMatchSnapshot()
  })

  it('Should have public export DiffuseShadowCss', () => {
    expect(DiffuseShadowCss).toBeDefined()
  })
})

describe('<SoftShadow />', () => {
  const renderComponent = (props = {}) =>
    render(
      <ThemeProvider theme={Theme}>
        <SoftShadow {...props}>
          Content
        </SoftShadow>
      </ThemeProvider>,
    )

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderComponent()

    expect(firstChild).toMatchSnapshot()
  })

  it('Should have public export SoftShadowCss', () => {
    expect(SoftShadowCss).toBeDefined()
  })
})

describe('<ShorterShadow />', () => {
  const renderComponent = (props = {}) =>
    render(
      <ThemeProvider theme={Theme}>
        <ShorterShadow {...props}>
          Content
        </ShorterShadow>
      </ThemeProvider>,
    )

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderComponent()

    expect(firstChild).toMatchSnapshot()
  })

  it('Should have public export ShorterShadowCss', () => {
    expect(ShorterShadowCss).toBeDefined()
  })
})

describe('<LongerShadow />', () => {
  const renderComponent = (props = {}) =>
    render(
      <ThemeProvider theme={Theme}>
        <LongerShadow {...props}>
          Content
        </LongerShadow>
      </ThemeProvider>,
    )

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderComponent()

    expect(firstChild).toMatchSnapshot()
  })

  it('Should have public export LongerShadowCss', () => {
    expect(LongerShadowCss).toBeDefined()
  })
})
