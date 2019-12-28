export function parseColorRgbStringToRgba (rgbaStringColor) {
  const colors = rgbaStringColor.substring(rgbaStringColor.indexOf('(') + 1).replace(")", "").replace(" ", "").split(",")
  return {
    r: parseInt(colors[0]),
    g: parseInt(colors[1]),
    b: parseInt(colors[2]),
    a: colors[3] ? parseFloat(colors[3]) : 1,
  }
}

export function parseColorHexToRgb (hex) {
  if (hex[0] === '#') {
    hex = hex.substr(1, 6)
  }

  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16),
  }
}

export function parseColorRgbToHex (r, g, b) {
  const hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  return `#${hex}`
}

export function parseColorHexToRgbaString (colorHex, alpha = 1) {
  const r = parseInt(colorHex.substr(1, 2), 16)
  const g = parseInt(colorHex.substr(3, 2), 16)
  const b = parseInt(colorHex.substr(5, 2), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
