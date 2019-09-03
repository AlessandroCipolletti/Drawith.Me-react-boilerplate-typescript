const mainColor = 'rgba(253, 83, 30, 0.5)'
const whiteColor = 'rgba(255, 255, 255, 1)'

const spacingUnit = 8

const Theme = {
  palette: {
    mainColor,
    whiteColor,
  },
  spacing: {
    xxs: `${spacingUnit * 1}px`,
    xs: `${spacingUnit * 2}px`,
    s: `${spacingUnit * 3}px`,
    m: `${spacingUnit * 4}px`,
    l: `${spacingUnit * 5}px`,
    xl: `${spacingUnit * 6}px`,
    xxl: `${spacingUnit * 7}px`,
  },
  UIColors: {
    popupBackgroundColor: mainColor,
  },
}

export default Theme
