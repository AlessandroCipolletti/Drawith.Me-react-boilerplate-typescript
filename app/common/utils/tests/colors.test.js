/**
 *
 * Tests for colors Utils
 *
 */

import * as colorsUtils from '../colors'

describe('colorsUtils', () => {
  it('parseColorRgbStringToRgba should work with a rgb string', () => {
    const rgbStringColor = 'rgb(0, 11, 222)'
    const expectedResult = {
      r: 0,
      g: 11,
      b: 222,
      a: 1,
    }

    const retult = colorsUtils.parseColorRgbStringToRgba(rgbStringColor)

    expect(retult).toEqual(expectedResult)
  })

  it('parseColorRgbStringToRgba should work with a rgba string', () => {
    const rgbaStringColor = 'rgb(0, 11, 222, 0.3)'
    const expectedResult = {
      r: 0,
      g: 11,
      b: 222,
      a: 0.3,
    }

    const retult = colorsUtils.parseColorRgbStringToRgba(rgbaStringColor)

    expect(retult).toEqual(expectedResult)
  })

  it('parseColorHexToRgb should work with hex string `xxxxxx`', () => {
    const hexString = 'abcdef'
    const expectedResult = {
      r: 171,
      g: 205,
      b: 239,
    }

    const retult = colorsUtils.parseColorHexToRgb(hexString)

    expect(retult).toEqual(expectedResult)
  })

  it('parseColorHexToRgb should work with hex color `#xxxxxx`', () => {
    const hexColor = '#abcdef'
    const expectedResult = {
      r: 171,
      g: 205,
      b: 239,
    }

    const retult = colorsUtils.parseColorHexToRgb(hexColor)

    expect(retult).toEqual(expectedResult)
  })

  it('parseColorRgbToHex should work with r g b numbers', () => {
    const r = 171
    const g = 205
    const b = 239
    const expectedResult = '#abcdef'

    const retult = colorsUtils.parseColorRgbToHex(r, g, b)

    expect(retult).toEqual(expectedResult)
  })

  it('parseColorHexToRgbaString should work with a color hex', () => {
    const hexColor = '#abcdef'
    const expectedResult = 'rgba(171, 205, 239, 1)'

    const retult = colorsUtils.parseColorHexToRgbaString(hexColor)

    expect(retult).toEqual(expectedResult)
  })

  it('parseColorHexToRgbaString should work with a color hex and an alpha', () => {
    const hexColor = '#abcdef'
    const alpha = 0.3
    const expectedResult = 'rgba(171, 205, 239, 0.3)'

    const retult = colorsUtils.parseColorHexToRgbaString(hexColor, alpha)

    expect(retult).toEqual(expectedResult)
  })
})
