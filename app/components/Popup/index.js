import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'

import { FadeIn, FadeOut } from 'animate-css-styled-components'
import Theme from 'common/theme'

import Overlay from './Overlay'
import Wrapper from './Wrapper'

function Popup({
  callback,
}) {
  // TODO Test Unitaires
  const [visible, setVisible] = useState(true)

  const close = () => {
    if (visible) {
      setVisible(false)
      setTimeout(callback, parseFloat(Theme.timing.fadeAnimation) * 1000)
    }
  }

  const content = (
    <Overlay onClick={close}>
      <Wrapper>
        CONTENT
      </Wrapper>
    </Overlay>
  )

  if (visible) {
    return (
      <FadeIn duration={Theme.timing.fadeAnimation}>
        {content}
      </FadeIn>
    )
  }

  return (
    <FadeOut duration={Theme.timing.fadeAnimation}>
      {content}
    </FadeOut>
  )
}

Popup.propTypes = {
  callback: PropTypes.func.isRequired,
}

export default memo(Popup)
