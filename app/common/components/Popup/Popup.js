import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Shake from 'common/styled/Shake'

import Theme from 'common/Theme'

import Icon from 'common/components/Icon'
import { Overlay, Wrapper, Header, Content } from './styled'

const Popup = ({
  callback, children, showClose = false, allowClose = true,
}) => {
  const [visible, setVisible] = React.useState(false)
  const [isShaking, setIsShaking] = React.useState(false)
  const overlayEl = React.useRef(null)
  const closeButtonEl = React.useRef(null)

  const close = React.useCallback(() => {
    setVisible(false)
    setTimeout(callback, Theme.timing.fadeAnimation.ms)
  }, [callback])

  const shake = React.useCallback(() => {
    setIsShaking(true)
    setTimeout(() => { setIsShaking(false) }, 1000)
  }, [])

  const onOverlayClick = React.useCallback((e) => {
    if (e.target === overlayEl.current && visible) {
      if (allowClose) {
        close()
      } else {
        shake()
      }
    }
  }, [visible, allowClose])

  React.useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <Overlay
      ref={overlayEl}
      onClick={onOverlayClick}
      data-testid="overlay"
      data-visible={visible}
    >
      <Shake isShaking={isShaking}>
        <Wrapper>
          {children}
          {showClose && allowClose &&
            <Wrapper.CloseButton ref={closeButtonEl}>
              <Icon name='exit' size={Theme.spacing.size5} color={Theme.palette.gray[9]} onClick={close} />
            </Wrapper.CloseButton>
          }
        </Wrapper>
      </Shake>
    </Overlay>
  )
}

Popup.propTypes = {
  callback: PropTypes.func.isRequired,
  children: PropTypes.any,
  showClose: PropTypes.bool,
  allowClose: PropTypes.bool,
}

Popup.Header = Header
Popup.Content = Content

export default memo(Popup)
