/**
 *
 * Tests for Config
 *
 */

// import Config from '../Config'

describe('The Config', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('should work for device with supportTouch', () => {
    global.ontouchstart = true
    const Config = require('../Config').default // eslint-disable-line global-require
    expect(Config.eventStart).toBe('touchstart')
  })

  it('should work for device without supportTouch', () => {
    global.ontouchstart = false
    const Config = require('../Config').default // eslint-disable-line global-require
    expect(Config.eventStart).toBe('mousedown')
  })
})
