export function parseColorRgbStringToRgba (color) {
  color = color.substring(4).replace(")", "").replace(" ", "").split(",")
  return {
    r: parseInt(color[0]),
    g: parseInt(color[1]),
    b: parseInt(color[2]),
    a: color[3] ? parseInt(color[3]) : 1,
  }
}

export function parseColorHexToRgb (hex) {
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
