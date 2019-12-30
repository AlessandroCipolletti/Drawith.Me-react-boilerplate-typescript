import React from 'react'
import { render, fireEvent } from 'react-testing-library'

// Import de Theme Provider
import { ThemeProvider } from 'styled-components'
import Theme from 'common/Theme'

import DrawingsPreview from '../index'

describe('<DrawingsPreview />', () => {
  const renderComponent = (props = {}) => (
    render(
      <ThemeProvider theme={Theme}>
        <DrawingsPreview {...props} />
      </ThemeProvider>,
    )
  )

  beforeEach(() => {

  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')
    const id = 'id'
    const drawing = 'drawing'

    renderComponent({ id, drawing })

    expect(spy).not.toHaveBeenCalled()
  })

  it('Expect log an error in console if called without id prop', () => {
    const spy = jest.spyOn(global.console, 'error')
    const drawing = 'drawing'

    renderComponent({ drawing })

    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('Expect log an error in console if called without drawing prop', () => {
    const spy = jest.spyOn(global.console, 'error')
    const id = 'id'

    renderComponent({ id })

    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('Should render and match the snapshot with default props', () => {
    const id = 'id'
    const drawing = 'drawing'

    const {
      container: { firstChild },
    } = renderComponent({ id, drawing })

    expect(firstChild).toMatchSnapshot()
  })

  it('Should render and match the snapshot with all props', () => {
    const id = 'id'
    const drawing = 'drawing'
    const selectMode = true
    const selected = true
    const draft = true
    const onClick = () => {}

    const {
      container: { firstChild },
    } = renderComponent({ id, drawing, selectMode, selected, draft, onClick })

    expect(firstChild).toMatchSnapshot()
  })

  it('Should call onClick props with given id prop as param', () => {
    const id = 'id'
    const drawing = 'drawing'
    const onClick = jest.fn()

    const {
      container: { firstChild },
    } = renderComponent({ id, drawing, onClick })
    fireEvent.click(firstChild)

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledWith(id)
  })

})
