import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, HeaderButton } from './styled'
import InfoButton from './components/InfoButton'

const AppHeader = ({
  headerButtons = [], showInfoPopup,
}) => (
  <Wrapper>
    {headerButtons.map(button => (
      <HeaderButton
        {...button}
        onClick={button.action}
      >
        {button.text || ''}
      </HeaderButton>
    ))}
    <InfoButton action={showInfoPopup} />
  </Wrapper>
)

AppHeader.propTypes = {
  headerButtons: PropTypes.array,
  showInfoPopup: PropTypes.func.isRequired,
}

export default AppHeader
