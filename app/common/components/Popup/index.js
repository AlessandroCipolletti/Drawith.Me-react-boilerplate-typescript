import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { FadeIn, FadeOut } from 'animate-css-styled-components'
import Theme from 'common/theme'

import Overlay from './Overlay'
import Wrapper from './Wrapper'

function Popup({
  callback, children,
}) {
  const [visible, setVisible] = React.useState(true)

  const close = () => {
    if (visible) {
      setVisible(false)
      setTimeout(callback, Theme.timing.fadeAnimation.ms)
    }
  }

  const content = (
    <Overlay onClick={close} data-testid="overlay">
      <Wrapper>
        {children}
      </Wrapper>
    </Overlay>
  )

  if (visible) {
    return (
      <FadeIn duration={Theme.timing.fadeAnimation.string}>
        {content}
      </FadeIn>
    )
  }

  return (
    <FadeOut duration={Theme.timing.fadeAnimation.string}>
      {content}
    </FadeOut>
  )
}

Popup.propTypes = {
  callback: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
}

export default memo(Popup)
