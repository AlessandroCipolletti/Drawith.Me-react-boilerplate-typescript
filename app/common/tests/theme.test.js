/**
 *
 * Tests for Theme
 *
 */

import Theme from '../theme'

describe('The Theme', () => {
  it('should contain `palette` key', () => {
    const hasPalette = typeof Theme.palette !== 'undefined'
    expect(hasPalette).toBe(true)
  })

  it('should contain `spacing` key', () => {
    const hasSpacing = typeof Theme.spacing !== 'undefined'
    expect(hasSpacing).toBe(true)
  })

  it('should contain `fontSizing` key', () => {
    const hasFontSizing = typeof Theme.fontSizing !== 'undefined'
    expect(hasFontSizing).toBe(true)
  })

  it('should contain `UIColors` key', () => {
    const hasUIColors = typeof Theme.UIColors !== 'undefined'
    expect(hasUIColors).toBe(true)
  })

  it('should contain `timing` key', () => {
    const hasTimig = typeof Theme.timing !== 'undefined'
    expect(hasTimig).toBe(true)
  })

  it('should not contain other keys than `palette` `spacing` `fontSizing` `UIColors` `timing`', () => {
    const themeKeys = Object.keys(Theme)

    expect(themeKeys.length).toBe(5)
  })
})
