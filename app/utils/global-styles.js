import { createGlobalStyle } from 'styled-components'

import setFireToTheRain from 'medias/fonts/setFireToTheRain.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "setFireToTheRain";
    src: url(${setFireToTheRain});
  }

  * {
    user-select: none;
    outline: none;
    font-family: "setFireToTheRain", sans-serif;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 16px;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`

export default GlobalStyle
