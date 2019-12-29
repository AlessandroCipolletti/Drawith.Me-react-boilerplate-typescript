/* eslint-disable no-multi-assign */

export const downloadImage = (url, title = 'image') => {
  if (!url) {
    throw new Error("downloadImage needs an url")
  }

  let anchor = document.createElement('a')
  let canvas = document.createElement('canvas')
  let context = canvas.getContext("2d")
  let img = new Image()
  img.onload = () => {
    canvas.width = img.width
    canvas.height = img.height
    context.drawImage(img, 0, 0)
    anchor.setAttribute('href', canvas.toDataURL("image/png"))
    anchor.setAttribute('download', `${title}.png`)
    anchor.click()
    anchor = canvas = context = img = undefined
  }
  img.src = url
}

export const a = 'a'
