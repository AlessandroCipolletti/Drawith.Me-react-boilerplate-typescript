import React, { memo } from 'react'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'

import Overlay from './Overlay'
import Wrapper from './Wrapper'

function Popup() {
  return (
    <Overlay>
      <Wrapper>POPAPPOOONE</Wrapper>
    </Overlay>
  )
}

Popup.propTypes = {}

export default memo(Popup)
