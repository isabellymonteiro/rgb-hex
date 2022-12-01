function colorToHex(color) {
  const hex = color.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}

export function rgbToHex(red, green, blue) {
  return `#${colorToHex(red) + colorToHex(green) + colorToHex(blue)}`
}

export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}