/**
 *
 * Tests for Theme
 *
 */

import Theme from '../theme'

describe('<Overlay />', () => {
  it('should contain `palette` key', () => {
    const hasPalette = typeof Theme.palette !== 'undefined'

    expect(hasPalette).toBe(true)
  })

  it('should contain `spacing` keys xxs xs s m l xl xxl', () => {
    const hasSpacing = typeof Theme.spacing !== 'undefined'
    let xxs = false
    let xs = false
    let s = false
    let m = false
    let l = false
    let xl = false
    let xxl = false

    if (hasSpacing) {
      xxs = typeof Theme.spacing.xxs !== 'undefined'
      xs = typeof Theme.spacing.xs !== 'undefined'
      s = typeof Theme.spacing.s !== 'undefined'
      m = typeof Theme.spacing.m !== 'undefined'
      l = typeof Theme.spacing.l !== 'undefined'
      xl = typeof Theme.spacing.xl !== 'undefined'
      xxl = typeof Theme.spacing.xxl !== 'undefined'
    }

    expect(hasSpacing).toBe(true)
    expect(xxs).toBe(true)
    expect(xs).toBe(true)
    expect(s).toBe(true)
    expect(m).toBe(true)
    expect(l).toBe(true)
    expect(xl).toBe(true)
    expect(xxl).toBe(true)
  })

  it('should contain `UIColors` key', () => {
    const hasUIColors = typeof Theme.UIColors !== 'undefined'

    expect(hasUIColors).toBe(true)
  })

  it('should contain `timinng` key', () => {
    const hasTimig = typeof Theme.timing !== 'undefined'

    expect(hasTimig).toBe(true)
  })

  it('should not contain other keys than `palette` `spacing` `UIColors` `timing`', () => {
    const themeKeys = Object.keys(Theme)

    expect(themeKeys.length).toBe(4)
  })
})
